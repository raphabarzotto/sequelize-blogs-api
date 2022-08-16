'use strict';

const userModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },

      displayName: DataTypes.STRING,

      email: DataTypes.STRING,

      password: DataTypes.STRING,

      image: DataTypes.STRING,
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