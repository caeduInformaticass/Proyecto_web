/**
 * Respuesta.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName : 'Respuesta',
	autoPK : false,
	// meta : {
	// 	schemaName : 'Preguntas'
	// },
	attributes: {
		id_respuesta : {
			type : 'integer',
			autoIncrement : true,
			columnName : 'id_respuesta',
			primaryKey : true
		},
		respuesta : {
			type : 'string',
			required: true,
			columnName :'respuesta'
		},
		estado :{
			type : 'string',
			required: true ,
			columnName : 'estado',
			defaultsTo : 'Y'
		},

		//REFERENCIA
		Pregunta_Respuesta : {
			collection : 'Pregunta_Respuesta',
			via : 'id_respuesta_Respuesta'
		}
	}
};

