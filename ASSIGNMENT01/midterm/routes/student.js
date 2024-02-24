const express = require('express');
const router = express.Router();
const Student = require('./models/Student');

// READ - Get All Students
router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.render('student', { students });
    } catch (err) {
        res.send('Error: ' + err);
    }
});

// CREATE - Add a New Student (Example)
router.post('/', async (req, res) => {
    const student = new Student({
        StudentNumber: req.body.StudentNumber,
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        EmailAddress: req.body.EmailAddress
    });
    
    try {
        const newStudent = await student.save();
        res.redirect('/students'); // Redirect back to student list after creation
    } catch (err) {
        res.send('Error: ' + err);
    }
});

module.exports = router;

