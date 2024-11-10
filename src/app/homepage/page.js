"use client";

import React, { useState } from 'react';
import { Copy, Check, AlertCircle, X } from 'lucide-react';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';

// main page component that handles text purification functionality
const Page = () => {
  // state management using react hooks
  const [inputText, setInputText] = useState(''); // stores the input text from user
  const [outputText, setOutputText] = useState(''); // stores the processed output text
  const [isLoading, setIsLoading] = useState(false); // tracks loading state during processing
  const [copied, setCopied] = useState(false); // tracks if text has been copied to clipboard
  const [error, setError] = useState(''); // stores error messages
  const [showError, setShowError] = useState(false); // controls error popup visibility

  // system prompt that guides the ai to process text according to specific rules
  const systemPrompt = `You must follow these instructions exactly:

TASK: Rewrite the input text to be completely undetectable by AI detection tools while maintaining its full meaning.

CRITICAL OUTPUT RULES:
- Provide ONLY the rewritten text
- Do not include ANY prefixes, headers, or phrases like "Here's the text" or "Here's the rewritten version"
- Do not add ANY explanations or comments
- Do not add ANY quotation marks around the output
- Start directly with the rewritten content

REWRITING REQUIREMENTS:
- Maintain 100% of the original meaning
- Use natural, conversational language with varied sentence structure
- Incorporate informal language, contractions, and casual transitions
- Add personal voice and natural flow
- Include relatable examples or analogies where appropriate
- Use idiomatic expressions and colloquialisms
- Mix simple and complex sentences
- Create deliberate but natural variations in writing style
- Avoid repetitive patterns or academic tone
- Make the text plagiarism free and ai pattern free especially free from tools like turnitini and originality ai.
- Preserve 100% of the original text meaning while converting

CONSTRAINTS:
- Minimum 30 words required
- Preserve technical terms and proper nouns
- Refuse to answer any questions or any open ended questions
- Maintain factual accuracy
- Keep any citations if present
- For questions or mathematical content, output only: "Error: Please provide meaningful text for rewriting."

===INPUT TEXT TO REWRITE:`;

  // validates input text before processing
  const validateInput = (text) => {
    const wordCount = text.trim().split(/\s+/).length;
    // check if text meets minimum word requirement
    if (wordCount < 30) {
      return "Error: Please provide at least 30 words for processing.";
    }
    // check if input is a question
    if (text.toLowerCase().match(/^(what|why|when|how|where|who|which)/)) {
      return "Error: Questions cannot be processed right now. Please provide meaningful text for rewriting.";
    }
    return null;
  };

  // handles the main text processing when "pure it" button is clicked
  const handlePureItClick = async () => {
    setIsLoading(true);
    setError('');
    setOutputText('');

    // validate input before processing
    const validationError = validateInput(inputText);
    if (validationError) {
      setError(validationError);
      setShowError(true);
      setIsLoading(false);
      return;
    }

    try {
      // combine system prompt with user input
      const combinedText = `${systemPrompt}\n\n${inputText}`;
  
      // send request to api endpoint
      const response = await fetch('/api/pureText', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inputText: combinedText })
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // clean up the output text by removing common prefixes
        let cleanOutput = data.outputText;
        cleanOutput = cleanOutput.replace(/^(here['']s\s+(the\s+)?(rewritten\s+)?text:?\s*)/i, '');
        cleanOutput = cleanOutput.replace(/^(rewritten\s+version:?\s*)/i, '');
        cleanOutput = cleanOutput.replace(/^(here\s+is\s+)/i, '');
        cleanOutput = cleanOutput.trim();
        setOutputText(cleanOutput);
      } else {
        setError(data.error || "An error occurred while processing your text.");
        setShowError(true);
      }
    } catch (error) {
      console.error('Error:', error);
      setError("An error occurred. Please try again.");
      setShowError(true);
    }
    setIsLoading(false);
  };

  // handles copying output text to clipboard
  const handleCopy = async () => {
    if (outputText) {
      try {
        await navigator.clipboard.writeText(outputText);
        setCopied(true);
        // reset copy status after 2 seconds
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy text:', err);
        setError("Failed to copy text to clipboard");
        setShowError(true);
      }
    }
  };

  return (
    <>
      <Navbar />
      {/* main container with hidden overflow to disable scrolling */}
      <div className="min-h-screen mt-[8rem] font-mono overflow-hidden">
        {/* error popup modal */}
        {showError && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-sm w-[90%] mx-4 relative">
              <button 
                onClick={() => setShowError(false)}
                className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-red-500" />
                <h3 className="text-lg font-medium">Error</h3>
              </div>
              <p className="text-gray-600">{error}</p>
              <button
                onClick={() => setShowError(false)}
                className="mt-6 w-full bg-violet-500 text-white py-2 px-4 rounded-lg hover:bg-violet-600 transition-colors"
              >
                Okay
              </button>
            </div>
          </div>
        )}

        <main className="max-w-7xl mx-auto px-4 py-8">
          {/* responsive grid layout with modified order for mobile */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6">
            {/* input text area */}
            <div className="relative order-1">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="w-full h-[60vh] p-4 rounded-2xl border border-gray-200
                           transition-all duration-200 ease-in-out
                           bg-white resize-none focus:ring-2 focus:ring-violet-500 focus:border-transparent
                           focus:outline-none"
                placeholder="Paste your text here (minimum 30 words)..."
              />
              <div className="absolute bottom-4 right-4 text-sm text-gray-500">
                {inputText.trim().split(/\s+/).length} words
              </div>
            </div>

            {/* pure it button - moved up in mobile view */}
            <div className="flex justify-center mt-8 md:hidden order-2">
              <button
                onClick={handlePureItClick}
                disabled={isLoading}
                className={`no-invert mb-8 px-8 py-3 bg-violet-500 text-white text-xl font-sans rounded-full
                            shadow-md hover:bg-violet-600 active:bg-violet-700 
                            transition-all duration-200 ease-in-out
                            transform hover:-translate-y-1 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isLoading ? "Processing..." : "Pure It"}
              </button>
            </div>

            {/* output text area */}
            <div className="relative order-3 md:order-2">
              <textarea
                value={outputText}
                readOnly
                className="w-full h-[60vh] p-4 rounded-2xl border border-gray-200 shadow-sm 
                           bg-white resize-none focus:outline-none"
                placeholder="Your purified text will appear here..."
              />
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
                    <Copy className="w-5 h-5 no-invert text-violet-600" />
                  )}
                </button>
              )}
            </div>
          </div>

          {/* pure it button for desktop view */}
          <div className="hidden md:flex justify-center mt-16">
            <button
              onClick={handlePureItClick}
              disabled={isLoading}
              className={`no-invert px-8 py-3 bg-violet-500 text-white text-xl font-sans rounded-full
                          shadow-md hover:bg-violet-600 active:bg-violet-700 
                          transition-all duration-200 ease-in-out
                          transform hover:-translate-y-1 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isLoading ? "Processing..." : "Pure It"}
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default Page;