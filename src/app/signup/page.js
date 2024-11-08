import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <img src="/animate2.gif" alt="Browser Icon" className="mx-auto mb-4 max-w-100" />
          <h2 className="text-black font-sans text-lg">
            Signing up to PureText is currently on pause. We are actively looking into this issue.<br />
            You can still use the app for free or make a donation if you're feeling rich.
          </h2>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
