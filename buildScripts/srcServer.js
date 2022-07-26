import express from "express";
import path from "path";
import open from "open";
import webpack from "webpack";
import config from "../webpack.config.dev";

/*eslint-disable no-console */

let port = 3000;
let app = express();

const compiler = webpack(config);

app.use(
    require("webpack-dev-middleware")(compiler, {
        publicPath: config.output.publicPath,
    })
);

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../src/index.html"));
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
