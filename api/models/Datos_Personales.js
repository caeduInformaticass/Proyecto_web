/**
 * Datos_Personales.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	// connection : 'somePostgresqlServer',
	tableName : 'Datos_Personales',
	autoPK : false,
	
//	meta :{
//		schemaName: 'Usuario'
//	},
	
	attributes: {
		
		nombre : {
			type : 'string',
			columnName : 'nombre'
		},

		apellido_paterno : {
			type : 'string',
			columnName : 'apellido_paterno'
		},

		apellido_materno : {
			type : 'string',
			columnName : 'apellido_materno'
		},

		telefono : {
			type : 'integer',
			columnName : 'telefono'
		},

		correo : {
			type : 'string',
			columnName: 'correo'
		},
		
		id_usuario_Usuario :{
			model : 'Usuario',
			columnName: 'id_usuario_Usuario',
			required : true ,
			primaryKey : true 
		}
	}
};

