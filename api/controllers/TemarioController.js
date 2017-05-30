/**
 * TemarioController
 *
 * @description :: Server-side logic for managing Temarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	nuevo_temario : function(req, res, next){
		Area.find({estado: 'Y'})
			.then(function(area){
				Temario.find({estado:'Y'}).populate('id_area_Area')
				.then(function(temario){
					console.log(temario)
					return res.view('Temario/temario', {
						area : area,
						temario : temario
					})
				})
				.catch(function(err){
					return next(err)
				})
			})
			.catch(function(err){
				console.log(err);
				return next(err);
			});
	},
	crear_temario : function(req, res, next){
		var ob_temario = {
			temario : req.param('temario'),
			id_area_Area : req.param('id_area')
		}
		Temario.create(ob_temario)
		.then(function(temario){
			console.log(temario)
			return res.redirect("/Temario/nuevo_temario")
		})
		.catch(function(err){
			return next(err)
		})
	}
	// registro_temario : function(req, res, next){

	// 	// PROMESAS!!! 
	// 	Area.find({estado: 'Y'})
	// 		.then(function(area){
	// 			// area.forEach(function (a){console.log(a); console.log(a.area); console.log(a.id_area);})
	// 			console.log(area)
	// 			return res.view('Temario/registro_temario',{
	// 				area : area
	// 			});
	// 		})
	// 		.catch(function (err){
	// 			console.log(err);
	// 			return next(err);
	// 		});

	// 	// CALLBACKS
	// 	// Area.find({estado:'Y'}).exec(function despues_buscar(err, area){
	// 		// if (err){
	// 		// 	console.log(err);
	// 		// 	return next(err);
	// 		// }
	// 		// return res.view('Temario/registro_temario',{
	// 		// 	area : area
	// 		// });
	// 	// });
	// },

	// create: function(req, res, next){
	// 	var ob_temario = {
	// 		temario : req.param('temario'),
	// 		descripsion : req.param('descripsion'),
	// 		id_area_Area : req.param('id_area')
	// 	}
	// 	Temario.create(ob_temario)
	// 		.then(function(temario){
	// 			console.log(req.param('id_area'))
	// 			console.log(req.param('temario'))
	// 			console.log(req.param('descripsion'))
	// 			return res.redirect('/Temario/registro_temario');
	// 		})
	// 		.catch(function(err){
	// 			console.log(err);
	// 			return next(err);
	// 		})
	// },
};



