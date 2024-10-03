const express=require("express")
require('./config/connect')

const fleureApi=require('./routes/fleure')
const ContactApi=require('./routes/contact')
const CommandeApi=require('./routes/commande')
const UserApi=require("./routes/user")

const cors=require("cors")
const app=express()

app.use(cors())
app.use(express.json())

app.use("/fleure",fleureApi);
app.use("/contact",ContactApi);
app.use("/commande",CommandeApi);
app.use("/user",UserApi)
app.use("/getimage", express.static('./uploads'));


app.listen(3000, (res,req)=>{
    console.log("server work")
})