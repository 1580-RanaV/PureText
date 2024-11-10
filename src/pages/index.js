import React from 'react';
import Footer from '../app/components/Footer';
import Navbar from '../app/components/Navbar';
import Link from 'next/link';
import localFont from "next/font/local";
import Head from 'next/head';

const geistSans = localFont({
  src: "../app/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../app/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const Page = () => {
  return (
    <>
      <Head>
        <title>PureText | Plag Free Text</title>
        <meta name="description" content="Created by Dream and Try Co. (DATCO)" />
      </Head>
      <div className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col bg-white`}>
        <Navbar />

        <main className="flex-grow mt-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <h1 className="font-sans font-bold text-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 
            tracking-tight leading-none text-center">
            PureText
          </h1>

          <section className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl mx-auto text-center">
            <p className="text-gray-600 font-mono text-base sm:text-lg md:text-xl leading-relaxed">
              The editor that keeps things real—authentic and plagiarism-free.
              Created by the team at Dream and Try Co. (DATCO), it's free forever. 
              Give it a go and keep your words truly pure!
            </p>
          </section>

          <section className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row 
            space-y-4 sm:space-y-0 sm:space-x-4 font-sans items-center justify-center">
            <Link href="/homepage">
              <button className="w-[200px] rounded-full bg-violet-500 hover:bg-violet-700 
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

        <Footer />
      </div>
    </>
  );
};

export default Page;
