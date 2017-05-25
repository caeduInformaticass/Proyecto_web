/**
 * Sesion.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	// connection : 'somePostgresqlServer',
	tableName: 'Sesion',
	autoPK : false,

//	meta :{
//		schemaName : 'Usuario'
//	},

	attributes: {

		pid : {
			type : 'integer',
			required : true ,
			columnName: 'pid'
		},

		fecha :{
			type : 'string',
			required : true,
			columnName: 'fecha',
			primaryKey : true
		},
        // llave foranea
		id_usuario_Usuario :{
			model : 'Usuario'
		}
		
	}
};

