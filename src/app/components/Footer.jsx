import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full mt-auto flex gap-6 flex-wrap items-center justify-center font-sans py-10">
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:text-[#272727]"
        href={'/about-datco'}
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="https://nextjs.org/icons/file.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        About DATCO
      </Link>
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:text-[#272727]"
        href={'/contactus'}
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="https://nextjs.org/icons/window.svg"
          alt="Window icon"
          width={16}
          height={16}
        />
        Contact Us
      </Link>
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:text-[#272727]"
        href={'/cookies-policy'}
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="https://nextjs.org/icons/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
        Cookies Policy
      </Link>
    </footer>
  );
};

export default Footer;
