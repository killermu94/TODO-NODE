// Packages Requires
const colors = require('colors');

// App requires
const { argv } = require('./config/yargs');
const TASK = require('./tasks/tasks');

const CMD = argv._[0];

switch (CMD) {
    case 'create':
        // Create register
        let task = TASK.create(argv.description)
        console.log(task);
        break;

    case 'update':
        // Update register
        let uTask = TASK.update(argv.description, argv.completed);
        console.log(uTask);
        break;

    case 'delete':
        // Drop register
        let dTask = TASK.drop(argv.description);
        console.log(dTask);
        break;

    case 'all':
        // Show all registers
        let tasks = TASK.loadDb();

        for (let task of tasks) {
            console.log('====================Task===================='.magenta);
            console.log(task.description);
            console.log('Status:', task.completed);
            console.log('============================================\n'.magenta);
        }
        break;

    default:
        console.log('Command not found');
        break;
}