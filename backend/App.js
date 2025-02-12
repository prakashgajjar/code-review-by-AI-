const express = require('express');
const homeRoutes = require('./routes/Home.routes.js');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use('/ai',homeRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT , ()=>{
    console.log(`Server running on port ${PORT}`);
})