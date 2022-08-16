'use strict';

const categoriesModel = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: DataTypes.STRING,
    },
    {
      underscored: false,
      timestamps: false,
      tableName: 'Categories',
    }
  );
  return Category;
};

module.exports = categoriesModel;