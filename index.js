const fs = require("fs");
const http = require("http");
const url = require("url");

const home = fs.readFileSync(`${__dirname}/Pages/home.html`, "utf-8");
const contact = fs.readFileSync(`${__dirname}/Pages/contact.html`, "utf-8");
const about = fs.readFileSync(`${__dirname}/Pages/about.html`, "utf-8");

const server = http.createServer((req, res) => {
    const PathName = req.url;

    if (PathName === "/" || PathName === "/home") {
        res.writeHead(200, {
            "content-type": "text/html",
        });
        res.end(home);
    } else if (PathName === "/about") {
        res.writeHead(200, {
            "content-type": "text/html",
        });
        res.end(about);
    } else if (PathName === "/contact") {
        res.writeHead(200, {
            "content-type": "text/html",
        });
        res.end(contact);
    } else {
        res.writeHead(404, {
            "content-type": "text/html",
        });
        res.end("<h1>page not found</h1>");
    }
});

server.listen(8000, () => {
    console.log("listening to requests on port 8000");
});