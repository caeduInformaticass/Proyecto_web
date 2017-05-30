/**
 * ComplejidadController
 *
 * @description :: Server-side logic for managing Complejidads
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	registro_complejidad : function(req, res, next){
		Area.find({estado:'Y'})
		.then(function(area){
			return res.view('Complejidad/registro_complejidad',{
				area:area
			})
		})
		.catch(function(err){
			console.log(err)
			return next(err)
		})
		// res.view('Complejidad/registro_complejidad');
	},

	create : function(req, res, next){
		var ob_complejidad = {
			complejidad : req.param('complejidad')
		}
		Complejidad.create(ob_complejidad)
			.then(function(complejidad){
				console.log(complejidad);
				return res.redirect('Pregunta/registro_pregunta');
			})
			.catch(function(err){
				console.log(err);
				return next(err);
			});
	},

	ajax: function(req, res, next){
		var ob_complejidad = {
			complejidad : req.param('complejidad')
		}
		Complejidad.create(ob_complejidad)
		.then(function(complejidad){
			console.log(complejidad)
			return res.ok(complejidad)
		})
		.catch(function(err){
			console.log(err)
			return next(err)
		})
	},
	nuevo_complejidad: function(req, res, next){
		Complejidad.find({estado:'Y'})
		.then(function(complejidad){
			return res.view('Complejidad/complejidad', {
				complejidad:complejidad
			})
		})
		.catch(function(err){
			console.log(err)
			return next(err)
		})
	},

	crear_complejidad : function(req, res, next){
		var ob_complejidad = {
			complejidad : req.param('complejidad')
		}
		Complejidad.create(ob_complejidad)
		.then(function(complejidad){
			console.log(complejidad)
			return res.redirect('Complejidad/nuevo_complejidad')
		})
		.catch(function(err){
			return next(err)
		})
	}
};

