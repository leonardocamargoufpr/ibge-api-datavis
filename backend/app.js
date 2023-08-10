const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routeQueryDataFromIBGE = require('./api/routes/routeQueryDataFromIBGE');

const app = express();
const port = 3000;
const mongoURI = 'mongodb://0.0.0.0:27017/ibge_analytics';
const corsOptions = {
    origin: 'https://servicodados.ibge.gov.br/api',
};

const options = require('../queries/pesquisas');

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', routeQueryDataFromIBGE);

app.get('/api/options', (req, res) => {
    res.json(Object.values(options));
});

app.post('/api/selected-option', (req, res) => {
    const selectedOption = req.body.selectedOption;
    res.json({ selectedOption });
});

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Conexão com o MongoDB estabelecida.');
    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
    });
})
.catch(err => {
    console.log('Erro ao conectar ao MongoDB:', err);
});
