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
			area : req.param('area'),
		}
		Area.create(ob_area)
			.then(function(area){
				console.log(area)
				return res.redirect('Area/registro_area')
			})
			.catch(function(err){
				console.log(err)
				return next(err)
			})
	}
};

