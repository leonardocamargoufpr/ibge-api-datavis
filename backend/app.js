const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routeAgregados = require('./api/routes/routes')

const app = express();
const port = 3000;
const mongoURI = 'mongodb://0.0.0.0:27017/ibge_analytics';
const corsOptions = {
    origin: 'https://servicodados.ibge.gov.br/api',
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', routeAgregados);

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Conexão com o MongoDB estabelecida.')
    })
    .catch(err => {
        console.log('Erro ao conectar ao MongoDB:', err)
    });

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
