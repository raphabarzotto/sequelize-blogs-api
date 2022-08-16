'use strict';

const userModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
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
    },

    {
      tableName: 'Users',
      underscored: false,
      timestamps: false,
    }
  );

  User.associate = (models) => {
    User.hasMany(models.User, {
      as: 'user',
      foreignKey: 'userId',
    });
  };

  return User;
};

module.exports = userModel;