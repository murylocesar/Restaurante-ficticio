const jwt = require('jsonwebtoken');

async function creatToken(userId) {
    return await jwt.sign({ id :  userId }, process.env.WEB_TOKEN_SENHA,{ expiresIn:'7d'});
}

async function validateToken(req, res, next) {

  /*  const token = req.headers.authorization;

    if(!token) return res.status(400).send({
        error:'Token não enviado!'
    });

    jwt.verify(token,  process.env.WEB_TOKEN_SENHA , (err,decoded) => {

        if(err) return res.status(400).send({
            error: 'Autenticação recusada!' 
        });
    
    });
*/
    return next();
}

module.exports = {creatToken, validateToken };