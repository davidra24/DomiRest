import { Double } from '../../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/bson';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlaceSchema = new Schema({
	nombre:{
		type: String,
		required: [true, 'nombre de lugar es requerido']
    },
    tipo:{
		type: String,
		required: [true, 'tipo de lugar es requerido']
    },
    imagenes:{
        type: Array,
        required: [true, 'Imagenes de lugar son requeridas']
    },
    email:{
		type: String,
		required: [true, 'email de lugar es requerido']
    },
    descripcion:{
		type: String,
		required: [true, 'descripcion de lugar es requerido']
    },
    telefono:{
		type: String,
		required: [true, 'telefonor de lugar es requerido']
    },
    celular:{
		type: String,
		required: [false, 'celular de lugar no es requerido']
    },
    barrio:{
		type: String,
		required: [true, 'barrio de lugar es requerido']
    },
    direccion:{
		type: String,
		required: [true, 'direccion de lugar es requerido']
    },
    ubicacion:{
		type: String,
		required: [true, 'ubicacion de lugar es requerido']
    },
    habilitado:{
        type: Boolean,
        required: [true, "Habitado de lugar es requerido"]
    },
    calificacion:{
		type: Double,
		required: [false, 'calificacion de no lugar es requerido']
    },
    votos:{
		type: Int32Array,
		required: [false, 'votos de lugar no es requerido']
    },
    ciudad:{
		type: String,
		required: [true, 'barrio de lugar es requerido']
    },
    website:{
		type: String,
		required: [false, 'website de lugar no es requerido']
    },
    matricula:{
		type: String,
		required: [false, 'matricula de lugar no es requerido']
    },
    ubicacionX:{
        type: Double,
        required: [false, "ubicacion x de lugar no es requerida"]
    },
    ubicacionY:{
        type: Double,
        required: [false, "ubicacion y de lugar no es requerida"]
    }
});

const place = mongoose.model('place', PlaceSchema);
module.exports = Place;