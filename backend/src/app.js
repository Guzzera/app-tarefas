import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import { options } from './swaggerOpt';
const espec = swaggerJSDoc(options);

import tarefasRotas from './rotas/TarefaRota';

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(tarefasRotas);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(espec));

export default app;