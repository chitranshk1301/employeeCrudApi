const express = require('express');
const app = express();
const port = 3000;
const database = require('./db');


app.get("/createDatabase", (req, res) => {

    let databaseName = "infoware_db";

    let createQuery = `CREATE DATABASE ${databaseName}`;

    // use the query to create a Database.
    database.query(createQuery, (err) => {
        if (err) throw err;

        console.log("Database Created Successfully !");

        let useQuery = `USE ${databaseName}`;
        database.query(useQuery, (error) => {
            if (error) throw error;

            console.log("Using Database");

            return res.send(
                `Created and Using ${databaseName} Database`);
        })
    });
});


app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen(3000, () => {
    console.log(`Server listening on port ${port}`);
})