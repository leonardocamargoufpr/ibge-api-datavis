const express = require('express');
const control = require('../controllers/controlQueryDataFromIBGE')

const routeQueryDataFromIBGE = express.Router();

routeQueryDataFromIBGE.get('/queryData', async (req, res) => {
    const agregados = req.query.agregados;
    const periodos = req.query.periodos;
    const variaveis = req.query.variaveis;
    const localidades = req.query.localidades;
    // const classificacao = req.query.classificacao;
    
    try{
        // const data = await control.controlQueryDataFromIBGE(agregados, periodos, variaveis, localidades, classificacao);
        const data = await control.controlQueryDataFromIBGE(agregados, periodos, variaveis, localidades);
        res.json(data);
    } catch (err) {
        res.status(500).json({err: 'router: Falha na busca por dados em IBGE.'});
    };
});

module.exports = routeQueryDataFromIBGE;
