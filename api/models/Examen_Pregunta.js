/**
 * Examen_Pregunta.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName : 'Examen_Pregunta',
	autoPK : false ,
//	meta :{
//		schemaName : 'Evaluacion'
//	},
	
	attributes: {
        id_examen_pregunta:{
            type : 'integer',
            autoIncrement : true,
            columnName: 'id_examen_pregunta',
            primaryKey : true
        },
		respuesta_estudiante : {
			type : 'string',
			columnName : 'respuesta_estudiante'
		},
		id_examen_Examen : {
			model : 'Examen',
			required : true,
//            primaryKey: true
		},

		id_pregunta_Pregunta : {
			model :'Pregunta',
			required : true,
//          primaryKey: true
		}
	}
};

