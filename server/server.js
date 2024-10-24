
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');


const app = express();
app.use(cors());
app.use(express.json())

mongoose.connect('mongodb+srv://gelo:angeloZ002@database.puxno.mongodb.net/?retryWrites=true&w=majority&appName=Database')
app.use('/api', userRoutes);

app.listen(8000, () => {
console.log(`Server is up and running at http://localhost:8000`);
});

// app.request(express.json());
// app.use(express.urlencoded({extended:true}))