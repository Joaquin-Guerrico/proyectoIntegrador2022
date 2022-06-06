module.exports = function(sequelize, dataTypes){

    let alias = 'Comment'; 

    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        product_id:{
            type: dataTypes.INTEGER,
        },
        user_id:{
            type: dataTypes.INTEGER,
        },
        comment:{
            type: dataTypes.STRING,
        },
        created_at:{
            type: dataTypes.DATE,
        },
        updated_at:{
            type: dataTypes.DATE,
        },
    }

    let config = {
        tableName: 'comments', 
        timestamps: true, 
        underscored: true,     
    }

   const Comment = sequelize.define(alias, cols, config);

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

   return Comment;
}