const express = require('express');
const port = 4000
const collection = require("./src/conn")
const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');


app.use(express.urlencoded({extended:true}))


app.get('/', (req, res) => {
    
    res.render('index');
});


app.get('/rooms', (req, res) => {
    const roomID = req.query.id;
    res.render('rooms', { roomID });
});

app.get("/register",(req , res)=>(
    res.render("register")
))

app.post("/register",async (req,res)=>{
    const data ={
        username:req.body.username,
        password:req.body.password,
    }

    await collection.insertMany([data])

    res.render("option")

})

app.get("/login",(req , res)=>(
    res.render("login")
))


app.post("/login",async (req,res)=>{
    try{
     const check=await collection.findOne({username:req.body.username})
 
     if (check.password===req.body.password){
         res.render("option")
     }
     else{
         res.send("wrong details")
     }
 
    }catch{
 
     res.send("wrong detials")
 
    }
 })

 app.get("/game2",(req , res)=>(
    res.render("game2")
))

app.get("/cont",(req , res)=>(
    res.render("cont")
))

app.get("/option",(req , res)=>(
    res.render("option")
))

app.get("*",(req , res)=>(
    res.send("Error 404")
))

app.listen(port, () => {
    console.log(`listening to port at ${port}`)
})

module.exports = app;
