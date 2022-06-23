module.exports = (sequelize, dataTypes) => {

    let alias = 'User'; 

    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        username:{
            type: dataTypes.STRING,
        },
        
        email:{
            type: dataTypes.STRING,
        },
        password: {
            type: dataTypes.STRING,
        },
        birthday:{
            type: dataTypes.DATE,
        },
        img: {
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
        tableName: 'users', 
        timestamps: true, 
        underscored: true,     
    }

   const User = sequelize.define(alias, cols, config);
   
   User.associate = (models) => {
       User.hasMany(models.Productos, {
        as: 'products',
        foreignKey: 'user_id',
       });
       User.hasMany(models.Comment, {
           as:'comments',
           foreignKey: 'user_id',
       })
   }

   return User;
}