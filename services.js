const db = require('./db');


app.post('/employees', (req, res) => {
  const employeeData = req.body;

  // Insert employee data into the database
  db.query('INSERT INTO employees SET ?', employeeData, (err, result) => {
    if (err) {
      console.error('Error creating employee:', err);
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(201).json({ message: 'Employee created' });
  });
});


app.get('/employees/:id', (req, res) => {
  const employeeId = req.params.id;

  // Retrieve employee from the database
  db.query('SELECT * FROM employees WHERE id = ?', [employeeId], (err, rows) => {
    if (err) {
      console.error('Error fetching employee:', err);
      res.status(500).json({ error: err.message });
      return;
    }
    if (rows.length === 0) {
      res.status(404).json({ error: 'Employee not found' });
    } else {
      res.json(rows[0]);
    }
  });
});
