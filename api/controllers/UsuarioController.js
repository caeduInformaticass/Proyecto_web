/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing Usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	nuevo:function(req, res){
		return res.view('Usuario/nuevo');
	},
	
    create:function(req, res){
        var objeto_usuario = {
            id_usuario: req.param('usuario'),
            password : req.param('password')
        }
        Usuario.create(objeto_usuario)
			.then(function(usuario){
				return res.view('/Usuario/nuevo');
			})
			.catch(function(err){
				console.log(err);
				return res.next(err);
			});
    }
};



