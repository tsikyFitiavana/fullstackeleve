
const Eleve = require('../models/eleve.model');
// const Prof = require('../models/prof.model');

const Prof = require('../models/prof.model');

exports.createProf = (req, res) => {
    // Request validation
    if(!req.body.nom || !req.body.prenom) {
        console.log(req);
        console.log(req.body.nom);
        return res.status(400).send({
            message: "prof content can not be empty"
        });
    }

    // Create a prof
    const prof = new Prof({        
        _id: req.body.id,
        nom: req.body.nom || "No prof title", 
        prenom: req.body.prenom,
        matiere: req.body.matiere,
        classeoccuper: req.body.classeoccuper     
    });
    console.log(prof._id);
    console.log("ici l'prof.nom->"+prof.classeoccuper);
    //console.log(_id);
    
    // Save prof in the database
    prof.save()
    .then(data => {
        res.send(data);
        console.log(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the prof."
        });
    });
};

exports.findAllProf = (req, res) => {
    Prof.find()
    .then(profs => {
        res.send(profs);
        console.log('OKAY');
        console.log(profs.matiere);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving profs."
        });
    });
};


//Create new eleve
exports.create = (req, res) => {
    // Request validation
    if(!req.body.nom || !req.body.prenom) {
        console.log(req);
        
        console.log(req.body.nom);
        
        
        return res.status(400).send({
            message: "eleve content can not be empty"
        });
    }
    
    Eleve.find()
    .then(student => {
        let idautom;
        if(student.length == 0){
            idautom = 0
        }else {
            idautom = parseInt(student[student.length - 1]._id) + 1
        }
    
    // Create a eleve
    // const nom = ''
    const eleve = new Eleve({        
        _id: idautom,
        nom: req.body.nom || "No eleve title", 
        prenom: req.body.prenom,
        age: req.body.age,
        classe: req.body.classe        
    });
    
    console.log(eleve);
    console.log("ici l'eleve.nom->"+eleve.nom);
    //console.log(_id);
    
    // Save eleve in the database
    eleve.save()
    .then(data => {
        res.send(data);
        console.log(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the eleve."
        });
    });
})
};

exports.findAll = (req, res) => {    
    Eleve.find()
    .then(eleves => {
    
        res.send(eleves);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving eleves."
        });
    });
};


// Find a single eleve with a eleveId
exports.findOne = (req, res) => {
    Eleve.findById(req.params.eleveId)
    .then(elevechoix => {
        
        let uneleve = []
        uneleve.push(elevechoix)
        //console.log(uneleve) 
        if(!elevechoix) {
            return res.status(404).send({
                message: "eleve not found with id gvcygvhuvu" + req.params.eleveId
            });            
        }
        else{
            
            Prof.find()
            .then(profs=>{
                console.log(profs);
                for(let i=0; i<profs.length; i++){
                    console.log( 'chaque prof'+profs[i])
                    if(profs[i].classeoccuper.classe1 == elevechoix.classe || profs[i].classeoccuper.classe2 == elevechoix.classe){
                        console.log(profs[i]);                
                        uneleve.push(profs[i]);
                    }
                }
                
                //console.log(uneleve);
                res.send(uneleve);
             })
            // .catch(
            //     res.send(uneleve);
            // )
        }
        
        
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "eleve not found with id " + req.params.eleveId
            });                
        }
        return res.status(500).send({
            message: "Something wrong retrieving eleve with id " + req.params.eleveId
        });
    });
};

// // Update a eleve
// exports.update = (req, res) => {
//     // Validate Request
//     if(!req.body) {
//         return res.status(400).send({
//             message: "eleve content can not be empty"
//         });
//     }

//     // Find and update eleve with the request body
//     eleve.findByIdAndUpdate(req.params.eleveId, {
//         _id: req.body.id,
//         nom: req.body.nom || "No eleve title", 
//         prenom: req.body.prenom,
//         age: req.body.age,
//     }, {new: true})
//     .then(eleves => {
//         if(!eleves) {
//             return res.status(404).send({
//                 message: "eleve not found with id " + req.params.eleveId
//             });
//         }
//         res.send(eleves);
//     }).catch(err => {
//         if(err.kind === 'ObjectId') {
//             return res.status(404).send({
//                 message: "eleve not found with id " + req.params.eleveId
//             });                
//         }
//         return res.status(500).send({
//             message: "Something wrong updating note with id " + req.params.eleveId
//         });
//     });
// };


// exports.delete = (req, res) => {
//     eleve.findByIdAndRemove(req.params.eleveId)
//     .then(eleves => {
//         if(!eleves) {
//             return res.status(404).send({
//                 message: "eleve not found with id " + req.params.eleveId
//             });
//         }
//         res.send({message: "eleve deleted successfully!"});
//     }).catch(err => {
//         if(err.kind === 'ObjectId' || err.nom === 'NotFound') {
//             return res.status(404).send({
//                 message: "eleve not found with id " + req.params.eleveId
//             });                
//         }
//         return res.status(500).send({
//             message: "Could not delete eleve with id " + req.params.eleveId
//         });
//     });
// };