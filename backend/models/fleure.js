const mongoose=require("mongoose")


const Fleur=mongoose.model('Fleure',{
    title:{
        type:String
    },
    description:{
        type:String
    },
    image:{
        type:String
    },
    date:{
        type:String
    },

});

module.exports=Fleur;