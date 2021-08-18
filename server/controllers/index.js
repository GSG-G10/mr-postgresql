const { clntError, srvError } = require('./error');
const express = require("express");
// const dbClient = require("../database/config/connection")
const addTodo = require("../database/queries/addtodo")
const getTodo = require("../database/queries/todos")
const deleteTodo = require("../database/queries/deleteTodo")

const router = express.Router();

router.get('/get-todos', (request, response) => {
    getTodo().then(res => {
        response.json(res.rows)
    })
})

router.post('/add-to-do', (request, response) => {
    console.log(request.body);
    addTodo(request.body.description).catch(e => console.log(e))
    response.redirect("/")
})

router.delete('/delete-todo/:id', (request, response) => {
    console.log(request.params.id);
    deleteTodo(request.params.id)
    response.redirect("/")
})
router.use(clntError);



module.exports = router;