function task1(callback) {
    setTimeout(() => { console.log("Task1 done"); callback(); }, 1000);
}
function task2() {
    return new Promise(resolve => setTimeout(() => { console.log("Task2 done"); resolve(); }, 1000));
}
async function task3() {
    await new Promise(resolve => setTimeout(() => { console.log("Task3 done"); resolve(); }, 1000));
}

module.exports = { task1, task2, task3 };
