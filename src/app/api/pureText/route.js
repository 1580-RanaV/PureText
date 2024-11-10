// src/app/api/pureText/route.js

export async function POST(request) {
  try {
    const { inputText } = await request.json();
    console.log("Received input text:", inputText);

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.LLAMA_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.2-90b-text-preview',
        messages: [
          { 
            role: 'user',
            content: inputText
          }
        ],
        temperature: 0.7,
        max_tokens: 2000
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('API error:', errorData);
      throw new Error(`API error: ${errorData.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    console.log("response:", data);

    return new Response(JSON.stringify({ 
      outputText: data.choices[0].message.content 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in API route:', error);
    return new Response(JSON.stringify({ 
      error: 'An error occurred while processing the text' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}