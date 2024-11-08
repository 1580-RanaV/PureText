import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-4">
        {/* Logo */}
        <Link href={'/'} className="hover:opacity-50 transition-opacity">
          <span className="text-2xl font-sans text-left">
            <span className="block font-bold">PureText</span>
            <span className="block text-xs font-bold font-mono">by DATCO</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-4 sm:gap-8 md:gap-12 font-medium font-sans">
          <li>
            <Link
              href={'/faqs'}
              className="border-1 border-black rounded-3xl px-4 py-3 hover:bg-[#000000] hover:text-white hover:border-[#313131] transition-all duration-300"
            >
              FAQs
            </Link>
          </li>
          <li>
              <button className="border-1 border-black rounded-3xl px-4 py-3 hover:bg-[#000000] hover:text-white hover:border-[#313131] transition-all duration-300">
                <Link href={'/donate'}>Donate & Support</Link>
              </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;