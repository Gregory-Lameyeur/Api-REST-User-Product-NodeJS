import express from 'express';
import dotenv from 'dotenv';
import http from 'http';
import userRouter from './src/routes/userRouter';
import cors from 'cors';
import productRouter from './src/routes/productRouter';

const router = express.Router();
export default router;

const app: express.Express = express();

dotenv.config({ path: __dirname + '/.env' });

const port = process.env.PORT || 8000;

const options: cors.CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: 'http://localhost:3000',
  preflightContinue: true,
};

app.use(cors(options));
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello World');
});

app.use('/user', userRouter);
app.use('/product', productRouter);

app.use(express.static('public'));
app.use(express.json());

const httpServer = http.createServer(app);

httpServer.listen(port, () => {
  console.log(`Server connected on port : ${port}`);
});
