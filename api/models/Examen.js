/**
 * Examen.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName : 'Examen',
	autoPK : false,

//	meta :{
//		schemaName : 'Evaluacion'
//	},
	attributes: {
		id_examen :{
			type : 'integer',
			autoIncrement : true,
			columnName : 'id_examen',
			primaryKey:true
		},

		fecha : {
			type : 'string',
			required : true,
			columnName : 'fecha',
			
		},
		estado :{
			type : 'string',
			required : true,
			defaultsTo : 'Y',
			columnName : 'estado'
		},
		// LLave foranea
		id_usuario_Usuario : {
			model : 'Usuario',
			required : true,
		},
		id_area_Area :{
			model: 'Area',
			required: true
		},
		id_complejidad_Complejidad:{
			model : 'Complejidad',
		},
        //REFERENCIAS
		Evaluacion : {
			collection : 'Evaluacion',
			via : 'id_examen_Examen'
		},
		Examen_Pregunta : {
			collection : 'Examen_Pregunta',
			via: 'id_examen_Examen'
		},

//		id_complejidad_Complejidad : {
//			model : 'Complejidad',
//			columnName: 'id_complejidad',
//			required : true
//		},
//		id_area_Area : {
//			model : 'Area',
//			columnName : 'id_area_Area',
//			required : true
//		},
//		// Referencian
	}
};



