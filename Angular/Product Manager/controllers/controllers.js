var Product = require('../models/products');

module.exports = {
  products: function(req, res){
    Product.find({}, function(err,products){
      res.json({err: err, products: products});
    });
  },
  new: function(req, res){
    console.log('notcreated')
    console.log(req.body)
    var product = new Product({title: req.body.title, price: req.body.price, url: req.body.url});
    product.save(function(err, product) {
      console.log('created')
      res.json({err: err, product: product});
    });
  },
  delete: function(req, res){
    Product.findByIdAndRemove(req.params.id, function(err,product){
      res.json({err: err, product: product});
    });
  },
  product_id: function(req, res){
    Product.findById(req.params.id, function(err,product){
      res.json({err: err, product: product});
    });
  },
  product_update_id: function(req, res){
    console.log("enterUpdate")
    Product.findOneAndUpdate({ _id:req.params.id},{$set:{title:req.body.title, price:req.body.price, url:req.body.url } }, function(err,product){
      console.log('updated')
      console.log(req.params)
      console.log(req.body)
      res.json({err: err, product: product});
      console.log(err)
    })
  },
}