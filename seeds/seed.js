// import sequelize and models
const sequelize = require('../config/connection');
const { client, inquiry } = require('../models');

// import data
const seedCoffee = require('./coffeeData');
const seedBakery = require('./bakeryData');
const seedClient = require('./clientData');
const seedInquiry = require('./inquiryData');

// seedall
const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedCoffee();

    await seedBakery();

    const Clients = await client.bulkCreate(seedClient, {
        individualHooks: true,
        returning: true,    
    });

    for (const Inquiry of seedInquiry){
        await inquiry.create({
            ...Inquiry,
            client_id: Clients[Math.floor(Math.random()*Clients.length)].id,
        });
    };

    process.exit(0);
};

seedAll();