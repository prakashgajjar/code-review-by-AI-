const OpenAI = require('openai');
require('dotenv').config();

// Initialize the OpenAI client with DeepSeek configuration
const openai = new OpenAI({
  baseURL: 'https://api.deepseek.com', // Ensure the correct API endpoint
  apiKey: process.env.DEEPSEEK_API_KEY, // Load API key from environment variables
});

// Define the async function to interact with the API
const infinity = async () => {
  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'system', content: 'You are a helpful assistant.' }],
      model: 'deepseek-chat', // Ensure the correct model name
    });

    // Log the assistant's response
    console.log(completion.choices[0].message.content);
  } catch (error) {
    console.error('Error calling DeepSeek API:', error);
  }
};

// Export the function for use in other modules
module.exports = infinity;