export default function errorHandler(err, req, res, next){

    console.log('err -----------------', err);
    res.sendStatus(500);

};