'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PostCategories', {
        postId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          references: {
            model: 'BlogPosts',
            key: 'id',
          },
        },

        categoryId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          references: {
            model: 'Categories',
            key: 'id',
          },
        },
      },
      {
        timestamps: false
      }
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('PostCategories');
  },
};