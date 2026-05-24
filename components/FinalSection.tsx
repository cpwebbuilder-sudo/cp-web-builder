export default function FinalSection() {
  return (

    <section id="contact" className="px-4 md:px-4 md:px-6 pb-12 pt-24">

      <div className="max-w-[1300px] mx-auto bg-black rounded-[36px] p-8 md:p-10 shadow-[0_30px_120px_rgba(0,0,0,0.25)] relative overflow-hidden">

        {/* GLOW */}

        <div className="absolute w-[400px] h-[400px] bg-green-500/10 blur-3xl rounded-full -bottom-20 -left-20"></div>

        <div className="absolute w-[400px] h-[400px] bg-orange-500/10 blur-3xl rounded-full top-0 right-0"></div>

        {/* TOP GRID */}

        <div className="relative z-10 grid md:grid-cols-2 gap-6 md:gap-12">

          {/* LEFT */}

          <div className="bg-[#0d0d0d] border border-white/10 rounded-[28px] p-10">

            <p className="text-green-400 mb-5">
              Get in touch
            </p>

            <h2 className="text-4xl md:text-[64px] font-semibold tracking-tight leading-[1] text-white mb-10">

              Ready for your
              project?

            </h2>

            <p className="text-zinc-400 text-lg leading-8 max-w-lg mb-10">

              Let’s build a modern website
              that helps your business stand
              out and grow online.

            </p>

            <a
  href="https://forms.gle/cEAe4n3vxUP45UYaA"
  target="_blank"
  rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/10 text-white px-8 py-4 rounded-full transition duration-300"
            >

              Start Project

            </a>

          </div>

          {/* RIGHT */}

          <div className="bg-[#0d0d0d] border border-white/10 rounded-[32px] p-10 flex flex-col justify-center items-center text-center">

            <h3 className="text-4xl font-semibold text-white mb-4">
              CP Web Builder
            </h3>

            <p className="text-zinc-500 text-lg mb-10">
              Web Design & Development
            </p>

            <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 md:px-4 md:px-6 py-3 rounded-full">

              ● Available for new projects

            </div>

          </div>

        </div>

        {/* LOCATION */}

        <div className="relative z-10 mt-6 bg-[#0d0d0d] border border-white/10 rounded-[28px] p-8">

          <p className="text-green-400 mb-3">
            Our Location
          </p>

          <h3 className="text-white text-2xl font-semibold">
            Sivakasi, Tamil Nadu
          </h3>

        </div>

        {/* FOOTER */}

        <div className="relative z-10 mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">

          {/* LEFT */}

          <div className="flex items-center gap-5 text-zinc-500 text-sm">

            <p>CP Web Builder</p>

            <span>•</span>

            <p>2026</p>

          </div>

          {/* RIGHT */}

          <div className="flex gap-6 text-zinc-500">

            <a
              href="#growth"
              className="hover:text-white transition duration-300"
            >
              Growth
            </a>

            <a
              href="#projects"
              className="hover:text-white transition duration-300"
            >
              Portfolio
            </a>

            <a
              href="#pricing"
              className="hover:text-white transition duration-300"
            >
              Pricing
            </a>

            <a
              href="#contact"
              className="hover:text-white transition duration-300"
            >
              Contact
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}