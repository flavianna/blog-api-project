const Category = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name: DataTypes.STRING,
    }, {
        timestamps: false,
        underscored: true,
        tableName: 'categories'
    })
    return Category;
};
module.exports = Category;