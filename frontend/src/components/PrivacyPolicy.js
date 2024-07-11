import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  useEffect(() => {
    const scriptId = 'termly-jssdk';
    
    if (document.getElementById(scriptId)) return;
    
    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://app.termly.io/embed-policy.min.js';
    script.type = 'text/javascript';
    script.async = true;
    
    script.onload = () => {
      console.log("Termly script loaded successfully");
    };
    
    script.onerror = () => {
      console.error("Failed to load the Termly script");
      const fallbackMessage = document.createElement('div');
      fallbackMessage.innerText = "Failed to load the Privacy Policy. Please try again later.";
      document.querySelector('[name="termly-embed"]').appendChild(fallbackMessage);
    };
    
    const tjs = document.getElementsByTagName('script')[0];
    tjs.parentNode.insertBefore(script, tjs);
  }, []);

  return (
    <>
      <Navbar />
      <div className="container-xl my-5">
        <div name="termly-embed" data-id="b9f62342-c7f6-4731-9b59-672527c4a2db"></div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;



      