"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface FAQItem {
  question: string;
  answer: string;
}

const FaqComponent = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData: FAQItem[] = [
    {
      question: "How do I get started with Rimigo?",
      answer:
        "Getting started is simple. Just click on 'Start your Trip' and fill out the basic questions. Our team then reaches out to you via call to understand your requirements. We then share a personalized trip board which covers your itinerary, hotels, activities, visa process if required, and food recommendations.",
    },
    {
      question: "How does Rimigo find the best price?",
      answer:
        "Rimigo has partnered with platforms like MakeMyTrip, TBO, Agoda, GetYourGuide, and more to fetch the right prices for you, so you don't overpay. Our platform searches all travel websites to get the best available prices, and at times we negotiate even better deals for you.",
    },
    {
      question: "How are bookings with Rimigo better than pre-planned packages?",
      answer:
        "We believe every traveler is unique and deserves to travel their own way. Rimigo makes this possible by matching you with experiences, hotels, and transportation options that fit your personal style and preferences. We handle all the details while keeping YOUR needs at the center of every choice.",
    },
    {
      question: "What happens if something goes wrong during my vacation?",
      answer:
        "We are that friend for YOU who you can reach out to for any problem during your vacation. Whether you missed your flights, got some extra time and needed immediate assistance to plan an activity, or had a last-minute change in plan - we're just a few clicks away to help with real-time travel issues.",
    },
    {
      question: "How is Rimigo different from traditional travel agents and OTAs?",
      answer:
        "Rimigo helps you personalize your vacation the way you want. We provide curated recommendations from travelers and destination experts, so you can truly enjoy your vacation, your way.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen px-8 py-4 md:pt-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-[#7011F6] sm:text-5xl lg:text-6xl leading-tight">
                Frequently <br /> asked questions
              </h1>
              <p className="text-gray-600 text-lg">
                Find answers to common questions about our services
              </p>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4 max-w-2xl mx-auto w-full">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                className="rounded-2xl bg-[#F5F5F5] overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between px-6 py-6 text-left group"
                >
                  <span className="text-base sm:text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>

                  <motion.span
                    className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full ${
                      openIndex === index
                        ? "bg-[#7011F6] text-white"
                        : "bg-gray-100 text-[#7011F6] group-hover:bg-purple-100"
                    }`}
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                  </motion.span>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="h-px bg-gray-200 mb-4" />
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqComponent;