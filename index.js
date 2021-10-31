const http = require('http');
const app = express();
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
    
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
