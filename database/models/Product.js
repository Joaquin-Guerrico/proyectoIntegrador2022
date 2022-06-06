module.exports = function(sequelize, dataTypes){

    let alias = 'Product'; 

    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        user_id:{
            type: dataTypes.INTEGER,
        },
        
        title:{
            type: dataTypes.STRING,
        },
        description: {
            type: dataTypes.STRING,
        },
        price:{
            type: dataTypes.INTEGER,
        },
        cover: {
            type: dataTypes.INTEGER,
        },
        created_at:{
            type: dataTypes.DATE,
        },
        updated_at:{
            type: dataTypes.DATE,
        },
    }

    let config = {
        tableName: 'products', 
        timestamps: true, 
        underscored: true,     
    }

   const Product = sequelize.define(alias, cols, config);

//    User.associate = function(models) {
//        User.hasMany(models.Product, {
//         as: 'products',
//         foreignKey: 'user_id',
//        });
//        User.hasMany(models.Comment, {
//            as:'comments',
//            foreignKey: 'user_id',
//        })
//    }

   return Product;
}