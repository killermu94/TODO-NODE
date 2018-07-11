// Description parameter for the commands
const description = {
    demand: true,
    alias: 'd',
    desc: 'Description of the task.'
}

// Packages requires
const argv = require('yargs')
    .command('create', 'Used for create one task.', {
        description
    })
    .command('update', 'Used for update one task.', {
        description,
        completed: { alias: 'c', default: true, desc: 'Mark as completed the task.' }
    })
    .command('delete', 'Used for delete one task.', {
        description
    })
    .command('all', 'Used for list all task.')
    .help()
    .argv;

module.exports = {
    argv
}