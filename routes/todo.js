const router = require('express').Router();
const Todo = require("../models/Todo");

// Add Todo
router.post("/add/todo", (req, res) => {
    // Extract the todo from req.body using destructuring
    const { todo } = req.body;

    // Create a new Todo instance
    const newTodo = new Todo({ todo });

    // Save the todo
    newTodo.save()
        .then(() => {
            console.log("Successfully added todo!");
            res.redirect("/");
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send("Error adding todo");
        });
})

// Delete Todo
router.get("/delete/todo/:_id", (req, res) => {
    const { _id } = req.params;

    Todo.deleteOne({ _id })
        .then(() => {
            console.log("Deleted Todo Successfully");
            res.redirect("/");
        })
        .catch((err) => console.log(err));
});

module.exports = router;
