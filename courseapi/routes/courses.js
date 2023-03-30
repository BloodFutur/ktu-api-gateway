const express = require('express');
const router = express.Router();

// Import models
const Course = require('../models/course');



// Get all courses
/**
 * @swagger
 * /courses:
 *   get:
 *     description: Get all courses
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/Course'
 *       500: 
 *         description: Internal server error
 */
router.get('/courses', async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get one course

/**
 * @swagger
 * /courses/{id}:
 *   get:
 *     description: Get one courses
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string    
 *         required: true+
 *         description: The course id
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           items:
 *            $ref: '#/components/schemas/Course'
 *       404:
 *         description: Course not found
 *       500: 
 *         description: Internal server error
 */
router.get('/courses/:id', async (req, res) => {
    try {
        const course = await Course.find({ ID: req.params.id });
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create one course
/**
 * @swagger
 * /courses:
 *   post:
 *     description: Create one course
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ID:
 *                type: number
 *               Title:
 *                type: string
 *               Department:
 *                type: string
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Course'
 *       400:
 *         description: Bad request
 * 
 */
router.post('/courses', async (req, res) => {
    const course = new Course({
        ID: req.body.ID,
        Title: req.body.Title,
        Department: req.body.Department,
    });

    try {
        const newCourse = await course.save();
        res.status(201).json(newCourse);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update one course
/**
 * @swagger
 * /courses/{id}:
 *  patch:
 *   description: Update one course
 *   parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: string    
 *       required: true
 *       description: The course id
 *   requestBody:
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             Title:
 *              type: string
 *              value: "Literature"
 *             Department:
 *              type: string
 *              value: "English"
 *   responses:
 *    200:
 *     description: Success
 *     content:
 *       application/json:
 *         schema:
 *           $ref: '#/components/schemas/Course'
 *    400:
 *     description: Bad request
 * 
 */
router.patch('/courses/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = {new: true };

        const result = await Course.findOneAndUpdate(
            { ID: id }, updatedData, options
        );

        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete one course
/**
 * @swagger
 * /courses/{id}:
 *  delete:
 *     description: Delete one course
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string    
 *         required: true
 *         description: The course id
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal server error
 */
router.delete('/courses/:id', async (req, res) => {
    try {
        const data = await Course.findOneAndDelete({
             ID: req.params.id 
        });
        res.status(200).json({ message: 'Deleted course' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


module.exports = router;