const express=require("express")

const router=express.Router()

const User=require("../models/user")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const multer=require("multer")
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

router.post("/register", upload.any('image'),(req,res)=>{
    data=req.body;
    user = new User(data);
    user.image = filename;
    user.date=new Date();
    const salt=bcrypt.genSaltSync(10);
    user.password=bcrypt.hashSync(data.password, salt)
    user.save()
    .then(
        (saved)=>{
            filename = '';
            res.send(saved);
        }
    )
    .catch(
        (error)=>{
            res.send(error)
        }
    )
    

})

router.post("/login", (req,res)=>{
    let data=req.body;

    User.findOne({ email: data.email})
    .then(
        (user)=>{
            let valid=bcrypt.compareSync(data.password, user.password)
            if(!valid)
            {
                res.status(400).send("email or password invalid")
            }
            else{
                let payload={
                    _id: user._id,
                    email: user.email,
                    fullname: user.username
                }
                let token= jwt.sign(payload, '123456789');
                res.status(200).send({ mytoken: token})
            }
        }
    )
    .catch(
        (error)=>{
            res.status(400).send(error)
        }
    )
    
})

router.post("/ajout",async(req,res)=>{
    try {
        
    } catch (error) {
      res.status(400).send(error)  
    }
})


router.get("/getbyid/:id", (req,res)=>{
    let id=req.params.id;
    User.findById({ _id: id})
    .then(
        (user)=>{
            res.status(200).send(user)
        }
    )
    .catch(
        (error)=>{
            res.status(400).send(error)
        }
    )
    
})


module.exports=router
