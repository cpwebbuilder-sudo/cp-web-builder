"use client";

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav className="top-0 z-50 px-6 md:px-12 pt-6">

  <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-xl border border-black/5 rounded-full px-8 py-4 flex justify-between items-center shadow-[0_10px_40px_rgba(0,0,0,0.04)]">

    {/* LOGO */}

<h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
  <span className="text-black">CP</span> Web Builder
</h1>

    {/* LINKS */}

    <div className="hidden md:flex items-center gap-10">

      <a
        href="#home"
        className="text-zinc-500 hover:text-black transition duration-300"
      >
        Home
      </a>

      <a
        href="#projects"
        className="text-zinc-500 hover:text-black transition duration-300"
      >
        Projects
      </a>

      <a
        href="#contact"
        className="text-zinc-500 hover:text-black transition duration-300"
      >
        Contact
      </a>

    </div>

    {/* BUTTON */}

    <a
  href="https://wa.me/917904505254?text=Hi%20I%20need%20a%20website"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-black text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition duration-300"
>
  Let's Talk
</a>

  </div>

</nav>
  );
}