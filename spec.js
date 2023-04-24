const os = require('os');

// 1KB = 1024 Bytes
// 1MB = 1024 KB
// 1GB = 1024 MB

// help --> toggle developer tools in ur vs code . just for knowlegde . vs code itself is a chrome

console.log('Free Memory in GB' , os.freemem() /1024 /1024 /1024);
console.log('Total Memory in GB' , os.totalmem() /1024 /1024 /1024);
console.log("Version" , os.version());
console.log("CPU" , os.cpus());
