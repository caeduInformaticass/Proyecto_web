/**
 * Usuario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName: 'Usuario',
	// connection: 'somePostgresqlServer',
	autoPK: false,

//	meta: {
//		schemaName : 'Usuario'
//	},
	
	attributes: {
		id_usuario :{
			type: 'string',
			required :true,
			primaryKey: true,
			columnName: 'id_usuario'
		},
		password :{
			type : 'string',
			required: true,
			columnName : 'password'
		},
		estado :{
			type : 'string',
			required : true,
			defaultsTo : 'Y'
		},
		//REFERENCIA
		Datos_Personales:{
		    collection : 'Datos_Personales',
			via : 'id_usuario_Usuario'
		},
        
		Usuario_Rol :{
			collection : 'Usuario_Rol',
			via : 'id_usuario_Usuario'
		},
        Examen :{
            collection: 'Examen',
            via : 'id_usuario_Usuario'
        },
    	Evaluacion: {
			collection : 'Evaluacion',
			via : 'id_usuario_Usuario'
		},

		sesion : {
			collection : 'Sesion',
			via: 'id_usuario_Usuario'
		},
        
//		Pregunta : {
//			collection : 'Pregunta',
//			via: 'id_usuario_Usuario'
//		},
	}
};


