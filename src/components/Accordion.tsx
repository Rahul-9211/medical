"use client";

import { useState } from "react";

interface AccordionProps {
  question: string;
  answer: string;
}

const Accordion: React.FC<AccordionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-5 text-left text-gray-900 font-medium hover:bg-gray-50 transition"
      >
        <span>{question}</span>
        <span className="text-xl">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className="px-5 pb-5 text-gray-700 border-t bg-white">
          {answer}
        </div>
      )}
    </div>
  );
};

export default Accordion;
