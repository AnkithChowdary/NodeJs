const fs=require('fs');  // Modules one core which contains various methods


const hello='Hello'
console.log(hello);
// Reading from a file
const text=fs.readFileSync('./abc.txt','utf-8');
console.log(text);

const textOut=`Start learning Node Js:${text}.\nCreated on ${Date.now()}`

fs.writeFileSync('./abc.txt',textOut);
console.log('Done');

// Synchronous code is often called blocking code becz each line waits for the result of the previous line
// So we go for Asynchronous code
// As it is non-blocking code
 
//A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. Callbacks are commonly used in asynchronous programming