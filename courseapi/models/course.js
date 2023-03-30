/**
 * @swagger
 * components:
 *   schemas:
 *     Course:
 *       type: object
 *       required:
 *         - Title
 *         - Department
 *       properties:
 *         ID:
 *           type: number
 *           description: The auto-generated id of the course
 *         Title:
 *           type: string
 *           description: The title of the course
 *         Department:
 *           type: string
 *           description: The department of the course
 *       example:
 *         ID: 1
 *         Title: Literature
 *         Department: English
 */

const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    ID: {
        type: Number,
        required: true,
    },
    Title: {
        type: String,
        required: true,
    },
    Department: {
        type: String,
        required: true,
    }
});


const Course = mongoose.model('Course', courseSchema);

module.exports = Course;