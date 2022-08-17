const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

module.exports = (sequelize) => {
  const Category = sequelize.define(
    'Category',
    Attributes, 
    {
      tableName: 'Categories',
      underscore: true,
      timestamps: false,
    },
  );

  return Category;
};