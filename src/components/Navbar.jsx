"use client";

import React, { useState } from 'react';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import { Heart } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-[1000] border-b border-[#f1dfd2] bg-[#fffaf5]/90 px-5 py-3 backdrop-blur-lg lg:px-8 xl:px-[8%]">
        <div className="mx-auto flex max-w-7xl items-center">
          <a href="/" className="flex items-center gap-3 text-[#14205a]">
            <Image
              src={assets.icon_paw}
              alt="Love At First Paw"
              width={38}
              height={38}
              priority
              className="h-9 w-9 object-contain"
            />
            <span className="hidden text-base font-bold tracking-tight sm:inline">Love At First Paw</span>
          </a>

          <ul className="ml-10 hidden items-center gap-7 text-sm font-semibold text-[#26325f] md:flex lg:gap-9">
            <li><a href="/" className="transition hover:text-[#ed6a38]">Home</a></li>
            <li><a href="/shelters" className="transition hover:text-[#ed6a38]">Shelters</a></li>
            <li><a href="/quiz" className="transition hover:text-[#ed6a38]">Match quiz</a></li>
            <li><a href="/pets_all" className="transition hover:text-[#ed6a38]">Pets</a></li>
          </ul>

          <div className="ml-auto flex items-center gap-3">
            <a href="/contact" className="hidden items-center gap-2 rounded-full bg-[#ed6a38] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#d95727] md:flex">
              <Heart className="h-4 w-4" /> Contact
            </a>
            <button onClick={() => setIsMenuOpen(true)} className="rounded-xl p-2 text-[#17245b] transition hover:bg-[#fff0e8] md:hidden" aria-label="Open navigation menu">
              <Image src={assets.menu} alt="" width={24} height={24} />
            </button>
          </div>
        </div>
      </nav>

      <div className={`fixed right-0 top-0 z-[1100] h-full w-72 bg-[#fffaf5] p-7 shadow-2xl transition-transform duration-300 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between">
          <span className="font-bold text-[#17245b]">Love At First Paw</span>
          <button onClick={() => setIsMenuOpen(false)} className="rounded-xl p-2 hover:bg-[#fff0e8]" aria-label="Close navigation menu"><Image src={assets.close} alt="" width={20} height={20} /></button>
        </div>
        <ul className="mt-10 flex flex-col gap-5 text-lg font-semibold text-[#17245b]">
          <li><a onClick={() => setIsMenuOpen(false)} href="/">Home</a></li>
          <li><a onClick={() => setIsMenuOpen(false)} href="/shelters">Shelters</a></li>
          <li><a onClick={() => setIsMenuOpen(false)} href="/quiz">Match quiz</a></li>
          <li><a onClick={() => setIsMenuOpen(false)} href="/pets_all">Pets</a></li>
          <li><a onClick={() => setIsMenuOpen(false)} href="/contact">Contact</a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
