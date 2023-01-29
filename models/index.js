// import models
const coffee = require('./coffee');
const bakery = require('./bakery');
const client = require('./client');
const inquiry = require('./inquiry');

// one clients have many inquiries
client.hasMany(inquiry,{
    foreignKey: 'clientEmail',
});

// inquiry belongs to client
inquiry.belongsTo(client, {
    foreignKey: 'clientEmail',
});

module.exports = {client, inquiry, coffee, bakery};
