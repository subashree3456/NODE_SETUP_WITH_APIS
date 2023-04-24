const fs = require('fs');

const quote = "No Beauty shines brighter than that of a good heart ";

// awesome html

// fs.writeFile('./awesome.html' , quote , (err) =>{
//     console.log("Completed Writing!!!!");
// });


const quote2 = "Live More Worry Less...."

// Task 1
// create the below files with quote2 as the content
// backup /

// text-1.html
//text-2.html
//text-3.html
// ....

//text-10.html

// fs.writeFile('./backup/text1.html' , quote2 , (err) =>{
//     console.log("Completed Writing!!!!");
// });



// for( let i=1; i<=10; i++){
//     fs.writeFile(`./backup/text-${i}.html` , quote2 , (err) =>{
//         console.log("Completed Writing!!!!");
//     });
      
// }

// Task 2  sample i/p in cmd : node file.js 30
// node file.js 30 => 30 files to be created | text-1.html  ..... text-30.html\

const [ , , noOfFiles] = process.argv;

// for( let i=1; i<=noOfFiles; i++){
//     fs.writeFile(`./backup/text-${i}.html` , quote2 , (err) =>{
//         console.log("Completed Writing!!!!");
//     });
      
// }


// here i didnt give encoding code so o/p will print in hexadecimal format
// fs.readFile('./cool.txt', (err , data) =>{
//     console.log(data);
// })

// for humna readable
// fs.readFile('./cool.txt', "utf-8" , (err , data) =>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data);
//     }
    
// })

const quote3 = "Dream without fear , Love without limts";

// writefile content ta override panum . so old data loss aagidum

// fs.writeFile("./fun.html" , quote3 , (err) =>{
//     console.log("Completed appending!!!")
// });

// so appendfile la data loss aagathu


// fs.appendFile("./fun.html" , "\n" + quote3 , (err) =>{
//     console.log("Completed appending!!!")
// });

// deleting a file

fs.unlink("./delete-me.css" , (err) =>{
    console.log("Deleted successfully")
});



