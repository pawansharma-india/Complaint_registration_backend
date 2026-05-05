const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>App Hello Page</title>
    </head>
    <body>
      <h1>app hello page</h1>
    </body>
    </html>
  `);
});

app.get('/hello', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Hello Page</title>
    </head>
    <body>
      <h1>Hello page</h1>
    </body>
    </html>
  `);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});