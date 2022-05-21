const mongoose = require('mongoose');
const personSchema = mongoose.Schema({ 
    
    NOM:{
        type:String ,
        required: true,
    },
    PRENOM:{
        type:String ,
        required: true,
    },
    Email:{
        type:String ,
        required: true ,
        unique: true,
    },
    password:{
        type:String ,
        required: true,
    },
   
    role:{
        type:String,
        enum:['etudiant','engseinant','admin'],
        default:'etudiant',
    },
});

module.exports=mongoose.model ('person',personSchema);