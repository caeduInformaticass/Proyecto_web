/**
 * Evaluacion.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	 tableName : 'Evaluacion',
	 autoPK: false,

//	 meta :{
//	 	schemaName : 'Evaluacion'
//	 },
	
	 attributes: {
	 	id_evaluacion : {
	 		type : 'integer',
	 		primaryKey : true,
	 		columnName :'id_evaluacion',
	 		autoIncrement : true
	 	},

	 	calificacion : {
	 		type : 'integer',
	 		columnName : 'calificacion'
	 	},

	 	foto : {
	 		type : 'string',
	 		columnName : 'foto'
	 	},
	 	//Llaves Foraneas
	 	id_usuario_Usuario : {
	 		model : 'Usuario',
            required: true
	 	},

	 	id_examen_Examen: {
	 		model : 'Examen',
            required: true
	 	},
	 	//REFERENCIAS
	 }
};



