'use strict'
module.exports = (Sequelize, DataTypes) => {
    var Category = Sequelize
        .define('Category', {
            categoryGuid: { primaryKey: true, type: DataTypes.STRING },
            name: { type: DataTypes.STRING, allowNull: false },
            type: { type: DataTypes.STRING, allowNull: false },
            uniqueId: { type: DataTypes.INTEGER },
            isDeleted: { type: DataTypes.BOOLEAN, defaultValue: false }
        }, {
            freezeTableName: true,
            //classMethods: {
              //  associate: (models) => {
                //    Category.hasMany(models.Debt, { foreignKey: { name: 'categoryGuid' } });
                  //  Category.belongsTo(models.User, { foreignKey: { name: 'userId', allowNull: false } });
               // }
           // }
        })
    return Category;
}