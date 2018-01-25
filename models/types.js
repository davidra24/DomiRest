var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TypeSchema = new Schema({
    name:{
        type: String,
		required: [true, 'nombre tipo de lugar es requerido']
    },
	description:{
		type: String,
		required: [true, 'descripcion tipo lugar es requerido']
    }
});

const Type = mongoose.model('type', TypeSchema);
module.exports = Type;