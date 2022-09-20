const Todo = require('../models/todosModel');


const getTodos = async (req, res) => {
    try {
        const todos = await Todo.findAll();
        res.json(todos);
    } catch (error) {
        return res.status(500).json({ message: error.message });

    }
}
const getTodo = async (req, res) => {
    const { id } = req.params;
    try {
        const todo = await Todo.findOne({
            where: { id }
        })
        res.json(todo);
    } catch (error) {
        return res.status(500).json({ message: error.message });

    }
}
const createTodo = async (req, res) => {
    const { title, description, expiration } = req.body;

    try {
        const newTodo = await Todo.create({
            title,
            description,
            expiration,
        })

        res.json(newTodo);

    } catch (error) {
        return res.status(500).json({ message: error.message });

    }
}

const updateTodo = async (req, res) => {
    const { id } = req.params;
    const { title, description, expiration } = req.body;

    try {
        const todo = await Todo.findOne({
            where: { id }
        })
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        const updatedTodo = await todo.update({
            title,
            description,
            expiration,
        })
        res.json(updatedTodo);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
const deleteTodo = async (req, res) => {
    const { id } = req.params;

    try {
        const todo = await Todo.findOne({
            where: { id }
        })
        if (!todo) {

            return res.status(404).json({ message: 'Todo not found' });
        }
        await todo.destroy();
        res.json({ message: 'Todo deleted' });

    } catch (error) {
        return res.status(500).json({ message: error.message });

    }
}

module.exports = { getTodos, getTodo, createTodo, updateTodo, deleteTodo };