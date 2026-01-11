const tasks = require('./asyncTasks');

// Callback
tasks.task1(() => {
    console.log("Callback finished");
});

// Promise
tasks.task2().then(() => console.log("Promise finished"));

// Async/Await
(async () => {
    await tasks.task3();
    console.log("Async/Await finished");
})();
