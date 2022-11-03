const { response } = require("express");
const { request } = require("http");
const express = require("express");
const path = require("path");

const app = express();

const port = 5000;

app.listen(port, () => {
    console.log("서버가 정상적으로 실행되었습니다");
});

// app.get("/", (request, response) => {
//     response.send("성공입니다!! ");
// });

app.use(express.static(path.join(__dirname, 'my-app/build')));


app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, 'my-app/build/index.html'));
});


// app.get("*", (request, response) => {
//     response.sendFile(path.join(__dirname, 'my-app/build/index.html'));
// });

// var http = require('http');
// var fs = require('fs');
// var app = http.createServer(function (request, response) {
//     var url = request.url;
//     if (request.url == '/') {
//         console.log("접속에 성공")
//         // url = '/pages/login/index.tsx';
//         url = '/pages/index.html';
//     }
//     if (request.url == '/favicon.ico') {

//         response.writeHead(404);
//         response.end();
//         return;
//     }
//     response.writeHead(200);
//     response.end(fs.readFileSync(__dirname + url));

// });
// app.listen(5000);