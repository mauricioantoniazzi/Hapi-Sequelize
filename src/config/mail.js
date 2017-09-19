var api_key = '';
var domain = '';
var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });
module.exports = mailgun;