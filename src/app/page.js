import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Link from 'next/link';

const page = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-center">

      <Navbar />
      {/* Main content wrapper that centers the content */}
      <div className="flex-grow flex flex-col items-center justify-center">
        <span className="font-sans font-bold text-black text-9xl">PureText</span>

        <section className="pt-12 max-w-2xl">
          <p className="text-gray-600 font-sans text-lg md:text-xl px-4">
          The editor that keeps things real—authentic and plagiarism-free.
          Created by the team at Dream and Try Co. (DATCO), it’s free forever. Give it a go and keep your words truly pure!
          </p>
        </section>

        <section className="pt-12 flex space-x-4 font-sans">
          <button className="rounded-full bg-violet-500 hover:bg-violet-700 text-white font-bold py-3 px-6">
            <Link href={'/homepage'}>Pure my text</Link>
          </button>
          <button className="rounded-full border border-black text-black font-bold py-3 px-6 hover:bg-gray-200">
            <Link href = {'/signup'}>Sign Up</Link>
          </button>
        </section>
      </div>

      <Footer />

    </div>
  );
};

export default page;
