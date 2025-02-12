const express = require('express');
const homeRoutes = require('./routes/Home.routes.js');
const cors = require('cors');
require('dotenv').config();
const app = express();

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:5175'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']  // Add other headers if needed  //
}))

app.use('/ai',homeRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT , ()=>{
    console.log(`Server running on port ${PORT}`);
})