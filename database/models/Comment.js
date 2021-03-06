module.exports = (sequelize, dataTypes)=>{

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

   Comment.associate = (models) => {
    Comment.belongsTo(models.User, {
        as: 'author',
        foreignKey: 'user_id'
    });
    Comment.belongsTo(models.Productos, {
        as: 'user',
        foreignKey: 'product_id'
    })
   }

   return Comment;
}