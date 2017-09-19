import Sequelize from 'sequelize';
import config from './config.js';
var sequelize = new Sequelize('postgres://'+config.db_user+':'+config.db_pass+'@'+config.db_host+':'+config.db_port+'/'+config.db_database, {
    logging: false
});

module.exports = sequelize;