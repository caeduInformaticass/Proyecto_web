/**
 * PreguntaController
 *
 * @description :: Server-side logic for managing Preguntas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	registro_pregunta : function(req, res, next){
		// return res.view('Pregunta/registro_pregunta')
		Temario.find({estado:'Y'})
			.then(function(temario){
				Complejidad.find({estado:'Y'})
					.then(function(complejidad){
						Area.find({estado:'Y'})
							.then(function(area){
								res.view('Pregunta/registro_pregunta',{
									temario : temario,
									complejidad : complejidad,
									area:area
								})
							})
							.catch(function(err){
								console.log(err);
								return next(err);
							});
					
					})

			})
			.catch(function(err){
				console.log(err);
				return next(err);
			});
	},
	nuevo_pregunta : function(req, res, next){
		Complejidad.find({estado:'Y'})
		.then(function(complejidad){
			Temario.find({estado:'Y'})
			.then(function(temario){
				return res.view('Pregunta/pregunta', {
					complejidad : complejidad,
					temario : temario
				})
			})
		})
	}
};

