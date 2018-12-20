'use strict';

let fs = require('fs');

fs.readFile('./files/' + file[0], 'UTF-8', (err,data) => {
  if ( err ) { throw err; }
  console.log(data.toString());
  
  let num = Math.random().toString();
  fs.writeFile('./files/' + file[0],  num, (err) => {
    if (err) throw err;
    console.log('Text changed', num);
    
    fs.readFile('./files/' + file[0], 'UTF-8', (err,data) => {
      if ( err ) { throw err; }
      console.log(data.toString());
    });
  });
});