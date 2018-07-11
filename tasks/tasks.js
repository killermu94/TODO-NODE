const fs = require('fs');

let todoList = [];

// Return all task of JSON file
const loadDb = () => {
    try {
        todoList = require('../db/data.json');
    } catch (error) {
        todoList = [];
    }

    return todoList;
}

// Write a task in JSON file
const saveInDb = () => {
    let data = JSON.stringify(todoList);

    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw err;
    });
}

// Push a task
const create = (description) => {
    loadDb();

    let todo = {
        description,
        completed: false
    };

    todoList.push(todo);
    saveInDb();
    return todo;
}

// Update task
const update = (description, completed) => {
    loadDb();

    let index = todoList.findIndex(task => task.description === description);

    if (index >= 0) {
        todoList[index].completed = completed;
        saveInDb();
        return todoList[index];
    }

    return 'Task not found.';
}

// Delete task
const drop = (description) => {
    loadDb();

    let index = todoList.findIndex(task => task.description === description);

    if (index >= 0) {
        todoList.splice(index, 1);
        saveInDb();
        return 'The task is deleted.';
    }

    return 'Task not found.';
}

module.exports = {
    create,
    loadDb,
    update,
    drop,
}