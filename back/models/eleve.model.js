// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// let EleveSchema = new Schema ({

//     id : {type:Number, required : true},
//     nom : {type : String, required : true},
//     age : {type : Number, required : true},
// });

// module.exports = mongoose.model('Eleve',  EleveSchema)
const mongoose = require('mongoose');
// var autoIncrement = require("mongodb-autoincrement");

const EleveSchema = mongoose.Schema({
    
    _id: {type:Number, required:true},
    nom: String,
    prenom: String,
    age: Number,
    classe:Number
},
{
    timestamps: true
}
);

// Schema.plugin(autoIncrement.mongoosePlugin);

module.exports = mongoose.model('eleve', EleveSchema);
