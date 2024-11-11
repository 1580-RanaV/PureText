"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// arrow function, returns jsx to describe the ui
const Page = () => {
  
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "Is PureText completely free to use?",
      answer: "Yes, PureText is free for all users, offering high-quality content without any subscription or hidden fees. PureText Pro, however, includes premium features for an additional fee. (coming soon)"
    },
    {
      question: "What level of plagiarism-free content does PureText provide?",
      answer: "PureText is designed to generate mostly plagiarism-free content, aiming for high originality. However, for guaranteed 99.99% plagiarism-free content, consider upgrading to PureText Pro, which uses enhanced verification methods. (coming soon)"
    },
    {
      question: "Is PureText AI-free and plagiarism-free?",
      answer: "Yes, PureText is free from plagiarism and AI-generated content. While we can't guarantee 100% AI- or plagiarism-free content, we can confidently say that it significantly reduces the likelihood."
    },
    {
      question: "Why is PureText taking so long to respond?",
      answer: "We understand that delays can be frustrating, and we appreciate your patience. PureText is working on advanced LLM models to generate high-quality content quickly, though response times may occasionally take longer."
    },
    {
      question: "How accurate is the content generated by PureText?",
      answer: "PureText strives to generate accurate and relevant content using advanced LLM models. While it delivers high-quality results, we recommend reviewing the content to ensure it fully meets your requirements and expectations."
    }
];


  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center px-4 py-12 mt-[6rem]">
        <h1 className="text-5xl font-bold font-sans text-center mb-24">Frequently Asked Questions</h1>
        
        <div className="space-y-4 w-full max-w-3xl">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-100 transition-colors"
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-medium font-sans text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-black" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-black" />
                )}
              </button>
              
              <div
                className={`px-4 pb-4 font-mono text-black overflow-hidden transition-all duration-100 ease-in-out ${
                  openIndex === index ? 'block' : 'hidden'
                }`}
              >
                <div className="pt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer className="mt-auto" />
    </div>
  );
};

export default Page;
