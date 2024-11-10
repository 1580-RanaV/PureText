import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl mx-auto text-center">
          {/* Image container with responsive sizing */}
          <div className="mb-6 sm:mb-8">
            <img 
              src="/animate2.gif" 
              alt="Browser Icon" 
              className="mx-auto w-24 sm:w-32 md:w-40 h-auto"
              style={{ objectFit: 'contain' }}
            />
          </div>

          {/* Text container with responsive typography and spacing */}
          <div className="space-y-4">
            <p className="text-black font-mono text-base sm:text-lg md:text-xl 
              leading-relaxed mx-auto max-w-prose">
              Signing up to PureText is currently on pause. 
              We are actively looking into this issue.
              You can still use the app for free or make a donation 
              if you're feeling rich.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Page;