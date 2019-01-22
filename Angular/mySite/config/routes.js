var restaurants_controller = require('../controllers/controllers');

module.exports = function(app) {
  app.get('/api/restaurants', restaurants_controller.restaurants);
  app.get('/api/restaurants/:id', restaurants_controller.restaurant_id);
  app.post('/api/restaurants', restaurants_controller.new);
  app.put('/api/restaurants/:id', restaurants_controller.restaurant_update_id);
  app.delete('/api/restaurants/:id', restaurants_controller.delete);
  app.post('/new/:id', restaurants_controller.newReview);
}