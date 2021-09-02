const fs = require('fs');

fs.writeFile('read.txt','today is node.js day',(err)=>{
    console.log('write file with async');
    console.log(err);
});

fs.appendFile('read.txt','welcome to node.js',(err)=>{
    console.log('hey whatsup');
    console.log(err)
})

fs.readFile('read.txt','UTF-8',(err,data)=>{
    console.log(data);
    console.log(err);
});



//create a folder

// fs.mkdir('crud',(err)=>{
//     console.log(err);
// });

fs.writeFile('./crud/bio.txt','my name is Tanzeel',(err)=>{
    console.log(err);
});

const os = require('os');
const architecture = os.arch();
console.log(architecture);

// to check your system remaining RAM

const freememory = os.freemem();
console.log(`${freememory /1024 /1024 /1024 }`);

// to check your system RAM
const totalmemory = os.totalmem();
console.log(`${totalmemory /1024 / 1024 /1024 }`);