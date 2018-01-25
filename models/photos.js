var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PhotoSchema = new Schema({
    url:{
        type: String,
		required: [true, 'url es requerido']
    },
	id_lugar:{
		type: String,
		required: [true, 'id lugar es requerido']
    }
});

const Photo = mongoose.model('photo', PhotoSchema);
module.exports = Photo;