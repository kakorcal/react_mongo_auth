import express from 'express'
let app = express();
let port = process.env.PORT || 3000;

app.get('/*', (req, res)=>{
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>React Mongo Auth</title>
        <meta charset='utf-8'>
        <meta content='width=device-width, initial-scale=1' name='viewport'/>
        <link rel="stylesheet" href="styles.css" />
      </head>
      <body class='container'>
        <h1>Hello</h1>
        <script src='bundle.js'></script>
      </body>
    </html>
  `);
});

app.listen(port, ()=>{
  console.log(`Listening to port ${port}`);
});