// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

// const app = express();

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// // Define a schema for the form data
// const formDataSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     message: String
// });
// const FormData = mongoose.model('FormData', formDataSchema);

// app.use(bodyParser.json());

// // Define a route to handle form submissions
// app.post('/submit-form', (req, res) => {
//     const { name, email, message } = req.body;

//     // Create a new FormData document
//     const formData = new FormData({ name, email, message });

//     // Save the form data to the database
//     formData.save((err, result) => {
//         if (err) {
//             console.error(err);
//             res.status(500).send('Error saving form data');
//         } else {
//             res.status(200).send('Form data saved successfully');
//         }
//     });
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(Server ${PORT});
// });