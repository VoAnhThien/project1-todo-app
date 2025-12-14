const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Database giả (trong thực tế dùng MongoDB, PostgreSQL...)
let tasks = [
    { id: 1, task: 'Học Git' },
    { id: 2, task: 'Học CI/CD' }
];

// API Routes
app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        task: req.body.task
    };
    tasks.push(newTask);
    res.json(newTask);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});