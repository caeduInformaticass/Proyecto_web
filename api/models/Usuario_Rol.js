/**
 * Usuario_Rol.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    tableName: 'Usuario_Rol',
    autoPK: false,
//    meta :{
//        schemaName : 'Usuario'
//    },
    attributes: {
        id_usuario_Usuario : {
            model : 'Usuario',
            required : true
        },
        id_rol_Rol :{
            model :'Rol',
            required : true
        }
    }
};

