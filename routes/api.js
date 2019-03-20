const express = require('express');
const router = express.Router();
const Place = require('../models/places');
const Comment = require('../models/comments');
const Type = require('../models/types');
const Photo = require('../models/photos');
const User = require('../models/users');

//GET
router.get('/places', function(req, res, next) {
	Place.find({}).then(function(places){
		res.send(places);
	});
});

router.get('/places/:id', function(req, res, next) {
	Place.findById(req.params.id).then(function(place){
		res.send(place);
	});

});
router.get('/comments', function(req, res, next) {
	Comment.find({}).then(function(comment){
		res.send(comment);
	});
});

router.get('/comments/:id', function(req, res, next) {
	Comment.findById(req.params.id).then(function(comment){
		res.send(comment);
	});

});
router.get('/types', function(req, res, next) {
	Type.find({}).then(function(type){
		res.send(type);
	});
});

router.get('/types/:id', function(req, res, next) {
	Type.findById(req.params.id).then(function(type){
		res.send(type);
	});

});
router.get('/photos', function(req, res, next) {
	Photo.find({}).then(function(photo){
		res.send(photo);
	});
});

router.get('/photos/:id', function(req, res, next) {
	Photo.findById(req.params.id).then(function(photo){
		res.send(photo);
	});

});

router.get('/users', function(req, res, next) {
	User.find({}).then(function(user){
		res.send(user);
	});
});

router.get('/users/:id', function(req, res, next) {
	User.findById(req.params.id).then(function(user){
		res.send(user);
	});

});
//POST
router.post('/places', function(req, res, next) {
	Place.create(req.body).then(function(place){
		res.send(place);
	}).catch(next);
});
router.post('/comments', function(req, res, next) {
	Comment.create(req.body).then(function(comment){
		res.send(comment);
	}).catch(next);
});
router.post('/types', function(req, res, next) {
    Type.create(req.body).then(function(type){
		res.send(type);
	}).catch(next);
});
router.post('/photos', function(req, res, next) {
    Photo.create(req.body).then(function(photo){
		res.send(photo);
	}).catch(next);
});
router.post('/users', function(req, res, next) {
    User.create(req.body).then(function(user){
		res.send(user);
	}).catch(next);
});

//DELETE
router.delete('/places/:id', function(req, res, next){
	Place.findByIdAndRemove({_id: req.params.id}).then(function(place){
		 res.send({place});
	});
});
router.delete('/comments/:id', function(req, res, next){
	Comment.findByIdAndRemove({_id: req.params.id}).then(function(comment){
		 res.send({comment});
	});
});
router.delete('/types/:id', function(req, res, next){
	Type.findByIdAndRemove({_id: req.params.id}).then(function(type){
		 res.send({type});
	});
});
router.delete('/photos/:id', function(req, res, next){
	Photo.findByIdAndRemove({_id: req.params.id}).then(function(photo){
		 res.send({photo});
	});
});
router.delete('/users/:id', function(req, res, next){
	Users.findByIdAndRemove({_id: req.params.id}).then(function(user){
		 res.send({user});
	});
});

//PUT
router.put('/places/:id', function(req, res, next){
	Place.findByIdAndUpdate({_id:req.params.id}, req.body, {new: true}).then(function(place){
			res.send(place);
	});
});
router.put('/comments/:id', function(req, res, next){
	Comment.findByIdAndUpdate({_id:req.params.id}, req.body, {new: true}).then(function(comment){
			res.send(comment);
	});
});
router.put('/types/:id', function(req, res, next){
	Type.findByIdAndUpdate({_id:req.params.id}, req.body, {new: true}).then(function(type){
			res.send(type);
	});
});
router.put('/photos/:id', function(req, res, next){
	Photo.findByIdAndUpdate({_id:req.params.id}, req.body, {new: true}).then(function(photo){
			res.send(photo);
	});
});
router.put('/users/:id', function(req, res, next){
	User.findByIdAndUpdate({_id:req.params.id}, req.body, {new: true}).then(function(user){
			res.send(user);
	});
});

module.exports = router;
