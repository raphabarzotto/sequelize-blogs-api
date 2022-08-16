'use strict';

const createBlogPostModel = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      title: DataTypes.STRING,

      content: DataTypes.STRING,

      userId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },

      published: DataTypes.DATE,

      updated: DataTypes.DATE,
    },

    {
      tableName: 'BlogPosts',
      createdAt: 'published',
      updatedAt: 'updated',
    }
  );

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
  };

  return BlogPost;
};

module.exports = createBlogPostModel;