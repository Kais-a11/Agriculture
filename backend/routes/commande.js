const express=require('express')
const router=express.Router()

const Commande=require('../models/commande')

router.post('/ajout', async(req,res)=>{
    try {
        const data=req.body
        const commande=new Commande(data)
        commande.date=new Date()
        await commande.save()
        res.status(200).send(commande)

        
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports=router;