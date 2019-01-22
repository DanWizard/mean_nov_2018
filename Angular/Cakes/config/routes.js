var cakes_controller = require('../controllers/controllers');

module.exports = function(app) {
  app.get('/cakes', cakes_controller.cakes);
  app.get('/cakes/:id', cakes_controller.cake_id);
  app.post('/cakes', cakes_controller.new);
  app.put('/cakes/:id', cakes_controller.cake_update_id);
  app.post('/new/:id', cakes_controller.newComment)
}