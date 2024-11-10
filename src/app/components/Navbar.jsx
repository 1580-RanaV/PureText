import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 sm:py-4 md:py-5 px-3 sm:px-4">
        
        {/* the logo and text under 'datco' using block so that they go one below other */}
        <Link href={'/'} className="hover:opacity-50 transition-opacity">
          <span className="text-xl sm:text-2xl font-sans text-left">
            <span className="block font-bold">PureText</span>
            <span className="block text-[10px] sm:text-xs font-bold font-mono">by DATCO</span>
          </span>
        </Link>

        {/* 2 buttons faq and donate and support */}
        <ul className="flex items-center gap-2 sm:gap-4 md:gap-12 font-medium font-sans">
          <li>
            <Link
              href={'/faqs'}
              className="border-1 border-black rounded-3xl px-3 py-2 sm:px-4 sm:py-3 hover:bg-[#000000] hover:text-white hover:border-[#313131] transition-all duration-300 text-sm sm:text-base"
            >
              FAQs
            </Link>
          </li>
          <li>
              <button className="border-1 border-black rounded-3xl px-3 py-2 sm:px-4 sm:py-3 hover:bg-[#000000] hover:text-white hover:border-[#313131] transition-all duration-300 text-sm sm:text-base">
                <Link href={'/donate'}>
                  <span className="hidden sm:inline">Donate & Support</span>
                  <span className="sm:hidden">Donate</span>
                </Link>
              </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;