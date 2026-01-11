const fileOps = require('./fileOperations');

fileOps.writeLogFile('log.txt', 'Hello World\n');
console.log(fileOps.readLogFile('log.txt'));
fileOps.appendLogFile('log.txt', 'Appended text\n');
console.log(fileOps.readLogFile('log.txt'));
// fileOps.deleteLogFile('log.txt'); // Uncomment to delete file
