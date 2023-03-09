CREATE DATABASE IF NOT EXISTS tarefas_bd;

USE tarefas_bd;

CREATE TABLE IF NOT EXISTS tarefas_bd (
    id INT NOT NULL AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    descricao TEXT,
    PRIMARY KEY (id)
);

INSERT INTO tarefas_bd (titulo, descricao) VALUES
    ('tarefa 1', 'descricao'),
    ('tarefa 2', 'descricao 2');
