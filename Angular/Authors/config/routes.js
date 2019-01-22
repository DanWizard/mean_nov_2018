var authors_controller = require('../controllers/controllers');

module.exports = function(app) {
  app.get('/authors', authors_controller.authors);
  app.get('/authors/:id', authors_controller.author_id);
  app.post('/authors', authors_controller.new);
  app.put('/authors/:id', authors_controller.author_update_id);
  app.delete('/authors/:id', authors_controller.delete);
}