"use client";

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import Navbar from '../components/Navbar';

const Page = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  // Function to handle "Pure It" button click
  const handlePureItClick = async () => {
    setIsLoading(true);
    try {
      const fixedText = "If the input text contains at least 30 words, I will rewrite it to sound fully human and conversational, preserving 100% of its meaning and making it undetectable to AI tools like Turnitin and Originality AI. If the input is a question or any open ended question (starting with words like 'what,' 'why,' 'when,' 'how') or includes mathematical content, respond with 'Error: Add meaningful text for me to help.' No extra words, introductions, or phrases will be added in the reply—only the rephrased content itself should be provided: ";
      const combinedText = `${fixedText}${inputText}`;
  
      const response = await fetch('/api/pureText', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inputText: combinedText })
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setOutputText(data.outputText);
      } else {
        setOutputText("Error: " + data.error);
      }
    } catch (error) {
      console.error('Error:', error);
      setOutputText("An error occurred. Please try again.");
    }
    setIsLoading(false);
  };

  // Function to handle copying text
  const handleCopy = async () => {
    if (outputText) {
      try {
        await navigator.clipboard.writeText(outputText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
      } catch (err) {
        console.error('Failed to copy text:', err);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen mt-[7rem] font-sans">
        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Input Box */}
            <div className="relative">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="w-full h-[60vh] p-4 rounded-2xl border border-gray-200
                           transition-all duration-200 ease-in-out
                           bg-white resize-none"
                placeholder="Paste your text here..."
              />
            </div>

            {/* Output Box */}
            <div className="relative">
              <textarea
                value={outputText}
                readOnly
                className="w-full h-[60vh] p-4 rounded-2xl border border-gray-200 shadow-sm 
                           bg-white resize-none"
                placeholder="Your pure text will appear here..."
              />
              {/* Copy Button */}
              {outputText && (
                <button
                  onClick={handleCopy}
                  className="absolute bottom-4 right-4 p-2 rounded-lg bg-violet-100 
                           hover:bg-violet-200 transition-colors duration-200"
                  title="Copy to clipboard"
                >
                  {copied ? (
                    <Check className="w-5 h-5 text-green-600" />
                  ) : (
                    <Copy className="w-5 h-5 text-violet-600" />
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Pure It Button */}
          <div className="flex justify-center mt-16">
            <button
              onClick={handlePureItClick}
              disabled={isLoading}
              className={`px-8 py-3 bg-violet-500 text-white text-xl font-medium rounded-full
                          shadow-md hover:bg-violet-600 active:bg-violet-700 
                          transition-all duration-200 ease-in-out
                          transform hover:-translate-y-1 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isLoading ? "Puring It..." : "Pure It"}
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default Page;