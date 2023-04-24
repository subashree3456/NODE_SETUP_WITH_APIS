
const sum = (a,b) => a+b;

// console.log(process.argv);
const [ , , m1 , m2] = process.argv;
console.log(sum(parseInt(m1) , parseInt(m2)));

// process.argv always gives u a array of strings
// another option
//console.log(sum(+m1 , +m2))
