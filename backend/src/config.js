import { config as dotenv } from 'dotenv';
dotenv();

export const config = {
    host: process.env.BD_HOST || 'localhost',
    user: process.env.BD_USER || 'root',
    password: process.env.BD_PASSWORD || '',
    database: process.DB_DATABASE || 'tarefas_bd',
};