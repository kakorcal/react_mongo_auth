import express from 'express'
import users from './routes/users'
import auth from './routes/auth'
import bodyParser from 'body-parser'
import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config.dev'

let app = express();
let port = process.env.PORT || 3000;
let compiler = webpack(webpackConfig);

app.use(bodyParser.json());
app.use('/api/users', users);
app.use('/api/auth', auth);

app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true,
  stats: {colors: true}
}));

app.use(webpackHotMiddleware(compiler));

app.get('/*', (req, res)=>{
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>React Mongo Auth</title>
        <meta charset='utf-8'>
        <meta content='width=device-width, initial-scale=1' name='viewport'/>
      </head>
      <body>
        <div id='root'></div>
        <script src='bundle.js'></script>
      </body>
    </html>
  `);
});

app.listen(port, ()=>{
  console.log(`Listening to port ${port}`);
});