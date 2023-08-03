const express = require('express');
const controllerAgregados = require('../controllers/controller')

const routesAgregados = express.Router();

routesAgregados.get('/queryData', async (req, res) => {
    const agregados = req.query.agregados;
    const periodos = req.query.periodos;
    const variaveis = req.query.variaveis;
    const localidades = req.query.localidades;
    const classificacao = req.query.classificacao;
    
    try{
        const data = await controllerAgregados.queryDataFromIBGE(agregados, periodos, variaveis, localidades, classificacao);
        res.json(data);
    } catch (err) {
        res.status(500).json({err: 'router: Falha na busca por dados em IBGE.'});
    };
});

module.exports = routesAgregados;

// localhost:3030/queryData?agregados=&periodos=&variaveis=&localidades=&classificacao=
