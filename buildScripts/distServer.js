import express from "express";
import path from "path";
import open from "open";
import compression from "compression";

/*eslint-disable no-console */

let port = 3000;
let app = express();
app.use(compression());
app.use(express.static("dist"));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.get("/users", function (req, res) {
    res.json([
        {
            id: 1,
            firstname: "bob",
            lastname: "Smith",
            email: "dlouima@gmail.com",
        },
        {
            id: 2,
            firstname: "Tamy",
            lastname: "Norton",
            email: "dlouima@gmail.com",
        },
        {
            id: 3,
            firstname: "Tina",
            lastname: "Lee",
            email: "dlouima@gmail.com",
        },
    ]);
});

app.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else {
        open("http://localhost:" + "port");
    }
});
