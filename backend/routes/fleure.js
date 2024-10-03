const express=require("express")
const router=express.Router();
const Fleur=require('../models/fleure');
const multer=require("multer");


filename='';

const mystorage=multer.diskStorage(
    {
        destination:"./uploads",
        filename:(req,file,redirect)=>{

            let date=Date.now();
            let f1=date + "." + file.mimetype.split('/')[1];
            redirect(null,f1);
            filename = f1;
        }
    }
)

const upload=multer({storage: mystorage});


router.post("/ajout", upload.any('image'), async (req, res) => {
    try {
      const data = req.body;
      const fleur = new Fleur(data);
      fleur.date = new Date();
      fleur.image = filename;
      await fleur.save();
      filename = '';
      res.status(200).send(fleur);
    } catch (err) {
      res.status(400).send(err);
    }
  });

router.get("/all", async (req,res)=>{
    Fleur.find({})
    .then(
        (fleur)=>{
            res.status(200).send(fleur)

        }
    )
    .catch(
        (error)=>{
            res.status(400).send(error)

        }
    )
    
})


router.delete("/supprimer/:id", (req,res)=>{
    let id=req.params.id;
    Fleur.findByIdAndDelete({ _id: id})
    .then(
        (fleure)=>{
            res.status(200).send(fleure)
        }
    )
    .catch(
        (error)=>{
            res.status(400).send(error)
        }
    )
})

router.put("/update/:id", upload.any('image'),(req,res)=>{

    let id=req.params.id;
    let data=req.body;
    
    if(filename.length >0)
    {

        data.image=filename;
    }

    Fleur.findOneAndUpdate({ _id:id}, data)
    .then(
        (fleur)=>{
            filename ='';
            res.status(200).send(fleur)
        }
    )
    .catch(
        (error)=>{
            res.status(400).send(error)
        }
    )

    
})


module.exports=router;