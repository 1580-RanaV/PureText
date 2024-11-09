import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CookiesPolicy = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-black">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="bg-white rounded-lg p-8">
          {/* Header Section */}
          <h1 className="text-4xl sm:text-5xl font-bold text-center text-black mb-14">
            Cookies Policy for PureText by Dream and Try Co.
          </h1>
          
          {/* Metadata Section */}
          <div className="space-y-4 mb-12 text-black">
            <p className="text-lg">
              <span className="font-semibold">Effective Date:</span> 23rd October, 2024
            </p>
            <p className="text-lg">
              <span className="font-semibold">Parent Company:</span> DATCO (Dream and Try Company Pvt. Ltd.)
            </p>
            <p className="text-lg">
              <span className="font-semibold">Website:</span>{' '}
              <a href="https://puretextin" className="text-blue-600 hover:text-blue-800 transition-colors">
                PureText by DATCO
              </a>
            </p>
          </div>

          {/* Introduction */}
          <p className="text-lg text-black mb-12 leading-relaxed font-mono">
            At PureText by DATCO, we are committed to protecting your privacy while providing a seamless user experience. This Cookies Policy outlines our practices regarding the use of cookies on our website. We want to be completely transparent:{' '}
            <span className="font-semibold">we only use essential cookies for authentication and quick login access</span>
            , and we never share or sell this data to third parties.
          </p>

          {/* Main Content Sections */}
          <div className="space-y-12">
            {/* What Are Cookies Section */}
            <section>
              <h2 className="text-3xl font-bold text-black mb-4">1. What Are Cookies?</h2>
              <p className="text-lg text-black leading-relaxed font-mono">
                Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit websites. At PureText by DATCO, we use cookies solely for essential functions like keeping you logged in and ensuring a smooth user experience.
              </p>
            </section>

            {/* Our Commitment Section */}
            <section>
              <h2 className="text-3xl font-bold text-black mb-4">2. Our Cookie Usage and Commitment</h2>
              <p className="text-lg text-black leading-relaxed mb-4 font-mono">
                We value your privacy and only use cookies where absolutely necessary. Here's how we use cookies:
              </p>
              <ul className="list-disc list-inside text-lg text-black space-y-2 pl-4 font-mono">
                <li><span className="font-mono">Authentication Cookies:</span> Used solely to keep you logged in and provide quick access to your account.</li>
                <li><span className="font-mono">No Tracking:</span> We do not use cookies to track your behavior or actions on our site.</li>
                <li><span className="font-mono">No Third-Party Sharing:</span> We never sell or share your cookie data with any third parties.</li>
              </ul>
            </section>

            {/* Types of Cookies Section */}
            <section>
              <h2 className="text-3xl font-bold text-black mb-4">3. Types of Cookies We Use</h2>
              <p className="text-lg text-black leading-relaxed mb-4 font-mono">
                We only use the following essential cookies:
              </p>
              <ul className="list-disc list-inside text-lg text-black space-y-2 pl-4 font-mono">
                <li><span className="font-semibold">Session Cookies:</span> Temporary cookies that expire when you close your browser.</li>
                <li><span className="font-semibold">Authentication Cookies:</span> Remember your login status and preferences.</li>
                <li><span className="font-semibold">Security Cookies:</span> Help protect your account and data.</li>
              </ul>
            </section>

            {/* Data Handling Section */}
            <section>
              <h2 className="text-3xl font-bold text-black mb-4">4. How We Handle Cookie Data</h2>
              <p className="text-lg text-black leading-relaxed font-mono">
                All cookie data is encrypted and stored securely. We only retain cookie data for as long as necessary to provide you with a smooth login experience. Our cookie data is never sold, shared, or used for any purpose other than authentication and session management.
              </p>
            </section>

            {/* Managing Cookies Section */}
            <section>
              <h2 className="text-3xl font-bold text-black mb-4">5. Managing Cookies</h2>
              <p className="text-lg text-black leading-relaxed mb-4 font-mono">
                While our cookies are essential for the website's basic functionality, you can control cookie settings in your browser. Please note that disabling cookies may affect your ability to log in and use certain features of PureText.
              </p>
              <ul className="list-disc list-inside text-lg text-black space-y-2 pl-4 font-mono">
                <li><span className="font-semibold">View stored cookies in your browser settings</span></li>
                <li><span className="font-semibold">Delete cookies if desired</span></li>
                <li><span className="font-semibold">Set your browser to reject cookies (may limit functionality)</span></li>
              </ul>
            </section>

            {/* Policy Updates Section */}
            <section>
              <h2 className="text-3xl font-bold text-black mb-4">6. Changes to This Cookies Policy</h2>
              <p className="text-lg text-black leading-relaxed font-mono">
                We may update this policy to reflect changes in our practices or for operational, legal, or regulatory reasons. Our commitment to using cookies only for essential purposes and never sharing them with third parties will remain unchanged. Any updates will be posted here with the latest revision date.
              </p>
            </section>

            {/* Contact Section */}
            <section className="bg-white rounded-lg">
              <h2 className="text-3xl font-bold text-black mb-4">7. Contact Information</h2>
              <p className="text-lg text-black leading-relaxed mb-4 font-mono">
                If you have any questions about our cookie usage or privacy practices, please contact us:
              </p>
              <div className="space-y-2 text-lg text-black">
                <p>
                  <span className="font-semibold">Email:</span>{' '}
                  <a href="mailto:privacy@datco.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                    privacy@datco.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Address:</span> DATCO, Steel City, Visakhapatnam, India.
                </p>
              </div>
            </section>
          </div>

          {/* Footer Note */}
          <p className="text-lg text-black mt-12 text-center italic">
            We appreciate your trust in PureText by DATCO and are committed to using cookies responsibly, solely for enhancing your login experience.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CookiesPolicy;