const axios = require('axios');
const crypto = require('crypto');
const https = require('https');

async function queryDataFromIBGE(agregados, periodos, variaveis, localidades, classificacao) {

    const options = {
        request: axios.create({
            httpsAgent: new https.Agent({
                secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT,
            }),
        }),
    };
    
    const endpointUrl = `https://servicodados.ibge.gov.br/api/v3/agregados/${agregados}/periodos/${periodos}/variaveis/${variaveis}?localidades=${localidades}&classificacao=${classificacao}`;
    
    options.request.get(endpointUrl)
        .then((response) => {
            console.log('Resposta do servidor:', response.data);
        })
        .catch((error) => {
            console.error('Erro na requisição:', error.message);
        });
    };

module.exports = {
    queryDataFromIBGE,
};
