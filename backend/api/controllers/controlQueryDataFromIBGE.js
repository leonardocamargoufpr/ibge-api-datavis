const axios = require('axios');
const crypto = require('crypto');
const https = require('https');

// async function controlQueryDataFromIBGE(agregados, periodos, variaveis, localidades, classificacao) {
async function controlQueryDataFromIBGE(agregados, periodos, variaveis, localidades) {

    const options = {
        request: axios.create({
            httpsAgent: new https.Agent({
                secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT,
            }),
        }),
    };
    
    // const endpointUrl = `https://servicodados.ibge.gov.br/api/v3/agregados/${agregados}/periodos/${periodos}/variaveis/${variaveis}?localidades=${localidades}&classificacao=${classificacao}`;
    const endpointUrl = `https://servicodados.ibge.gov.br/api/v3/agregados/${agregados}/periodos/${periodos}/variaveis/${variaveis}?localidades=${localidades}`;

    try {
        const response = await options.request.get(endpointUrl);
        return response.data;
    } catch (error) {
        throw new Error('Erro na requisição:', error.message);
    }
    };

module.exports = {
    controlQueryDataFromIBGE,
};
