// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    //give each product an id that auto increments, no nulls
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    //give each product a name string, no nulls
    product_name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    //price is a decimal type, validation in place to verify the number is a decimal
    price:{
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate:{
        isDecimal: true,
      }
    },
    //set up stock as an integer, default value is 10, validates that it's a number
    stock:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate:{
        isNumeric: true,
      }
    },
    //connect w primary key id in category table
    category_id:{
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
        unique: false
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
