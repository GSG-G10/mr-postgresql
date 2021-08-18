const { clntError, srvError } = require('./error');
const express = require("express");
// const dbClient = require("../database/config/connection")
const addTodo = require("../database/queries/addtodo")
const getTodo = require("../database/queries/todos")

const router = express.Router();

router.get('/get-todos', (request, response) => {
    getTodo().then(res => {
        console.log(res);
        response.json(res.rows)
    })
})
router.post('/add-to-do', (request, response) => {
    console.log(request.body);
    addTodo(request.body.description).catch(e => console.log(e))
    response.redirect("/")
})
router.use(clntError);



module.exports = router;