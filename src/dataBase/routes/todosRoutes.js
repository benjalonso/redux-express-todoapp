const Router = require('express');
const { getTodos, getTodo, createTodo, updateTodo, deleteTodo } = require('../controllers/todosController');

const router = Router();

router.get('/todos', getTodos);
router.post('/todos', createTodo);
router.put('/todos/:id', updateTodo);
router.delete('/todos/:id', deleteTodo);
router.get('/todos/:id', getTodo);

module.exports = router;