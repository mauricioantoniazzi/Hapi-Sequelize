var config = {};
if (process.env.NODE_ENV == 'production') {
    config.db_port = process.env.DB_PORT
    config.db_host = process.env.DB_HOST
    config.db_user = process.env.DB_USER
    config.db_pass = process.env.DB_PASS
    config.db_database = process.env.DB_DATABASE
} else {
    config.db_port = process.env.DB_DEV_PORT
    config.db_host = process.env.DB_DEV_HOST
    config.db_user = process.env.DB_DEV_USER
    config.db_pass = process.env.DB_DEV_PASS
    config.db_database = process.env.DB_DEV_DATABASE
}
module.exports = config;