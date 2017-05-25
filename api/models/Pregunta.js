/**
 * Pregunta.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName : 'Pregunta',
	autoPK : false ,
//	meta  : {
//		schemaName : 'Preguntas'
//	},
	attributes: {
		id_pregunta : {
			type : 'integer',
			autoIncrement :true ,
			required :true ,
			columnName : 'id_pregunta',
			primaryKey : true
		},

		pregunta : {
			type : 'string',
			required : true,
			columnName : 'pregunta'
		},

		descripsion : {
			type : 'string',
			columnName : 'descripsion'
		},

		imagen : {
			type : 'string',
			columnName : 'imagen'
		},

		estado : {
			type : 'estado',
			required : true ,
			defaultsTo : 'Y',
			columnName : 'estado'
		},
		// Referencia 
		Examen_Pregunta : {
			collection : 'Examen_Pregunta',
			via : 'id_pregunta_Pregunta'
		},
		Temario_Pregunta: {
			collection: 'Temario_Pregunta',
			via: 'id_pregunta_Pregunta'
		},
		Pregunta_Respuesta: {
			collection: 'Pregunta_Respuesta',
			via: 'id_pregunta_Pregunta'
		},
		//LLAVE FORANEA
		id_complejidad_Complejidad : {
			model : 'Complejidad',
			required : true
		},
//		Temario_Pregunta : {
//			collection : 'Temario_Pregunta',
//			via : 'id_pregunta_Pregunta'
//		},
//		Pregunta_Respuesta : {
//			collection : 'Pregunta_Respuesta',
//			via : 'id_pregunta_Pregunta'
//		},
//		// llave foranea
//		
//		id_usuario_Usuario :{
//			model : 'Usuario',
//			required : true
//		}
	}
};

