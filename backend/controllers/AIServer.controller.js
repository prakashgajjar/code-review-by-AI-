require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

const aiResponse= async (req,res)=>{
    const {prompt,id} = res.body;
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
}

module.exports = aiResponse;