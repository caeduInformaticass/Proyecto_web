/**
 * Rol_Funcion.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    tableName : 'Rol_Funcion',
    autoPK : false,
//    meta :{
//        schemaName: 'Usuario'
//    },
    attributes: {
        id_rol_Rol:{
            model : 'Rol',
            required : true
        },
        id_funcion_Funcion :{
            model : 'Funcion',
            required: true
        }
    }
};

