import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        
        {/* logo on the main page across all screen devices */}
        <h1 className="font-sans font-bold text-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 
          tracking-tight leading-none">
          PureText
        </h1>

        {/* under logo description */}
        <section className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl mx-auto">
          <p className="text-gray-600 font-mono text-base sm:text-lg md:text-xl 
            leading-relaxed text-center">
            The editor that keeps things real—authentic and plagiarism-free.
            Created by the team at Dream and Try Co. (DATCO), it's free forever. 
            Give it a go and keep your words truly pure!
          </p>
        </section>

        {/* kept 2 buttons into 1 section to give easy flexing in different screen sizes */}
        <section className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row 
          space-y-4 sm:space-y-0 sm:space-x-4 font-sans items-center justify-center">
          
          {/* link tag to make it spa and 2 colors 1 static and 1 when hovered  */}
          <Link href="/homepage">
            <button className="w-[200px] no-invert rounded-full bg-violet-500 hover:bg-violet-700 
              text-white font-bold py-3 px-6 transition-colors duration-200
              text-sm sm:text-base">
              Pure my text
            </button>
          </Link>
          
          <Link href="/signup">
            <button className="w-[200px] rounded-full border border-black text-black 
              font-bold py-3 px-6 hover:bg-gray-200 transition-colors duration-200
              text-sm sm:text-base">
              Sign Up
            </button>
          </Link>
        </section>
      </main>

      {/* footer component */}
      <Footer />

    </div>
  );
};

export default Page;