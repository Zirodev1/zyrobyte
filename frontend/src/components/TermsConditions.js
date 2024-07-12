import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const TermsConditions = () => {
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
    <div>
      <Navbar />
      <div className="container-xl">
        <div>
          <h1>Terms & Conditions</h1>

          <h2>1. TERMS</h2>
          <p>
            By accessing the website at zyrobyte.com you are agreeing to be
            bound by these terms of service, all applicable laws and
            regulations, and agree that you are responsible for compliance with
            any applicable local laws. If you do not agree with any of these
            terms, you are prohibited from using or accessing this site. The
            materials contained in this website are protected by applicable
            copyright and trademark law.
          </p>

          <h2>2. COURSE ENROLLMENT</h2>
          <p>
            As a student, when you enroll in a course, whether it’s a free or
            paid course, you are getting from ZyroByte a licence to view the
            course via our platform, and ZyroByte is the licensor of record.
            Courses are licensed, and not sold, to you for a period of time.
            This licence does not give you any right to resell the course in any
            manner (including by sharing account information or illegally
            downloading the course and sharing it on torrent sites).
          </p>
          <p>
            When you buy a course, you purchase only a viewing licence of the
            course and not support or tutoring regarding the course topic.
          </p>
          <p>
            ZyroByte is a stand-alone website and is not related to any other
            sites, including Udemy. Therefore, any courses purchased on Udemy
            cannot be transferred or discounted on to ZyroByte under any
            circumstances.
          </p>
          <p>
            However, if you purchased a course on Udemy, you will continue to
            have "lifetime access" to the course as per Udemy terms &
            conditions.
          </p>

          <h2>3. USE LICENCE</h2>
          <p>
            Permission is granted to temporarily download resources, such as
            source code, articles, and exercises to help your personal learning
            only. The video lectures are to be only accessed online through the
            platform, and strictly prohibited from download.
          </p>
          <p>
            This is for personal, non-commercial transitory viewing only. This
            is the grant of a licence, not a transfer of title, and under this
            licence you may not:
          </p>
          <ul>
            <li>
              Modify or copy the materials (including take screenshots of video
              lectures);
            </li>
            <li>
              Use the materials for any commercial purpose, or for any public
              display (commercial or non-commercial);
            </li>
            <li>
              Remove any copyright or other proprietary notations from the
              materials; or
            </li>
            <li>
              Transfer the materials to another person or "mirror" the materials
              on any other server.
            </li>
          </ul>
          <p>
            This licence shall automatically terminate if you violate any of
            these restrictions at any time without any refund possibilities.
            Upon terminating your viewing of these materials or upon the
            termination of this licence, you must destroy any downloaded
            materials in your possession whether in electronic or printed
            format.
          </p>

          <h2>4. ACCOUNTS</h2>
          <p>
            You need an account for most activities on our platform that
            includes purchasing and enrolling in a course. When setting up and
            maintaining your account, you must provide and continue to provide
            accurate and complete information, including a valid email address.
            You have complete responsibility for your account and everything
            that happens on your account, including for any harm or damage (to
            us or anyone else) caused by someone using your account without your
            permission. This means you need to be careful with your password.
          </p>
          <p>
            You are strictly prohibited to share your account login credential
            with anyone else. You may not transfer your account to someone else
            or use someone else’s account.
          </p>
          <p>
            We reserve the right to ban your account should we discover such
            activity without any refund.
          </p>
          <p>
            Students must be at least 18 years of age to create an account on
            ZyroByte and use the Services. If you are younger than the required
            age, you may not set up an account. If we discover that you have
            created an account and you are younger than the required age for
            consent to use online services, we will terminate your account.
          </p>
          <p>
            You can terminate your account yourself at any time by sending us an
            email at info@zyrobyte.com.
          </p>

          <h2>5. LIFETIME ACCESS</h2>
          <p>
            We generally give a lifetime access license to our students when
            they enroll in a paid course. It means you have no monthly
            subscription fees; you pay once and continue to have access to the
            video lectures for the lifetime of the course even after you
            complete it, provided that your account is in good standing.
          </p>
          <p>
            The lifetime access is for video lectures only and not applicable to
            discussion board or other add-on features and services associated
            with a course, for example quizzes, articles etc.
          </p>

          <h2>6. DISCUSSION BOARD</h2>
          <p>
            Any questions in relation to the course content must be discussed in
            the discussion board and not via emails. You are to remain polite
            and respectful towards others in the discussion board. You may
            engage in exchange of ideas while being mindful of not spamming.
          </p>
          <p>
            When you enroll in a course, you purchase only a viewing licence of
            the video lectures and not support or tutoring regarding the topic.
            The instructor may engage in the discussion board from time to time,
            but is under no obligation to answer student questions. You are not
            entitled to get answers in the discussion forum or get lifetime
            access to the discussion forum. Most importantly, you are not to use
            the discussion board to get help on your schoolwork. Any
            contribution or post that you make in the discussion board can be
            deleted at any time or not be accessible without notice or cause.
          </p>

          <h2>7. REFUNDS</h2>
          <p>
            If the course you purchased is not what you were expecting, you can
            request, within 14 days of your purchase of the course, that
            ZyroByte refund your account. No refund is due to you if you request
            it after the 14-day guarantee time limit has passed.
          </p>
          <p>To request a refund, follow the steps here.</p>
          <p>
            At our discretion, if we believe you are abusing our refund policy,
            we reserve the right to ban your account and to restrict all future
            use of the services.
          </p>

          <h2>8. DISCLAIMER</h2>
          <p>
            The materials on the website are provided on an 'as is' basis.
            ZyroByte makes no warranties, expressed or implied, and hereby
            disclaims and negates all other warranties including, without
            limitation, implied warranties or conditions of merchantability,
            fitness for a particular purpose, or non-infringement of
            intellectual property or other violation of rights.
          </p>
          <p>
            Further, ZyroByte does not warrant or make any representations
            concerning the accuracy, likely results, or reliability of the use
            of the materials on its website or otherwise relating to such
            materials or on any sites linked to this site.
          </p>

          <h2>9. LIMITATIONS</h2>
          <p>
            In no event shall ZyroByte or its suppliers be liable for any
            damages (including, without limitation, damages for loss of data or
            profit, or due to business interruption) arising out of the use or
            inability to use the materials on ZyroByte's website, even if
            ZyroByte or a ZyroByte authorized representative has been notified
            orally or in writing of the possibility of such damage. Because some
            jurisdictions do not allow limitations on implied warranties, or
            limitations of liability for consequential or incidental damages,
            these limitations may not apply to you.
          </p>

          <h2>10. ACCURACY OF MATERIALS</h2>
          <p>
            The materials appearing on ZyroByte’s website could include
            technical, typographical, or photographic errors. ZyroByte does not
            warrant that any of the materials on its website are accurate,
            complete or current. ZyroByte may make changes to the materials
            contained on its website at any time without notice. However,
            ZyroByte does not make any commitment to update the materials.
          </p>

          <h2>11. LINKS</h2>
          <p>
            ZyroByte has not reviewed all of the sites linked to its website and
            is not responsible for the contents of any such linked site. The
            inclusion of any link does not imply endorsement of the site. Use of
            any such linked website is at the user's own risk.
          </p>

          <h2>12. MODIFICATIONS</h2>
          <p>
            ZyroByte may revise these terms of service for its website at any
            time without notice. By using this website you are agreeing to be
            bound by the then current version of these terms of service.
          </p>
          <p>
            ZyroByte may remove, revise or update the course content at any
            given time. Students enrolled in the ZyroByte website will be
            automatically updated on the revised version of the course, and will
            no longer have access to the previous outdated version.
          </p>

          <h2>13. GOVERNING LAW</h2>
          <p>
            These terms and conditions are governed by and construed in
            accordance with the laws of England and you irrevocably submit to
            the exclusive jurisdiction of the courts in England.
          </p>

          <h2>14. CONTACT INFORMATION</h2>
          <p>
            Questions about the Terms of Service should be sent to us at
            contact@zyrobyte.com.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsConditions;
