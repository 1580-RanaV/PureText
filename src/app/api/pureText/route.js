// src/app/api/pureText/route.js

import ollama from 'ollama';

export async function POST(request) {
  try {
    const { inputText } = await request.json();
    console.log("Received input text:", inputText); // Log the input text to verify it's coming through


    fetch("http://127.0.0.1:11434")
    .then(() => console.log("Connected to Ollama"))
    .catch(() => console.error("Could not connect to Ollama"));

    // Send the input text to Ollama for processing
    const response = await ollama.chat({
      model: 'llama3.1',
      messages: [{ role: 'user', content: inputText }]
    });

    console.log("Ollama response:", response); // Log the Ollama response to debug

    // Return the processed text
    return new Response(JSON.stringify({ outputText: response.message.content }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in API route:', error); // Log any errors that occur
    return new Response(JSON.stringify({ error: 'An error occurred while processing the text' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
