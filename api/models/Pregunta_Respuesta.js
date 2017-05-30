/**
 * Pregunta_Respuesta.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName : 'Pregunta_Respuesta',
	autoPK : false,
	// meta : {
	// 	schemaName : 'Preguntas'
	// },
	attributes: {
		id_pregunta_respuesta :{
			type : 'integer',
			autoIncrement: true,
			primaryKey:true,

		},
		id_pregunta_Pregunta : {
			model : 'Pregunta',
			required : true
		},
		id_respuesta_Respuesta : {
			model : 'Respuesta',
		}
	}
};







