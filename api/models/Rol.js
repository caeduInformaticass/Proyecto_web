/**
 * Rol.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName : 'Rol',
	// connection : 'somePostgresqlServer',
	autoPK : false,

//	meta :{
//		schemaName : 'Usuario'
//	},
//	
	attributes: {
		id_rol : {
			type : 'integer',
			primaryKey : true,
			columnName : 'id_rol',
			autoIncrement : true
		},

		rol :{
			type: 'string',
			required : true,
			columnName : 'rol'
		},

		estado : {
			type : 'string',
			required : true ,
			defaultsTo : 'Y'
		},
        //REFERENCIA
		Usuario_Rol :{
			collection : 'Usuario_Rol',
			via : 'id_rol_Rol'
		},
        Rol_Funcion :{
            collection : 'Rol_Funcion',
            via : 'id_rol_Rol'
        }
        
	}
};

