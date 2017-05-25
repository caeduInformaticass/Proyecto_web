/**
 * Temario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName : 'Temario',
	autoPK : false,

	// meta : {
	// 	schemaName : 'Preguntas'
	// },
	attributes: {
		id_temario :{
			type : 'integer',
			primaryKey : true,
			columnName :'id_temario',
			autoIncrement : true
		},
		temario : {
			type : 'string',
			required : true,
			columnName : 'temario',
		},
		descripsion : {
			type : 'string',
			columnName : 'descripsion'
		},
		estado : {
			type : 'string',
			required : true,
			defaultsTo : 'Y',
			columnName : 'estado'
		},
		//llave foranea
		id_area_Area : {
			model : 'Area',
		},
		//REFERENCIA
		Temario_Pregunta :{
			collection : 'Temario_Pregunta',
			via : 'id_temario_Temario'
		}
	}
};

