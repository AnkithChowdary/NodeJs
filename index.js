const fs=require('fs');  // Modules one core which contains various methods


const hello='Hello'
console.log(hello);
// Reading from a file
const text=fs.readFileSync('./abc.txt','utf-8');
console.log(text);

const textOut=`Start learning Node Js:${text}.\nCreated on ${Date.now()}`

fs.writeFileSync('./abc.txt',textOut);
console.log('Done');