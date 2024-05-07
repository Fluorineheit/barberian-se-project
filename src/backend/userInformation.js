import express from 'express';
import sqlite from 'sqlite';
const app = express();
app.use(express.json());

let db = new sqlite.Database('./users.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the users database.');
});

db.run(`CREATE TABLE IF NOT EXISTS users(
  id TEXT PRIMARY KEY,
  email TEXT,
  password TEXT,
  phoneNumber TEXT,
  username TEXT
)`);

app.post('/register', (req, res) => {
  const { id, email, password, phoneNumber, username } = req.body;
  db.run(`INSERT INTO users(id, email, password, phoneNumber, username) VALUES(?, ?, ?, ?, ?)`, [id, email, password, phoneNumber, username], function(err) {
    if (err) {
      return console.log(err.message);
    }
    console.log(`A row has been inserted with rowid ${this.lastID}`);
    res.send('User registered successfully');
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});