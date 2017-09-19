import mailGun from './../config/mail';

module.exports = function (to, subject, text, cb) {

    var data = {
        from: 'Minhas Dívidas <suporte@minhasdividas.com>',
        to: to,
        subject: subject,
        html: text
    };

    mailGun.messages().send(data, function (error, body) {
        cb(error, body);
    });
}