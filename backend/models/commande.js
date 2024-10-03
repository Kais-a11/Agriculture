const mongoose =require("mongoose")

const Commande=mongoose.model("Commande",{
    Username:{
        type:String
    },
    PhoneNumber:{
        type:Number
    },
    
    email:{
        type:String
    }
,
fleur:{
    type:String
}
,
    city:{
        type:String
    }
    ,

    Qunatity:{
        type:Number
    }
,
    date:{
        type:String
    }


})


module.exports=Commande