/**
 * Area.js
 *pp
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName : 'Area',
	autoPK : false,
	// meta :{
	// 	schemaName :'Evaluacion'
	// },
	attributes: {
		id_area : {
			type : 'integer',
			autoIncrement : true,
			primaryKey: true,
			columnName : 'id_area'
		},
		area : {
			type : 'string',
			required : true,
			columnName : 'area'
		},
		estado : {
			type : 'string',
			required :true,
			defaultsTo : 'Y'
		},
		//REFERENCIA
		Examen : {
			collection : 'Examen',
			via : 'id_area_Area'
		},
		Temario :{
			collection : 'Temario',
			via : 'id_area_Area'
		},
	}
};

