// How NodeJS differs from Vanilla JS
// 1) Node runs on a server - not a browser (backend not frontend)
// 2) The console is terminal window
//console.log("Hello World");
// 3) global object instead of window object
//console.log(global)
// 4) Has Common Core modules that we will explore
// 5) CommonJS modules instead of ES6 modules

const os = require("os")
const path = require("path")
//console.log(os)

console.log(os.type()) //Linux
console.log(os.version()) // #51~20.04.1-Ubuntu SMP Fri Jan 7 06:51:40 UTC 2022
console.log(os.homedir()) // /home/user

console.log(__dirname) // /home/user/Documents/NodeJs_examples
console.log(__filename)// /home/user/Documents/NodeJs_examples/server.js

console.log(path.dirname(__filename)) // /home/user/Documents/NodeJs_examples
console.log(path.basename(__filename)) // server.js
console.log(path.extname(__filename)) // .js

console.log(path.parse(__filename)) /* {
                                            root: '/',
                                            dir: '/home/user/Documents/NodeJs_examples',
                                            base: 'server.js',
                                            ext: '.js',
                                            name: 'server'
                                        } */