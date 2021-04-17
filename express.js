const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('./public'));
app.listen(4000, () => {
  console.log('listening to 4000');
});
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'));
});
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, './contact.html'));
});
app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, './services.html'));
});
app.all('*', (req, res) => {
  res.status(404).send('Not found');
});
