export default function Growth() {
  return (

    <section id="growth" className="py-16 md:py-32 px-4 md:px-6">

      <div className="max-w-6xl mx-auto bg-white border border-black/5 rounded-[40px] p-8 md:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.05)]">

        {/* TOP */}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-10">

          <div>

            <h2 className="text-[38px] md:text-7xl font-semibold tracking-tight mb-3">
              Built For Growth
            </h2>

            <p className="text-zinc-500">
              Modern websites crafted for performance.
            </p>

          </div>

          <p className="text-zinc-500 text-lg leading-8 max-w-md">

            Every website is designed to help
            businesses build trust, improve
            visibility and create better user experiences.

          </p>

        </div>

        {/* LINE */}

        <div className="border-t border-black/5 mb-10"></div>

        {/* MAIN GRID */}

        <div className="grid lg:grid-cols-2 gap-8 mb-8">

          {/* LEFT VISUAL */}

<div className="relative bg-[#fafafa] border border-black/5 rounded-[32px] overflow-hidden min-h-[320px]">

  {/* TOP BAR */}

  <div className="flex gap-2 px-4 md:px-6 py-5 border-b border-black/5">

    <div className="w-3 h-3 rounded-full bg-red-400"></div>
    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
    <div className="w-3 h-3 rounded-full bg-green-400"></div>

  </div>

  {/* WEBSITE PREVIEW */}

  <div className="relative h-[260px] overflow-hidden">

    <img
      src="/images/bakery.jpg"
      alt="Website Preview"
      className="w-full h-full object-cover object-top"
    />

    {/* OVERLAY */}

    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>

  </div>

  {/* FLOATING BADGE */}

  <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-md border border-black/5 px-5 py-3 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex items-center gap-3">

    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>

    <p className="text-sm font-medium text-zinc-700">
      Real Business Website
    </p>

  </div>

</div>

          {/* RIGHT CONTENT */}

          <div className="bg-[#fafafa] border border-black/5 rounded-[32px] p-8 flex flex-col justify-center">

            <h3 className="text-4xl font-semibold tracking-tight mb-8">

              Websites built for
              real business results.

            </h3>

            <div className="grid grid-cols-2 gap-8">

              <div>

                <h4 className="font-semibold text-lg mb-2">
                  SEO Ready
                </h4>

                <p className="text-zinc-500 leading-7">
                  Optimized for better
                  visibility on Google.
                </p>

              </div>

              <div>

                <h4 className="font-semibold text-lg mb-2">
                  Fast Performance
                </h4>

                <p className="text-zinc-500 leading-7">
                  Smooth experience
                  across all devices.
                </p>

              </div>

              <div>

                <h4 className="font-semibold text-lg mb-2">
                  Responsive Design
                </h4>

                <p className="text-zinc-500 leading-7">
                  Perfectly optimized
                  for mobile screens.
                </p>

              </div>

              <div>

                <h4 className="font-semibold text-lg mb-2">
                  Easy To Manage
                </h4>

                <p className="text-zinc-500 leading-7">
                  Clean layouts that
                  are easy to update.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM CARDS */}

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-[#fafafa] border border-black/5 rounded-[28px] p-8 text-center">

            <div className="text-4xl mb-5">
              ⚡
            </div>

            <h3 className="font-semibold mb-2">
              Fast Loading
            </h3>

            <p className="text-zinc-500 text-sm leading-6">
              Optimized for speed
              and performance.
            </p>

          </div>

          <div className="bg-[#fafafa] border border-black/5 rounded-[28px] p-8 text-center">

            <div className="text-4xl mb-5">
              📱
            </div>

            <h3 className="font-semibold mb-2">
              Mobile First
            </h3>

            <p className="text-zinc-500 text-sm leading-6">
              Designed perfectly
              for all devices.
            </p>

          </div>

          <div className="bg-[#fafafa] border border-black/5 rounded-[28px] p-8 text-center">

            <div className="text-4xl mb-5">
              🎨
            </div>

            <h3 className="font-semibold mb-2">
              Modern UI
            </h3>

            <p className="text-zinc-500 text-sm leading-6">
              Clean and elegant
              visual experience.
            </p>

          </div>

          <div className="bg-[#fafafa] border border-black/5 rounded-[28px] p-8 text-center">

            <div className="text-4xl mb-5">
              🔒
            </div>

            <h3 className="font-semibold mb-2">
              Secure Setup
            </h3>

            <p className="text-zinc-500 text-sm leading-6">
              Safe and reliable
              website structure.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}