let todos = [];

exports.getTodos = (req, res, next) => {
    res.render('todo', { todos: todos });
};

exports.addTodo = (req, res, next) => {
    const newTodo = req.body.todo;
    todos.push(newTodo);
    res.redirect('/todo');
};

exports.deleteTodo = (req, res, next) => {
    const todoIndex = req.body.index;
    todos.splice(todoIndex, 1);
    res.redirect('/todo');
};