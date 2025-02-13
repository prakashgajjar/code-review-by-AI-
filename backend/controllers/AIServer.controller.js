require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

const aiResponse= async (req,res)=>{
    const {question,id} = req.body;
    console.log('your request was submited')
    const result = await model.generateContent(question);
    const textResult = result.response.text()
    res.send(textResult);
}

module.exports = aiResponse;