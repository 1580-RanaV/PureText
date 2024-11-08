import ollama from 'ollama';

async function testOllama() {
  try {
    const response = await ollama.chat({
      model: 'llama3.1',
      messages: [{ role: 'user', content: 'Test message to verify Ollama' }]
    });
    console.log("Ollama response:", response.message.content);
  } catch (error) {
    console.error("Error with Ollama:", error);
  }
}

testOllama();
