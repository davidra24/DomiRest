import { Types } from 'mongoose';

const express = require('express');
const router = express.Router();
const conString = process.env.DATABASE_URL;
const Places = require('../models/places');
const Comments = require('../models/comments');
const Type = require('../models/types');

//GET
router.get('/places', function(req, res, next) {
	Places.find({}).then(function(places){
		res.send(places);
	});
});

router.get('/places/:id', function(req, res, next) {
	Places.findById(req.params.id).then(function(place){
		res.send(place);
	});

});
router.get('/comments', function(req, res, next) {
	Comments.find({}).then(function(comment){
		res.send(comment);
	});
});

router.get('/comments/:id', function(req, res, next) {
	Comments.findById(req.params.id).then(function(comment){
		res.send(comment);
	});

});
router.get('/type', function(req, res, next) {
	Type.find({}).then(function(type){
		res.send(type);
	});
});

router.get('/type/:id', function(req, res, next) {
	Type.findById(req.params.id).then(function(type){
		res.send(type);
	});

});
//POST
router.post('/places', function(req, res, next) {
	Places.create(req.body).then(function(place){
		res.send(place);
	}).catch(next);
});
router.post('/comments', function(req, res, next) {
	Comments.create(req.body).then(function(comment){
		res.send(comment);
	}).catch(next);
});
router.post('/type', function(req, res, next) {
    Type.create(req.body).then(function(type){
		res.send(type);
	}).catch(next);
});
//DELETE
router.delete('/places/:id', function(req, res, next){
	Places.findByIdAndRemove({_id: req.params.id}).then(function(place){
		 res.send({place});
	});
});
router.delete('/comments/:id', function(req, res, next){
	Comments.findByIdAndRemove({_id: req.params.id}).then(function(comment){
		 res.send({comment});
	});
});
router.delete('/Types/:id', function(req, res, next){
	Type.findByIdAndRemove({_id: req.params.id}).then(function(type){
		 res.send({type});
	});
});
//PUT
router.put('/places/:id', function(req, res, next){
	Places.findByIdAndUpdate({_id:req.params.id}).then(function(place){
		Places.findOne({_id:req.params.id}).then(function(place){
			res.send(place);
		});
	});
});
router.put('/comments/:id', function(req, res, next){
	Comments.findByIdAndUpdate({_id:req.params.id}).then(function(comment){
		Comments.findOne({_id:req.params.id}).then(function(comment){
			res.send(comment);
		});
	});
});
router.put('/type/:id', function(req, res, next){
	Type.findByIdAndUpdate({_id:req.params.id}).then(function(type){
		Type.findOne({_id:req.params.id}).then(function(type){
			res.send(type);
		});
	});
});

module.exports = router;