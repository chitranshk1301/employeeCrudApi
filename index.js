const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const database = require('./db');
const morgan = require('morgan');

app.use(morgan('dev'));

app.use(bodyParser.json());



// endpoints here
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/employees/:page/:limit', (req, res) => {
    const page = req.query.page || req.params.page;
    const limit = req.query.limit || req.params.limit;
  
    const offset = (page - 1) * limit;
    database.query(`SELECT * FROM employee LIMIT ${limit} OFFSET ${offset}`, (err, rows) => {
        if (err) {
            console.error('Error connecting to MySQL:', err);
            return;
        }
        res.send(rows);
    });
})

app.get('/api/employee/:id', (req, res) => {
    database.query(`ELECT * FROM employee WHERE id = ?`, [req.params.id], (err, rows) => {
        if (err) {
            console.error('Error connecting to MySQL:', err);
            return;
        }
        res.send(rows);
    });
});

app.post('/api/employee', (req, res) => {
    database.query('INSERT INTO employee SET ?', req.body, (err, rows) => {
        if (err) {
            console.error('Error connecting to MySQL:', err);
            return;
        }
        res.send(rows);
    });
});

app.put('/api/employee/:id', (req, res) => {
    database.query('UPDATE employee SET ? WHERE id = ?', [req.body, req.params.id], (err, rows) => {
        if (err) {
            console.error('Error connecting to MySQL:', err);
            return;
        }
        res.send(rows);
    });
})

app.delete('/api/employee/:id', (req, res) => {
    database.query('DELETE FROM employee WHERE id = ?', [req.params.id], (err, rows) => {
        if (err) {
            console.error('Error connecting to MySQL:', err);
            return;
        }
        res.send(rows);
    });
})



app.listen(3000, () => {
    console.log(`Server listening on port ${port}`);
})