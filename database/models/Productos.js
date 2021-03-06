module.exports = function (sequelize, dataTypes){
    const alias = 'Productos';
    const cols = {
        id:{
            autoincrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        
        user_id:{type: dataTypes.INTEGER},
        title:{type: dataTypes.STRING},
        description: {type: dataTypes.STRING},
        price:{type: dataTypes.INTEGER},
        cover: {type: dataTypes.INTEGER},
        created_at:{type: dataTypes.DATE },
        updated_at:{type: dataTypes.DATE},
            
    };
    
    const configs = {
        tableName: 'products',
        timestamps: false
    };

    const Productos = sequelize.define(alias,cols,configs);

    Productos.associate = function(models) {
        Productos.belongsTo(models.User, {
            as: 'owner',
            foreignKey: 'user_id'
        });
        Productos.hasMany(models.Comment, {
            as: 'comments',
            foreignKey: 'product_id'
        })
    }
    return Productos;
}