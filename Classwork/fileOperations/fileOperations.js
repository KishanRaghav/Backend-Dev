const fs = require('fs');

function readLogFile(path) {
    return fs.readFileSync(path, 'utf-8');
}
function writeLogFile(path, data) {
    fs.writeFileSync(path, data);
}
function appendLogFile(path, data) {
    fs.appendFileSync(path, data);
}
function deleteLogFile(path) {
    fs.unlinkSync(path);
}

module.exports = { readLogFile, writeLogFile, appendLogFile, deleteLogFile };
