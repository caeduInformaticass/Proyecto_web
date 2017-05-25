/**
   
 * Temario_Pregunta.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName : 'Temario_Pregunta',
	autoPK : false,
	// meta :{
	// 	schemaName : 'Preguntas'
	// },
	attributes: {
		id_temario_pregunta:{
			type : 'integer',
			autoIncrement: true,
			primaryKey: true,
			columnName:'id_temario_pregunta'
		},
		id_temario_Temario : {
			model : 'Temario',
			required : true,
		},
		id_pregunta_Pregunta : {
			model : 'Pregunta',
			required : true
		}
	}
	
};

