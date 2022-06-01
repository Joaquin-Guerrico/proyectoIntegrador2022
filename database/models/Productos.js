module.exports = function (sequelize, dataTypes){
    const alias = 'Productos';
    const cols = {
        id:{
            autoincrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        title:{ type: dataTypes.INTEGER},
        description:{ type: dataTypes.INTEGER},
        cover:{ type: dataTypes.INTEGER},
    };
    
    const configs = {
        tableName: 'productos',
        timestamps: false
    };

    const Productos = sequelize.define(alias,cols,configs);
    
    return Productos;
}