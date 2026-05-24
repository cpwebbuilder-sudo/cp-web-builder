import Image from "next/image";

export default function Projects() {
  return (

    <section id="projects" className="pt-6 md:pt-16 pb-16 md:pb-32 px-4 md:px-6">

      <div className="max-w-6xl mx-auto bg-white border border-black/5 rounded-[40px] p-8 md:p-12 shadow-[0_20px_80px_rgba(0,0,0,0.06)]">

        {/* TOP */}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-10">

          <h2 className="text-[38px] md:text-7xl font-semibold tracking-tight">
            Portfolio
            
          </h2>
          
            
          <p className="text-zinc-500 text-lg max-w-md leading-8">

            A modern website crafted for printing businesses with catalog showcase, inquiry system and responsive design.

          </p>
          

        </div>

        {/* LINE */}

        <div className="border-t border-black/5 mb-10"></div>

        {/* PROJECT GRID */}

        <div className="grid md:grid-cols-2 gap-8">

          {/* CARD 1 */}

          <div className="group bg-[#fafafa] border border-black/5 rounded-[28px] overflow-hidden hover:-translate-y-1 transition-all duration-500">

            <div className="relative h-[340px] overflow-hidden">

              <Image
                src="/images/printing.jpg"
                alt="Printing"
                fill
                className="object-cover group-hover:scale-105 transition duration-700"
              />

            </div>

            <div className="p-6">

              <h3 className="text-2xl font-semibold tracking-tight mb-3">
                Printify Studio
              </h3>

              <p className="text-zinc-500 leading-7">

                Modern website for a printing
                company with clean branding
                and responsive layout.

              </p>

            </div>

          </div>

          {/* CARD 2 */}

          <div className="group bg-[#fafafa] border border-black/5 rounded-[28px] overflow-hidden hover:-translate-y-1 transition-all duration-500">

            <div className="relative h-[340px] overflow-hidden">

              <Image
                src="/images/bakery.jpg"
                alt="Bakery"
                fill
                className="object-cover group-hover:scale-105 transition duration-700"
              />

            </div>

            <div className="p-6">

              <h3 className="text-2xl font-semibold tracking-tight mb-3">
                Butter Bakery
              </h3>

              <p className="text-zinc-500 leading-7">

                Elegant bakery website focused
                on product showcase and
                premium visual experience.

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}