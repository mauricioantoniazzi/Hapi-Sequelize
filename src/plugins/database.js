'use strict'

import db from './../models';

exports.register = (server, options, next) => {
    Object.keys(db).forEach(function (modelName) {
        if ("associate" in db[modelName]) {
            db[modelName].associate(db);
        }
    });
    db.sequelize.sync({ force: false })
    next();
}

exports.register.attributes = {
    name: "databaseSync",
    version: '1.0.0'
}