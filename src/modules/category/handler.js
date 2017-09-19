import db from './../../models'

export const search = function (request, reply) {

}

export const create = function (request, reply) {
    const category = request.payload.category

    var promises;
    if (!category) {
        promises = [
            new Promise(function (resolve, reject) {
                resolve();
            })];
    }
    if (category) {
        promises = [
            new Promise((resolve, reject) => {
                db.Category
                    .create({
                        categoryGuid: category.guid,
                        name: category.name,
                        type: category.type,
                        userId: request.auth.credentials.id
                    })
                    .then(() => {
                        resolve();
                    })
            })
        ];
    }

    Promise
        .all(promises)
        .then(function () {
            return db.Category
                .findAll({
                    where: { userId: request.auth.credentials.id }
                })

        })
        .then(function (categories) {
            reply({ 'success': true, 'categories': categories });
        })
}

export const update = function (request, reply) {
    const category = request.payload.category

    var promises;

    if (!category) {
        promises = [
            new Promise(function (resolve, reject) {
                resolve();
            })];
    }
    if (category) {
        promises = [
            new Promise(function (resolve, reject) {
                db.Category
                    .update({
                        name: category.name
                    }, {
                        where: { userId: request.auth.credentials.id, categoryGuid: category.guid }
                    })
                    .then(function () {
                        resolve();
                    })

            })
        ]
    }
    Promise
        .all(promises)
        .then(function () {
            reply({ 'success': true });
        })
}

export const del = function (request, reply) {
    const category = request.payload.category
    const debt = request.payload.debt

    var promises;
    if (!category) {
        promises = [
            new Promise(function (resolve, reject) {
                resolve();
            })];
    }
    if (debt) {
        promises = [
            new Promise(function (resolve, reject) {
                db.Debt
                    .update({
                        categoryGuid: null
                    }, {
                        where: { userId: request.auth.credentials.id, guid: debt.guid }
                    })
                    .then(function () {
                        resolve();
                    })


            })
        ]
    }
    if (category) {
        promises = [
            new Promise(function (resolve, reject) {
                db.Category
                    .update({
                        isDeleted: true
                    }, {
                        where: { userId: request.auth.credentials.id, categoryGuid: category.guid }
                    })
                    .then(function () {
                        resolve();
                    })


            })
        ]
    }


    Promise
        .all(promises)
        .then(function () {
            reply({ 'success': true });
        })
}
