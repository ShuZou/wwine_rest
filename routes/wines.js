var Wine = require('../models/wine');
var express = require('express');
var router = express.Router();

router.route('/wines')
  .get(function(req, res) {
	  //retrieve all wines
    Wine.find(function(err, wines) {
      if (err) {
        return res.send(err);
      }
      // reseponse in JSON
      res.json(wines);
    });
  })
  .post(function(req, res) {
	  // create a wine
    var wine = new Wine(req.body);
 
    wine.save(function(err) {
      if (err) {
        return res.send(err);
      }
 
      res.send({ message: 'A Wine Added' });
    });
  });
  
  
  router.route('/wines/:id').put(function(req,res){
    Movie.findOne({ _id: req.params.id }, function(err, wine) {
      if (err) {
        return res.send(err);
      }
 
      for (prop in req.body) {
        wine[prop] = req.body[prop];
      }
 
      // save the movie
      wine.save(function(err) {
        if (err) {
          return res.send(err);
        }
        res.json({ message: 'A Wine updated!' });
      });
    });
  });
  
  router.route('/wines/:id').get(function(req, res) {
    Wine.findOne({ _id: req.params.id}, function(err, wine) {
      if (err) {
        return res.send(err);
      }
 
      res.json(wine);
    });
  });
  
  router.route('/wines/:id').delete(function(req, res) {
    Wine.remove({_id: req.params.id}, function(err, wine) {
      if (err) {
        return res.send(err);
      }
 
      res.json({ message: 'Successfully deleted wine' });
    });
  });
  
  module.exports = router;