import express from 'express';
import db from './config/database.js';
import routes from './app/routes/routes.js';

const app = express();

app.use(express.json());
app.use('/api', routes);

db('mongodb://localhost/socialnetwork');
app.listen(4000);