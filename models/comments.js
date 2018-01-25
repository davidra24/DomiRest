var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    id_place:{
        type: String,
		required: [true, 'id lugar es requerido']
    },
	id_user:{
		type: String,
		required: [true, 'id usuario es requerido']
    },
    comment:{
        type: String,
		required: [true, 'comentario es requerido']
    }
});

const Comment = mongoose.model('comment', CommentSchema);
module.exports = Comment;