//console.log(process.argv)  // argv --> argument values , running s/w is called process

//console.log(process.argv , process.argv[2]) ;



const double = (n) => n*2;
const[, , num] = process.argv;

// console.log(double(10));

//console.log(double(process.argv[2]));

// u can also give in this way

console.log(double(num));

//console.log(document);  /// throws error since document node js la kidaiyathu but browser la iruku
// console.log(window);  // throws error since window  node js la kidaiyathu but browser la iruku

//console.log(global);  // replacement for window

// ifu give this in cmd (node dbl.js 50 ) it will show these 3 o/p

// [
//     'C:\\Program Files\\nodejs\\node.exe',   // node path
//     'E:\\b37we-node\\dbl.js',    // full path
//     '50'
//   ]