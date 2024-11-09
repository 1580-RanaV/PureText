import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const page = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-black flex flex-col">
      <Navbar />
      
      {/* Center the content in the screen using flex */}
      <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24 mt-10">
        <div className="bg-background rounded-lg p-8 max-w-4xl w-full">

          {/* Header Section */}
          <h1 className="text-4xl sm:text-5xl font-bold text-center text-black mb-12">
            Get in touch with us
          </h1>

          {/* Introduction */}
          <section className="mb-16 text-center">
            <p className="text-lg text-black leading-relaxed font-mono">
              We value your feedback and are here to assist you! Whether you have a question, need support, or simply want to share your thoughts, feel free to reach out to us at <strong className="font-sans">puretext@datco.com</strong>. Our dedicated team is committed to providing timely and helpful responses to ensure you have the best experience with PureText.
              For additional resources, you can connect with us on our social media channels. We are always eager to hear from you and look forward to assisting you in any way we can. Your satisfaction is our top priority and we thank you for using our product.
            </p>
          </section>

        </div>
      </div>
      
      {/* Footer fixed at the bottom */}
      <Footer className="fixed bottom-0 w-full" />
    </div>
  );
};

export default page;
