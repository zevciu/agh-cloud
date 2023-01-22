const express = require("express");
const app = express();
const path = require("path");

const tasks = [];

// obsługa JSON
app.use(express.json());

// endpoint do tworzenia nowego zadania
app.post("/tasks", (req, res) => {
const task = req.body;
task.id = Date.now();
tasks.push(task);
return res.status(201).send(task);
});

// endpoint do pobierania wszystkich zadań
app.get("/tasks", (req, res) => {
return res.status(200).send(tasks);
});


// endpoint do wyświetlania interfejsu użytkownika
app.get("/", (req, res) => {
res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, () => {
console.log("Server running on port 3000");
});