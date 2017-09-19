'use strict'

import jwt from 'hapi-auth-jwt2';
import jsonWebToken from 'jsonwebtoken';
const key = process.env.JWT_CERT;

const register = function register(server, options, next) {
    server.register(jwt, registerAuth);

    function registerAuth(err) {
        if (err) { return next(err); }

        server.auth.strategy('jwt', 'jwt', {
            key: key,
            validateFunc: validate,
            verifyOptions: { algorithms: ['HS256'] },
            errorFunc: (err) => {
                err.message = 'Falha na autenticacao do token'; // optional
                err.schema = 'error';

                return err;
            }
        });

        server.auth.default({
            strategy: 'jwt',
            scope: ['user']
        });

        return next();
    }
};

register.attributes = {
    name: 'auth-wrapper',
    version: '0.0.1'
}

function validate(decoded, request, cb) {
    const token = request.headers.authorization;
    jsonWebToken.verify(token, key, (err, decoded) => {
        if (err) {
            return cb(null, false);
        }
        return cb(null, true);
    });
}

module.exports = register
