/**
 * Complejidad.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName : 'Complejidad',
	autoPK : false,
	// meta :{
	// 	schemaName : 'Evaluacion',
	// },
	attributes: {
		id_complejidad : {
			type : 'integer',
			columnName : 'id_complejidad',
			autoIncrement :true ,
			primaryKey : true
		},

		complejidad : {
			type : 'string',
			required : true,
			columnName : 'complejidad'
		},

		estado : {
			type : 'string',
			required : true,
			columnName : 'estado',
		   	defaultsTo : 'Y'
		},
		//REFERENCIA
		Examen : {
			collection :'Examen',
			via : 'id_complejidad_Complejidad'
		},
		Pregunta : {
			collection : 'Pregunta',
			via: 'id_complejidad_Complejidad'
		}
		
		
	}
};

