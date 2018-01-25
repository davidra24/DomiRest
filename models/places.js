var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlaceSchema = new Schema({
    email:{
        type: String,
        required: [true, 'email de lugar es requerido']
    },
    descripcion:{
        type: String,
        required: [true, 'descripcion de lugar es requerido']
    },
    barrio:{
        type: String,
        required: [true, 'barrio de lugar es requerido']
    },
    calificacion:{
        type: Number,
        required: [false, 'calificacion de no lugar es requerido']
    },
    votos:{
        type: Number,
        required: [false, 'votos de lugar no es requerido']
    },
    telefono:{
        type: String,
        required: [true, 'telefonor de lugar es requerido']
    },
    celular:{
        type: String,
        required: [false, 'celular de lugar no es requerido']
    },
    direccion:{
        type: String,
        required: [true, 'direccion de lugar es requerido']
    },
    website:{
        type: String,
        required: [false, 'website de lugar no es requerido']
    },
    ubicacion:{
        type: String,
        required: [true, 'ubicacion de lugar es requerido']
    },
    id_tipo_lugar:{
        type: String,
        required: [true, 'id tipo de lugar es requerido']
    },
    persona_email:{
        type: String,
        required: [true, 'persona email requerido']
    },
    id_ciudad:{
        type: String,
        required: [true, 'id ciudad es requerido']
    },
	nombre:{
		type: String,
		required: [true, 'nombre de lugar es requerido']
    },
    matricula:{
		type: String,
		required: [false, 'matricula de lugar no es requerido']
    },
    habilitado:{
        type: Boolean,
        required: [true, "Habitado de lugar es requerido"]
    },
    ubicacionX:{
        type: Number,
        required: [false, "ubicacion x de lugar no es requerida"]
    },
    ubicacionY:{
        type: Number,
        required: [false, "ubicacion y de lugar no es requerida"]
    }
});

const Place = mongoose.model('place', PlaceSchema);
module.exports = Place;