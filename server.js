const http = require("http");
const server = http.createServer((req,res) =>{
	console.log("request method triggered");
	res.writeHead(200, {"Content-Type":"text/html"});
	res.end("<h1>Hello world, From termux :D</h1>");
}).listen(3000);
console.log("server is running in termux node.js server");

