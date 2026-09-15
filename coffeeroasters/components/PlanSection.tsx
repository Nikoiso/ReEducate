"use client";

import { useState } from "react";

const questions = [
  {
    title: "How do you drink your coffee?",
    options: ["Capsules", "Filter", "Espresso"],
  },
  {
    title: "What type of coffee?",
    options: ["Single Origin", "Decaf", "Blended"],
  },
  {
    title: "How much would you like?",
    options: ["250g", "500g", "1000g"],
  },
  {
    title: "How often should we deliver?",
    options: ["Every week", "Every 2 weeks", "Every month"],
  },
];

export default function PlanSection() {
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const selectOption = (questionIndex: number, option: string) => {
    setAnswers((current) => ({
      ...current,
      [questionIndex]: option,
    }));
  };

  return (
    <section className="mx-auto max-w-[1280px] px-6 py-16 md:px-10 lg:px-20">
      <div className="rounded-[10px] bg-[#2C343E] px-6 py-12 md:px-12 lg:px-20">
        {questions.map((question, questionIndex) => (
          <div key={question.title} className="mb-12 last:mb-0">
            <h2 className="text-[24px] font-black text-white md:text-[32px]">
              {question.title}
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {question.options.map((option) => {
                const selected = answers[questionIndex] === option;

                return (
                  <button
                    key={option}
                    onClick={() =>
                      selectOption(questionIndex, option)
                    }
                    className={`rounded-[8px] p-8 text-left transition ${
                      selected
                        ? "bg-[#0E8784] text-white"
                        : "bg-[#F4F1EB] text-[#333D4B] hover:bg-[#FDD6BA]"
                    }`}
                  >
                    <h3 className="text-[20px] font-black">
                      {option}
                    </h3>

                    <p className="mt-3 text-[14px] leading-[22px] opacity-80">
                      Perfectly selected for your coffee preference.
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-[10px] bg-[#2C343E] p-8">
        <p className="text-[12px] font-bold uppercase tracking-[1px] text-[#83888F]">
          Your plan
        </p>

        <p className="mt-4 text-[24px] font-black leading-[32px] text-white">
          {Object.keys(answers).length === questions.length
            ? "Your personalized coffee plan is ready!"
            : "Fill in your preferences to build your plan."}
        </p>
      </div>
    </section>
  );
}
