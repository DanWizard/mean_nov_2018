var controller = require('../controllers/controllers');

module.exports = function(app) {
  app.get('/', controller.display);
  app.get('/new/:name', controller.add);
  app.get('/remove/:name', controller.remove);
  app.get('/:name', controller.view);
}
