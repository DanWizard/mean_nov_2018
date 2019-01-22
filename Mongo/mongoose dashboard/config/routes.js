var controller = require('../controllers/controllers');

module.exports = function(app) {
  app.get('/', controller.display);
  app.get('/mongooses/edit/:id', controller.edit)
  app.post('/mongooses/edit/:id', controller.edited)
  app.get('/mongooses/new', controller.displayNew)
  app.post('/mongooses/new', controller.new)
  app.post('/mongooses/delete/:id', controller.delete)
  app.get('/mongooses/:id', controller.displayOne)
}
