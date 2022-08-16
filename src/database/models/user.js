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

// provavelmente vai ter algum associate depois

  return User;
};

module.exports = userModel;