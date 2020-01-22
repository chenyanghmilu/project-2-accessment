var express = require('express');
var router = express.Router();
const todos = require("../models/todo");


router.get('/', function(req, res, next) {
    res.render('index', { title: 'Unit 2 Assessment', todos });
});

router.post("/", function(req, res) {
    todos.push({
        todo: req.body.todo,
        done: false
    });
    res.redirect("/");
});

router.delete("/:index", function(req, res) {
    todos.splice(req.params.index, 1);
    res.redirect("/");
});

module.exports = router;