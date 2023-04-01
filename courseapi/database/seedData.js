const mongoose = require('mongoose');
require('dotenv').config();


// Import models
const Course = require('../models/course');

// Connect to MongoDB
const mongoString = process.env.MONGO_STRING;
console.log('Connecting to database');
console.log('MongoDB connection string: ', mongoString);
mongoose.connect(mongoString, 
{ 
    useNewUrlParser: true,
    useUnifiedTopology: false,
    useUnifiedTopology: true 
});

const database = mongoose.connection;

// Log errors
database.on('error', (error) => {
    console.log(error);
});

// Log connection
database.once('connected', () => {
    console.log('Connected to database');
});


const seedCourses = [
    {
        ID: 1,
        Title: 'Chemistry',
        Department: 'Science',
    },
    {
        ID: 2,
        Title: 'Microeconomics',
        Department: 'Economics',
    },
    {
        ID: 3,
        Title: 'Macroeconomics',
        Department: 'Economics',
    },
    {
        ID: 4,
        Title: 'Calculus',
        Department: 'Mathematics',
    },
    {
        ID: 5,
        Title: 'Trigonometry',
        Department: 'Mathematics',
    },
    {
        ID: 6,
        Title: 'Composition',
        Department: 'English',
    },
    {
        ID: 7,
        Title: 'Literature',
        Department: 'English',
    },
    {
        ID: 8,
        Title: 'Physics',
        Department: 'Science',
    },
    {
        ID: 9,
        Title: 'Biology',
        Department: 'Science',
    },
    {
        ID: 10,
        Title: 'History',
        Department: 'Social Studies',
    },
]


// Seed database function
const seedDB = async () => {
    await Course.deleteMany({});
    await Course.insertMany(seedCourses);
};


// Seed and close connection
seedDB().then(() => {
    console.log('Database seeded');
    console.log('Seeded courses: ', seedCourses);
    mongoose.connection.close()
    .then(() => {
        console.log('Connection closed');
    });
});