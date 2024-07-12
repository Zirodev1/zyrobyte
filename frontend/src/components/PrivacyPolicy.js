import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  useEffect(() => {
    const scriptId = "termly-jssdk";

    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://app.termly.io/embed-policy.min.js";
    script.type = "text/javascript";
    script.async = true;

    script.onload = () => {
      console.log("Termly script loaded successfully");
    };

    script.onerror = () => {
      console.error("Failed to load the Termly script");
      const fallbackMessage = document.createElement("div");
      fallbackMessage.innerText =
        "Failed to load the Privacy Policy. Please try again later.";
      document
        .querySelector('[name="termly-embed"]')
        .appendChild(fallbackMessage);
    };

    const tjs = document.getElementsByTagName("script")[0];
    tjs.parentNode.insertBefore(script, tjs);
  }, []);

  return (
    <>
      <Navbar />
      <div className="container-xl">
        <h1>Privacy Policy</h1>
        <h2>1. Information We Collect</h2>
        <p>We may collect and process the following data about you:</p>
        <ul>
          <li>
            <strong>Personal Identification Information:</strong> Name, email
            address, phone number, and any other information you provide by
            filling in forms on our Site.
          </li>
          <li>
            <strong>Technical Data:</strong> Internet Protocol (IP) address,
            browser type, version, time zone setting, browser plug-in types and
            versions, operating system, and platform.
          </li>
          <li>
            <strong>Usage Data:</strong> Information about how you use our Site,
            products, and services.
          </li>
          <li>
            <strong>Marketing and Communications Data:</strong> Your preferences
            in receiving marketing from us and your communication preferences.
          </li>
        </ul>

        <h2>2. How We Collect Information</h2>
        <p>
          We use different methods to collect data from and about you including
          through:
        </p>
        <ul>
          <li>
            <strong>Direct Interactions:</strong> You may give us your personal
            data by filling in forms or by corresponding with us by post, phone,
            email, or otherwise.
          </li>
          <li>
            <strong>Automated Technologies or Interactions:</strong> As you
            interact with our Site, we may automatically collect technical data
            about your equipment, browsing actions, and patterns.
          </li>
          <li>
            <strong>Third Parties or Publicly Available Sources:</strong> We may
            receive personal data about you from various third parties and
            public sources.
          </li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We use information held about you in the following ways:</p>
        <ul>
          <li>
            To provide you with information, products, or services that you
            request from us.
          </li>
          <li>
            To manage our relationship with you, including notifying you about
            changes to our services or asking you to leave a review or take a
            survey.
          </li>
          <li>
            To improve our Site, products/services, marketing, customer
            relationships, and experiences.
          </li>
          <li>
            To administer and protect our business and this Site, including
            troubleshooting, data analysis, testing, system maintenance,
            support, reporting, and hosting of data.
          </li>
          <li>
            To deliver relevant website content and advertisements to you and
            measure or understand the effectiveness of the advertising we serve
            to you.
          </li>
        </ul>

        <h2>4. Disclosure of Your Information</h2>
        <p>We may share your personal information with:</p>
        <ul>
          <li>
            Service providers who provide IT and system administration services.
          </li>
          <li>
            Professional advisers including lawyers, bankers, auditors, and
            insurers who provide consultancy, banking, legal, insurance, and
            accounting services.
          </li>
          <li>
            Third parties to whom we may choose to sell, transfer, or merge
            parts of our business or our assets.
          </li>
        </ul>

        <h2>5. Data Security</h2>
        <p>
          We have put in place appropriate security measures to prevent your
          personal data from being accidentally lost, used, or accessed in an
          unauthorized way, altered, or disclosed. In addition, we limit access
          to your personal data to those employees, agents, contractors, and
          other third parties who have a business need to know.
        </p>

        <h2>6. Your Legal Rights</h2>
        <p>
          Under certain circumstances, you have rights under data protection
          laws in relation to your personal data, including the right to:
        </p>
        <ul>
          <li>Request access to your personal data.</li>
          <li>Request correction of your personal data.</li>
          <li>Request erasure of your personal data.</li>
          <li>Object to processing of your personal data.</li>
          <li>Request restriction of processing your personal data.</li>
          <li>Request transfer of your personal data.</li>
          <li>Right to withdraw consent.</li>
        </ul>

        <h2>7. Changes to Our Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on this page. You
          are advised to review this Privacy Policy periodically for any
          changes.
        </p>

        <h2>8. Contact Information</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at:
        </p>
        <p>
          ZyroByte
          <br />
          Email: support@zyrobyte.com
        </p>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
