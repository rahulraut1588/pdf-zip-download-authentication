import express from 'express';
import { Routes } from './routes';
import { config } from 'dotenv';
import mongoose from 'mongoose';

config();
const app = express();
const routerProvider : Routes = new Routes();
routerProvider.routes(app);

// Set access control for client requests
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
  next();
});

mongoose.connect('mongodb://localhost:27017/coditaslocal', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  //  console.log('Connected to Database');
});

app.listen(process.env.PORT, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${process.env.PORT}`);
});