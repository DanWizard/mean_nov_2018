var ninjas_controller = require('../controllers/controllers');

module.exports = function(app) {
	app.get('/ninja', ninjas_controller.createNinja);

}
