import React, {useEffect} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Refunds.css";

const Refunds = () => {
    useEffect(() => {
        const scriptId = 'termly-jssdk';
        
        if (document.getElementById(scriptId)) return;
        
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://app.termly.io/embed-policy.min.js';
        script.type = 'text/javascript';
        script.async = true;
        
        const tjs = document.getElementsByTagName('script')[0];
        tjs.parentNode.insertBefore(script, tjs);
      }, []);
      


  return (
    <>
      <Navbar />
      <div className="container-xl">
      <div name="termly-embed" data-id="8ef372d1-5575-4121-a5ea-32aa8a0b7c4e"></div>
      </div>
      <Footer />
    </>
  );
};

export default Refunds;
