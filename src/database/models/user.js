const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  displayName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

module.exports = (sequelize) => {
  const User = sequelize.define(
    'User',
    Attributes, 
    {
      tableName: 'Users',
      underscore: true,
      timestamps: false,
    },
  );

  User.associate = (models) => {
    User.hasMany(models.BlogPost,{
      as: 'posts',
      foreignKey: 'userId',
    });
  };

  return User;
};