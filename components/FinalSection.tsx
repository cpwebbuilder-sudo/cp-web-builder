import "remixicon/fonts/remixicon.css";
export default function FinalSection() {
  return (
    <section
      id="contact"
      className="w-full pt-24"
    >
      <div
  className="max-w-6xl mx-auto relative overflow-hidden rounded-[40px] border border-white/10 p-6 md:p-10 shadow-[0_30px_120px_rgba(0,0,0,0.25)] bg-cover bg-center"
  style={{
    backgroundImage: "url('/images/tuition.jpg')",
  }}
>
  <div className="absolute inset-0 bg-black/75 backdrop-blur-sm"></div>

        {/* GLOW */}
        <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-green-500/10 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-orange-500/10 blur-3xl rounded-full"></div>

        {/* MAIN GRID */}
        <div className="relative z-10 grid lg:grid-cols-[1.4fr_0.8fr] gap-6">

          {/* LEFT BIG CARD */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 md:p-14 flex flex-col justify-between min-h-[500px]">

            <div>

              <p className="text-green-400 font-medium mb-5">
                Let’s Work Together
              </p>

              <h2 className="text-4xl md:text-6xl font-bold leading-[1] text-white mb-8">

                Build a website
                your customers
                will remember

              </h2>

              <p className="text-zinc-400 text-lg leading-8 max-w-xl mb-10">

                Modern UI design, responsive development
                and business-focused websites crafted
                for real growth.

              </p>

            </div>

            <div className="flex flex-wrap gap-4">

              <a
                href="https://forms.gle/cEAe4n3vxUP45UYaA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gradient-to-r from-green-400 to-emerald-500 text-black font-semibold px-8 py-4 rounded-full hover:opacity-90 transition duration-300 shadow-[0_10px_40px_rgba(34,197,94,0.35)]"
              >

                Start Your Project

              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center border border-white/10 text-white px-8 py-4 rounded-full hover:bg-white/5 transition duration-300"
              >

                View Portfolio

              </a>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-6">

            {/* TOP CARD */}
            <div className="bg-gradient-to-br from-[#111] to-[#1a1a1a] border border-white/10 rounded-[40px] p-10 flex flex-col items-center justify-center text-center min-h-[240px]">

              <div className="w-16 h-16 rounded-3xl bg-white text-black flex items-center justify-center text-2xl font-bold mb-6 shadow-xl">

                CP

              </div>

              <h3 className="text-3xl font-semibold text-white mb-3">
                CP Web Builder
              </h3>

              <p className="text-zinc-500 mb-8">
                Web Design & Development
              </p>

              <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/20 px-5 py-3 rounded-full">

                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></div>

                <p className="text-green-400 text-sm font-medium">
                  Available for Projects
                </p>

              </div>

            </div>

           {/* CONTACT CARD */}
<div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[40px] p-8">

  <p className="text-green-400 mb-6 font-medium">
    Connect With Me
  </p>

  <div className="space-y-6">

    {/* PHONE */}
    <div>

      <p className="text-zinc-400 text-sm mb-2">
        Phone Number
      </p>

      <a
        href="tel:+917904505254"
        className="text-white text-2xl font-semibold hover:text-green-400 transition"
      >
        +91 7904505254
      </a>

    </div>

    {/* SOCIAL ICONS */}
    <div>

      <p className="text-zinc-400 text-sm mb-4">
        Social Links
      </p>

      <div className="flex items-center gap-4">

        {/* INSTAGRAM */}
        <a
          href="https://instagram.com/cp_web.builder"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-pink-500 hover:border-pink-500 transition duration-300"
        >

          <i className="ri-instagram-line text-2xl"></i>

        </a>

        {/* YOUTUBE */}
        <a
          href="https://youtube.com/@yourchannel"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-red-500 hover:border-red-500 transition duration-300"
        >

          <i className="ri-youtube-line text-2xl"></i>

        </a>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/917904505254"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-green-500 hover:border-green-500 transition duration-300"
        >

          <i className="ri-whatsapp-line text-2xl"></i>

        </a>

      </div>

    </div>

  </div>

</div>

          </div>

        </div>

        {/* FOOTER */}
        <div className="relative z-10 mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">

          {/* LEFT */}
          <div className="flex items-center gap-4 text-zinc-500 text-sm">

            <p>CP Web Builder</p>

            <span>•</span>

            <p>2026</p>

          </div>

          {/* RIGHT */}
          <div className="flex gap-6 text-zinc-400 text-sm font-medium">

             <a
              href="#home"
              className="hover:text-white transition"
            >
              Home
            </a>
            <a
              href="#projects"
              className="hover:text-white transition"
            >
              Portfolio
            </a>

            <a
              href="#pricing"
              className="hover:text-white transition"
            >
              Pricing
            </a>

            <a
              href="#contact"
              className="hover:text-white transition"
            >
              Contact
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}