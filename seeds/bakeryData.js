const { Bakery } = require('../models');

const bakeryData = [
    {
        bakeryName: "Bagel",
        bakeryNote: "New York-style bagel topped with garlic, salt, poppy and sesame seeds.",
        fileName: "01-bagel.png"
    },
    {
        bakeryName: "Chocolate Chip Cookie",
        bakeryNote: "Semisweet chocolate chunks mixed in a thick, chewy cookie--soft on the inside and crunchy on the outside.",
        fileName: "02-chocolate-cookie.png"
    },
];

const seedBakery = () => Bakery.bulkCreate(bakeryData);

module.exports = seedBakery;