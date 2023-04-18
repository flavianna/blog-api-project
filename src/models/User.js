const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
  const User = Sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    }, {
      timestamps: false,
      underscored: true,
      tableName: 'users'
  }, )
  User.associate = (model) => {
      User.hasMany(model.BlogPost, {
          foreignKey: 'user_id', as: 'blog_posts'
      })
  }
  return User;
};