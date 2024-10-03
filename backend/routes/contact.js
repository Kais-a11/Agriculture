const express=require("express")
const router=express.Router()
const Contact=require('../models/contact')

router.post('/ajout', async (req,res)=>{
    
    try {
        const data=req.body
        const contact=new Contact(data)
        contact.date=new Date()
        await contact.save();
        res.status(200).send(contact);
        
    } catch (error) {
        res.status(400).send(error)        
    }
})

module.exports=router;