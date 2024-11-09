import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <img src="/donate.gif" alt="Browser Icon" className="mx-auto mb-4 max-w-100" />
          <h2 className="text-black font-mono text-lg">
            We are soon adding a donation option for those who are generous enough to support us.
          </h2>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
