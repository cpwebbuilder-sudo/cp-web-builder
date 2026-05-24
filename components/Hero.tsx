"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (

    <section
      id="home"
      className="relative min-h-screen flex items-start px-5 md:px-7 pt-24 md:pt-32 overflow-hidden"
    >

      {/* Glow */}

      <div className="absolute w-96 h-96 bg-orange-500/20 blur-3xl rounded-full top-20 left-10"></div>

      <div className="max-w-[1250px] mx-auto grid grid-cols-2 gap-24 items-center">

        {/* LEFT SIDE */}

        <div className="max-w-[520px] text-center lg:text-left mx-auto lg:mx-0">

        

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
  duration: 0.8,
  ease: "easeOut",
}}
            className="text-[32px] md:text-[52px] lg:text-[74px] font-semibold tracking-tight leading-[1] mb-8"
          >
            

           <>
  Hello, I’m

  <br />

  <span className="bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
    {" "}Priyadarshini C.
  </span>

  <br />

  <span className="text-black">
    Web Designer &
  </span>

  <br />

  <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
    Frontend Developer
  </span>
</>

          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-zinc-600 text-sm sm:text-base md:text-lg leading-9 mb-10 max-w-2xl"
          >

            I create fast, modern and mobile-friendly
            websites that help local businesses build
            a strong online presence.

          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
           transition={{
  duration: 0.8,
  delay: 0.4,
}}
            className="flex gap-4"
          >

          <a
  href="#projects"
  className="bg-black text-white hover:opacity-90 transition duration-300 px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-full font-medium"
>

  View Projects

</a>

           <a
  href="#contact"
  className="border border-black/10 bg-white hover:bg-zinc-100 transition duration-300 px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-full font-medium"
>

  Contact Me

</a>

          </motion.div>

        </div>

        {/* RIGHT SIDE */}

       <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{
    opacity: 1,
    y: [0, -10, 0],
  }}
  transition={{
    opacity: { duration: 1 },
    y: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }}
  className="relative flex justify-center"
>
            <div className="absolute bottom-0 right-[-20px] h-[560px] object-contain z-20"></div>
            
         <div className="bg-gradient-to-br from-[#fff7fb] to-[#f3f0ff] border border-black/5 rounded-[36px] p-5">

  <div className="flex gap-2 mb-4 px-2">

    <div className="w-3 h-3 rounded-full bg-red-500"></div>

    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>

    <div className="w-3 h-3 rounded-full bg-green-500"></div>

  </div>

  <div className="bg-[#e9e9e9] rounded-2xl overflow-hidden">

              <img
                src="/images/me.png"
                alt="Preview"
                className="w-full h-[380px] sm:h-[620px] object-cover object-top"
              />

            </div>

          </div>
<div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md border border-black/5 px-5 py-3 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex items-center gap-3">

  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>

  <p className="text-sm font-medium text-zinc-700">
    Built Modern UI Design
  </p>

</div>
        </motion.div>

      </div>

    </section>
  );
}