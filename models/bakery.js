const { Model, DataTypes } = require('sequelize');
const sequelize  = require('../config/connection');

class bakery extends Model {}

bakery.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
          //   primaryKey: true,
            autoIncrement: true,
        },
        bakeryName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bakeryNote: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'bakery',
    }
);

module.exports = bakery;