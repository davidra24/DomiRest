var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name:{
    type: String,
		required: [true, 'nombre tipo de lugar es requerido']
    },
	mail:{
		type: String,
		required: [true, 'descripcion tipo lugar es requerido']
  },
  id:{
		type: String,
		required: [true, 'descripcion tipo lugar es requerido']
  },
  password:{
		type: String,
		required: [true, 'descripcion tipo lugar es requerido']
  }
});

const Type = mongoose.model('user', UserSchema);
module.exports = User;
