import * as clientsServices from './../services/clientsServices.js';

async function getClients(req, res, next){

    const clientsResult =  await clientsServices.getClients();
    res.status(200).send(clientsResult);

}

export {
    getClients
};