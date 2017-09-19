const fs = require('fs');
var tls;
if (process.env.NODE_ENV == 'production') {
    tls = {
        key: fs.readFileSync('/etc/letsencrypt/archive/minhasdividas.com/privkey1.pem'),
        cert: fs.readFileSync('/etc/letsencrypt/archive/minhasdividas.com/cert1.pem'),
        ca: [fs.readFileSync('/etc/letsencrypt/archive/minhasdividas.com/chain1.pem')]
    };
}


const manifest = {
    "connections": [
        {
            tls: tls,
            "routes": {
                "cors": true
            },
            "port": process.env.SERVER_PORT,
            "labels": [
                "api"
            ]
        }
    ],
    "registrations": [
        {
            "plugin": {
                "register": "./plugins"
            }
        },
        {
            "plugin": {
                "register": "./modules"
            }
        }
    ]
};
module.exports = manifest;