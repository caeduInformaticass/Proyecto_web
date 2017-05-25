/**
 * Funcion.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName: 'Funcion',
	// connection: 'somePostgresqlServer', 
	autoPK : false,

//	meta : {
//		schemaName : 'Usuario'
//	},
	
	attributes: {

		id_funcion :{
			type: 'intenger',
			autoIncrement : true,
			primaryKey : true,
			columnName : 'id_funcion'
		},

		funcion :{
			type : 'string',
			required : true,
			columnName : 'funcion'
		},

		estado : {
			type: 'string',
			required : true,
			defaultsTo : 'Y'
		},
        //REFERENCIAS
        Rol_Funcion : {
            collection : 'Rol_Funcion',
            via : 'id_funcion_Funcion'
        }
	}
};

