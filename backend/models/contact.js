const mongoose=require("mongoose")

const Contact=mongoose.model("Contact",{
    username:{
        type:String
    },
    PhoneNumber:{
        type:Number
    },
    email:{
        type:String
    },
    comments:{
        type:String
    },
    date:{
        type:String
    },
})

module.exports=Contact;