export default function getToken(headers){

    if(!headers) throw { type: 'unauthorized', message: 'Invalid token' };

    const authorization = headers['authorization'];
    if(!authorization) throw { type: 'unauthorized', message: 'Invalid token' };

    const splitted = authorization.split(' ');
    const token = splitted[1];

    return token;

}