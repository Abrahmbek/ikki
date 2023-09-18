
const express = require("express");
const app = express();
const http = require('http');


//1 KIRISH CODE

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//2 
//3VIEWS CODE

app.set("views", "views");
app.set("view engine", "ejs");  /// ejs ni ichida biz frontend ni yasymiz


//4routing code
app.get("/", function (req, res) {
res.end("<h1>hello boss </h1>");
});


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running successfuly on port : ${PORT}`);
});
