var controller = require('../controllers/controllers');

module.exports = function(app) {
  app.get('/', controller.display);
  app.post('/', controller.add)
}
