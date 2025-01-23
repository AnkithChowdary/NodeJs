// Non-blocking, asynchronous way
const fs=require('fs');
//Call back function
//Other code can continue executing while the file is being read.
fs.readFile('./abc.txt','utf-8',(err,data)=>{
console.log(data);
});
// Here the output is: 
//Start
//Start learning Node Js:Hello my name is ankith.
//Created on 1737647532860
 console.log('Start');
