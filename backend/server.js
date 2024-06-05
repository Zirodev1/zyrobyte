// server.js
require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const { body, validationResult } = require("express-validator");
const xss = require("xss");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const cookieParser = require("cookie-parser");
const path = require('path');

const app = express();
const upload = multer({ dest: "uploads/" });

app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

app.set("trust proxy", "loopback, linklocal, uniquelocal");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Middleware to parse JSON strings
app.use((req, res, next) => {
  if (req.body.projectType && typeof req.body.projectType === "string") {
    try {
      req.body.projectType = JSON.parse(req.body.projectType);
    } catch (error) {
      return res
        .status(400)
        .json({ errors: [{ msg: "Invalid projectType format" }] });
    }
  }
  next();
});

// POST endpoint to send quotes
app.post("/send-quote", async (req, res) => {
  const { parts: selectedParts, customer: customerInfo, totalCost } = req.body;
  try {
    let mailOptions = {
      from: process.env.EMAIL_USERNAME, 
      to: process.env.EMAIL_USERNAME, 
      subject: "Custom PC Quote Request",
      html: `
        <h1>Custom PC Quote Request</h1>
        <h2>Customer Information:</h2>
        <ul>
          <li><b>Name:</b> ${xss(customerInfo.name)}</li>
          <li><b>Email:</b> ${xss(customerInfo.email)}</li>
          <li><b>Message:</b> ${xss(customerInfo.message) || "None"}</li>
        </ul>
        <h2>Selected Parts:</h2>
        ${Object.values(selectedParts)
          .map(
            (part) => `
        <h3>${xss(part.title)}</h3>
        <img src="${xss(part.image_url)}" alt="${xss(
              part.title
            )}" style="height: 100px;">
        <p><b>Price:</b> ${xss(part.price)}</p>
      `
          )
          .join("")}
      <p><b>Total Cost:</b> ${xss(totalCost)}</p>
      `,
    };
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email", error);
    res
      .status(500)
      .json({ message: "Error sending email", error: error.toString() });
  }
});

app.post("/repairs", upload.none(), async (req, res) => {
  const { name, email, phone, deviceType, message } = req.body;

  try {
    let mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: process.env.EMAIL_USERNAME,
      subject: "Repair Service Request",
      html: `
        <h1>Repair Service Request</h1>
        <p><b>Name:</b> ${xss(name)}</p>
        <p><b>Email:</b> ${xss(email)}</p>
        <p><b>Phone:</b> ${xss(phone)}</p>
        <p><b>Device Type:</b> ${xss(deviceType)}</p>
        <p><b>Problem Description:</b> ${xss(message)}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Repair request sent successfully" });
  } catch (error) {
    console.error("Error processing repair request:", error);
    res
      .status(500)
      .json({
        message: "Error processing repair request",
        error: error.toString(),
      });
  }
});

app.post("/data-transfer", upload.none(), async (req, res) => {
  const {
    customerName,
    customerEmail,
    serviceType,
    storageType,
    storageAmount,
    storageUnit,
    message,
  } = req.body;
  try {
    let mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: process.env.EMAIL_USERNAME,
      subject: "Data Service Request",
      html: `
        <h1>Data ${xss(serviceType)} Request</h1>
        <p><b>Name:</b> ${xss(customerName)}</p>
        <p><b>Email:</b> ${xss(customerEmail)}</p>
        <p><b>Service Type:</b> ${xss(serviceType)}</p>
        <p><b>Storage Type:</b> ${xss(storageType)}</p>
        <p><b>Storage Size:</b> ${xss(storageAmount)} ${xss(storageUnit)}</p>
        <p><b>Description:</b> ${xss(message)}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Repair request sent successfully" });
  } catch (error) {
    console.error("Error processing repair request", error);
    res
      .status(500)
      .json({
        message: "Error processing repair request",
        error: error.toString(),
      });
  }
});

app.post("/web-development", upload.array("files", 10), async (req, res) => {
  const { name, email, phone, company, message, timeLine } = req.body;

  const files = req.files;

  try {
    const attachments = files.map((file) => ({
      filename: xss(file.originalname),
      path: file.path,
    }));

    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: process.env.EMAIL_USERNAME,
      subject: "Web Development Request",
      html: `
        <h1>Web Development Request</h1>
        <p><b>Name:</b> ${xss(name)}</p>
        <p><b>Email:</b> ${xss(email)}</p>
        <p><b>Phone:</b> ${xss(phone)}</p>
        <p><b>Company:</b> ${xss(company)}</p>
        <p><b>Description:</b> ${xss(message)}</p>
        <p><b>Time Line:</b> ${xss(timeLine)}</p>
      `,
      attachments: attachments,
    };

    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ message: "Web development request sent successfully" });
  } catch (error) {
    console.error("Error processing web development request", error);
    res
      .status(500)
      .json({
        message: "Error processing web development request",
        error: error.toString(),
      });
  }
});

app.post("/contact", upload.array("files", 10), async (req, res) => {

  const { name, email, phone, company, projectType, message } = req.body;

  console.log("Received request:", {
    name,
    email,
    phone,
    company,
    projectType,
    message,
  });

  const files = req.files;
  console.log("Received files:", files);

  try {
    const parsedProjectType = Array.isArray(projectType) ? projectType : [];

    const attachments = files.map((file) => ({
      filename: xss(file.originalname),
      path: file.path,
    }));

    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: process.env.EMAIL_USERNAME,
      subject: "Contact Request",
      html: `
        <h1>Contact Request</h1>
        <p><b>Name:</b> ${xss(name)}</p>
        <p><b>Email:</b> ${xss(email)}</p>
        <p><b>Phone:</b> ${xss(phone)}</p>
        <p><b>Company:</b> ${xss(company)}</p>
        <p><b>Project Type:</b> ${xss(parsedProjectType.join(", "))}</p>
        <p><b>Message:</b> ${xss(message)}</p>
      `,
      attachments: attachments,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    res.status(200).json({ message: "Contact request sent successfully" });
  } catch (error) {
    console.error("Error processing contact request:", error);
    res
      .status(500)
      .json({
        message: "Error processing contact request",
        error: error.toString(),
      });
  }
});

// Serve static files from the frontend build directory
app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});