const express = require('express');
const app = express();

app.use(express.json());

let students = [
    { id: 1, name: 'abc' },
    { id: 2, name: 'xyz' }
];

app.get('/students', (req, res) => {
    res.status(200).json(students);
});

app.post('/students', (req, res) => {
    console.log("Post request")
    const student = {
        id: students.length + 1,
        name: req.body.name
    };
    students.push(student);
    res.status(201).json(student);
});

if (require.main === module) {
    app.listen(3000, () => {
        console.log('Server is running');
    });
}

module.exports = app;
