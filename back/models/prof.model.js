const mongoose = require('mongoose')
const ProfSchema = mongoose.Schema({
    
    _id: {type:Number, required:true},
    nom: String,
    prenom: String,
    matiere:Object, 
    classeoccuper:Object
},
{
    timestamps: true
}
);

// Schema.plugin(autoIncrement.mongoosePlugin);

module.exports = mongoose.model('prof', ProfSchema);