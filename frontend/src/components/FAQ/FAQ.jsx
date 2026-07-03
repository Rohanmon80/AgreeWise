import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Is AgreeWise free to use?",
    answer:
      "Yes. AgreeWise is free to use in its current version.",
  },
  {
    question: "Does AgreeWise store my agreements?",
    answer:
      "No. Your agreement is analyzed in real time and is not stored in a database.",
  },
  {
    question: "Can AI replace a lawyer?",
    answer:
      "No. AgreeWise helps you understand agreements, but it should not be considered legal advice.",
  },
  {
    question: "Which file formats are supported?",
    answer:
      "AgreeWise supports text input today. PDF, DOCX and URL analysis are coming next.",
  },
  {
    question: "Which AI model powers AgreeWise?",
    answer:
      "AgreeWise uses Google's Gemini AI to analyze agreements and generate easy-to-understand summaries.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-5xl md:text-6xl font-black"
        >
          Frequently Asked{" "}
          <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
            Questions
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-400 mt-6 text-xl"
        >
          Everything you need to know about AgreeWise.
        </motion.p>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="text-xl font-semibold">
                  {faq.question}
                </span>

                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-slate-400 leading-8">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;