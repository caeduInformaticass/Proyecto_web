/**
 * AreaController
 *
 * @description :: Server-side logic for managing Areas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	registro_area : function(required, responses){
		responses.view('Area/registro_area');
	},
	
	create:function(req,res,next){
		var ob_area  = {
			area : req.param('req_area'),
		}
		Area.create(ob_area)
			.then(function(area){
				console.log(area)
				return res.redirect('Pregunta/registro_pregunta')
			})
			.catch(function(err){
				console.log(err)
				return next(err)
			}) 
	},
	nuevo_area: function(req,res,next){
		Area.find({estado:'Y'})
		.then(function(area){
			return res.view('Area/area', {
				area:area
			})
		.catch(function(err){
			return next(err)
		})
		})
	},
	crear_area : function(req, res, next){
		var ob_area = {
			area : req.param('area')
		}
		Area.create(ob_area)
		.then(function(area){
			console.log(area)
			return res.redirect('Area/nuevo_area')
		})
		.catch(function(err){
			return next(err)
		})
	}
};

