import axios from 'axios';
import getFullName from './../utils/getFullName.js';

async function getCompanies(quantity = 20){

    const { data } =  await axios.get(`https://fakerapi.it/api/v1/companies?_quantity=${quantity}`);
    return data.data;

}

async function getPersons(quantity = 1){

    const { data } = await axios.get(`https://fakerapi.it/api/v1/persons?_quantity=${quantity}`);
    return data.data;

}

async function getClients(){

    const clients =  await getCompanies();
    const processedClients = [];

    for(const client of clients){

        const persons = await getPersons();
        const personObj = persons[0];

        if(personObj){

            const clientObj = {
                name: client.name,
                email: client.email,
                phone: client.phone,
                person: {
                    fullName: getFullName(personObj.firstname, personObj.lastname)
                }
            }

            processedClients.push(clientObj);

        }

    }

    return {
        total: 20,
        clients: processedClients
    };

}

export {
    getClients
};