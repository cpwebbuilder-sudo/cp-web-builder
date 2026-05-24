"use client";

import { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most websites are completed within 5–10 days depending on the project requirements.",
  },

  {
    question: "Will the website work on mobile devices?",
    answer:
      "Yes. Every website is fully responsive and optimized for all screen sizes.",
  },

  {
    question: "Do you provide hosting support?",
    answer:
      "Yes. Complete support is provided for hosting, domain setup and deployment.",
  },

  {
    question: "Can I update the website later?",
    answer:
      "Absolutely. Websites are designed with scalability and future updates in mind.",
  },

  {
    question: "Do you offer custom website designs?",
    answer:
      "Yes. Every project is crafted uniquely based on business goals and branding.",
  },
];

export default function FAQ() {

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (

    <section id="faq" className="py-16 md:py-32 px-4 md:px-6">

      <div className="max-w-6xl mx-auto bg-white border border-black/5 rounded-[40px] p-8 md:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.05)]">

        {/* TOP */}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-10">

          <div>

            <h2 className="text-[38px] md:text-7xl font-semibold tracking-tight mb-3">
              FAQ
            </h2>

            <p className="text-zinc-500">
              Straight answers for your questions.
            </p>

          </div>

          <p className="text-zinc-500 text-lg leading-8 max-w-md">

            Everything you need to know
            before starting your website project.

          </p>

        </div>

        {/* LINE */}

        <div className="border-t border-black/5 mb-10"></div>

        {/* FAQ BOX */}

        <div className="bg-[#fafafa] border border-black/5 rounded-[32px] p-6 md:p-8 mb-8">

          <h3 className="text-3xl font-semibold mb-8">
            Good to know
          </h3>

          <div className="space-y-4">

            {faqs.map((faq, index) => (

              <div
                key={index}
                className="bg-white border border-black/5 rounded-[20px] overflow-hidden"
              >

                {/* QUESTION */}

                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex justify-between items-center text-left px-4 md:px-6 py-5"
                >

                  <h3 className="font-medium text-lg">
                    {faq.question}
                  </h3>

                  <div className="text-zinc-400 text-xl">

                    {openIndex === index ? <HiMinus /> : <HiPlus />}

                  </div>

                </button>

                {/* ANSWER */}

                {openIndex === index && (

                  <div className="px-4 md:px-6 pb-6">

                    <p className="text-zinc-500 leading-8">

                      {faq.answer}

                    </p>

                  </div>

                )}

              </div>

            ))}

          </div>

        </div>

        {/* BOTTOM CARDS */}

        <div className="grid md:grid-cols-2 gap-6">

          {/* LEFT */}

          

          {/* RIGHT */}

          

        </div>

      </div>

    </section>
  );
}