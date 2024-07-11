import React, {useEffect} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const TermsConditions = () => {
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
        <div>
            <Navbar />
            <div className='container-xl'>
            <div name="termly-embed" data-id="2125328d-2b1b-4c76-a23e-2f84d4022ad9"></div>
            </div>
            <Footer />
        </div>
    );
}

export default TermsConditions;