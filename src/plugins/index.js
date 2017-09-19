import Promise from 'bluebird';
import path from 'path';
const fs = Promise.promisifyAll(require('fs'));

exports.register = (server, options, next) => {
    const dir = path.join(__dirname);
    return fs
        .readdirAsync(dir)
        .filter(function (file) {
            return (file.indexOf(".") !== 0) && (file !== "index.js");
        })
        .map((file) => {
            return {
                register: server.register(require(path.join(dir, file)), (err) => {
                    if (err) {
                        console.error('Failed to load plugin:', err);
                    }
                })
            }
        })
        .then(() => {
            next();
        })
}

exports.register.attributes = {
    name: "plugins"
}