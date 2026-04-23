import express, { Application } from 'express';
import cors from 'cors';

import dilemmaRoutes from './modules/dilemma/dilemma.route'; 

const app: Application = express();

app.use(cors());
app.use(express.json());


app.use('/dilemmas', dilemmaRoutes);

app.get('/', (req, res) => {
  res.send('Servidor de Educação Fiscal Rodando! 🚀');
});

export default app;