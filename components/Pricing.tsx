export default function Pricing() {
  return (

    <section id="pricing" className="py-16 md:py-32 px-4 md:px-6">

      <div className="max-w-6xl mx-auto bg-white border border-black/5 rounded-[40px] p-6 md:p-10 md:p-12 shadow-[0_20px_80px_rgba(0,0,0,0.06)]">

        {/* TOP */}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:p-10 mb-10">

          <div>

            <h2 className="text-6xl md:text-7xl font-semibold tracking-tight mb-3">
              Pricing
            </h2>

            <p className="text-zinc-500">
              Transparent pricing • Premium quality experience
            </p>

          </div>

          <p className="text-zinc-500 text-lg max-w-md leading-8">

            Flexible pricing plans designed
            for startups, local businesses
            and growing brands.

          </p>

        </div>

        {/* LINE */}

        <div className="border-t border-black/5 mb-10"></div>

        {/* CARDS */}

        <div className="grid lg:grid-cols-3 gap-6 md:p-10">

          {/* STARTER */}

          <div className="bg-[#eef7f1] border border-green-100 rounded-[32px] p-6 md:p-10 hover:-translate-y-1 transition-all duration-500">

            <h3 className="text-4xl font-semibold tracking-tight mb-4">
              Starter
            </h3>

            <p className="text-zinc-600 leading-8 mb-8">

              Perfect for local shops and
              small businesses looking
              for a clean online presence.

            </p>

            <h2 className="text-4xl font-semibold tracking-tight mb-10">
              ₹2,999
            </h2>

            <ul className="space-y-5 text-zinc-700 mb-10">

              <li>• 1 Page Website</li>
              <li>• Responsive Design</li>
              <li>• WhatsApp Integration</li>
              <li>• Contact Section</li>

            </ul>

            <a
  href="https://forms.gle/cEAe4n3vxUP45UYaA"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full bg-[#0f9f66] text-white py-4 rounded-full font-medium hover:opacity-90 transition duration-300 flex items-center justify-center"
>

  Get Started

</a>

          </div>

          {/* BUSINESS */}

          <div className="bg-[#eef4ff] border border-blue-100 rounded-[32px] p-6 md:p-10 hover:-translate-y-1 transition-all duration-500 relative">

            <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-4 py-2 rounded-full">
              Popular
            </div>

            <h3 className="text-4xl font-semibold tracking-tight mb-4">
              Business
            </h3>

            <p className="text-zinc-600 leading-8 mb-8">

              Designed for brands that
              want a premium and modern
              digital experience.

            </p>

            <h2 className="text-4xl font-semibold tracking-tight mb-10">
              ₹4,999
            </h2>

            <ul className="space-y-5 text-zinc-700 mb-10">

              <li>• Multi Page Website</li>
              <li>• Premium UI Design</li>
              <li>• Mobile Optimized</li>
              <li>• Modern Sections</li>

            </ul>

            <a
  href="https://forms.gle/cEAe4n3vxUP45UYaA"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full bg-[#2563eb] text-white py-3.5 rounded-full font-medium hover:opacity-90 transition duration-300 flex items-center justify-center"
>

  Choose Plan

</a>

          </div>
{/* PREMIUM */}

<div className="bg-[#fff1f5] border border-pink-100 rounded-[32px] p-6 md:p-10 hover:-translate-y-1 transition-all duration-500">

  <h3 className="text-4xl font-semibold tracking-tight mb-4">
    Premium
  </h3>

  <p className="text-zinc-600 leading-8 mb-8">

    Crafted for businesses that
    want a high-end and fully
    customized web experience.

  </p>

 <h2 className="text-4xl font-semibold tracking-tight mb-10">
              ₹10,000
            </h2>

  <ul className="space-y-5 text-zinc-700 mb-10">

    <li>• Custom UI/UX Design</li>
    <li>• Advanced Sections</li>
    <li>• SEO Optimization</li>
    <li>• Priority Support</li>

  </ul>

  <a
  href="https://forms.gle/cEAe4n3vxUP45UYaA"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full bg-[#ec4899] text-white py-3.5 rounded-full font-medium hover:opacity-90 transition duration-300 flex items-center justify-center"
>

  Contact Me

</a>

</div>
        </div>

      </div>

    </section>
  );
}