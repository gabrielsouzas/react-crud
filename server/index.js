const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

require('dotenv').config();

/*const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "crudgames",
});*/

const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
});

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
    const { name } = req.body;
    const { cost } = req.body;
    const { category } = req.body;

    let SQL = "INSERT INTO games ( name, cost, category) VALUES (?, ?, ?);";

    connection.query(SQL, [name, cost, category], (err, result)=> {
        console.log(err);
    })
});

/*app.get("/", (req, res) => {
    let SQL = "INSERT INTO games ( name, cost, category) VALUES ('Far Cry 5', '120', 'Ação');";

    connection.query(SQL, (err, result) => {
        console.log(err);
    })
});*/

app.listen(3001, () => {
    console.log("Rodando Servidor...");
});