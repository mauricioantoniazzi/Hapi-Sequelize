'use strict'
import load from 'dotenv/config';
import Hapi from 'hapi';
import Glue from 'glue';
import models from './models/index'

var manifest = require('./config/manifest.js');

var options = {
    relativeTo: __dirname
};

Glue.compose(manifest, options, function (err, server) {
    server.start(function (err) {
        console.log('Server running at: ' + server.info.uri);
    });
});
