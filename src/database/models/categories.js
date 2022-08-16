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
      tableName: 'Categories',
      underscored: false,
      timestamps: false,
    }
  );
  return Category;
};

module.exports = categoriesModel;