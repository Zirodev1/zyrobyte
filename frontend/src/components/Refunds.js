import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Refunds.css";

const Refunds = () => {
  useEffect(() => {
    const scriptId = "termly-jssdk";

    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://app.termly.io/embed-policy.min.js";
    script.type = "text/javascript";
    script.async = true;

    const tjs = document.getElementsByTagName("script")[0];
    tjs.parentNode.insertBefore(script, tjs);
  }, []);

  return (
    <>
      <Navbar />
      <div className="container-xl">
        <div className="refunds-container">
          <h1>Refunds</h1>
          <p>
            If you are not entirely satisfied with your purchase, we're here to
            help.
          </p>
          <h2>Returns</h2>
          <p>
            You have 30 calendar days to return an item from the date you
            received it. To be eligible for a return, your item must be unused
            and in the same condition that you received it. Your item must be in
            the original packaging. Your item needs to have the receipt or proof
            of purchase.
          </p>
          <h2>Refunds</h2>
          <p>
            Once we receive your item, we will inspect it and notify you that we
            have received your returned item. We will immediately notify you on
            the status of your refund after inspecting the item. If your return
            is approved, we will initiate a refund to your credit card (or
            original method of payment). You will receive the credit within a
            certain amount of days, depending on your card issuer's policies.
          </p>
          <h2>Contact Us</h2>
          <p>
            If you have any questions on how to return your item to us, contact
            us at contact@zyrobyte.com.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Refunds;
