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

fs.readFile('./readthis.txt','utf-8',(err,data1)=>{
  fs.readFile(`./${data1}.txt`,'utf-8',(err,data2)=>{
    console.log(data2);
    fs.readFile('./append.txt','utf-8',(err,data3)=>{
      console.log(data3);

      fs.writeFile('./final.txt',`${data2}`,'utf-8',err=>{

      })
      });
    });
  });
 console.log('Start');
