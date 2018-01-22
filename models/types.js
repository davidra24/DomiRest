var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var typeSchema = new Schema({
    name:{
        type: String,
		required: [true, 'nombre tipo de lugar es requerido']
    },
	description:{
		type: String,
		required: [true, 'descripcion tipo lugar es requerido']
    }
});

const type = mongoose.model('type', typeSchema);
module.exports = type;