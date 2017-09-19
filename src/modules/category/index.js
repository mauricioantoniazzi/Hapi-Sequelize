import * as Controller from './handler'

exports.register = function (server, options, next) {

    server.route({
        path: '/category',
        method: 'GET',
        handler: Controller.search
    })

    server.route({
        path: '/category',
        method: 'POST',
        handler: Controller.create
    })


    server.route({
        path: '/category/delete',
        method: 'PUT',
        handler: Controller.del
    })

    server.route({
        path: '/category',
        method: 'PUT',
        handler: Controller.update
    })
}

exports.register.attributes = {
    pkg: {
        "name": "Category",
        "version": "1.0.0"
    }
}