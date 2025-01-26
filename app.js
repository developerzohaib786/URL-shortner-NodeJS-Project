const express= require("express");
const path=require("path");
const urlRoute=require("./routes/user");
const {connectToMongodb}=require("./connect.js");
const URL=require("./models/url.js");
const staticRoute=require("./routes/staticRoute")
const app=express();
const PORT=8001;

// middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get("/url/:shortId", async (req,res)=>{
    const shortId= req.params.shortId;
   const result = await URL.findOneAndUpdate({shortId},{$push:{
        visitHistory:{ timestamp:Date.now(),},
    },})
    res.redirect(result.redirectURL);
})
// setting view engine 
app.set("view engine","ejs");
app.set("views","./views");



app.use("/url",urlRoute);
app.use("/", staticRoute);

// connection to mongodb 
connectToMongodb("mongodb://localhost:27017/short-url").then(()=>console.log("Connected to MongoDB"));

app.listen(PORT,()=>   console.log(`Server has started running on port: ${PORT}`));

