const shortid=require("shortid");
const URL=require("../models/url");

async function generateNewURL(req,res){
  const body=req.body;
  if(!body.url) res.status(400).json({error:"url is required."});
  const shortID=shortid();
  await URL.create({
    shortId:shortID,
    redirectURL:body.url,
    visitHistory:[],
  })
  return res.render("home",{
    id:shortID,
  });
  
}
async function getAnalytics(req,res){
    const shortId= req.params.shortId;
    const result= await URL.findOne({shortId});
    res.json({
        totalClicks:result.visitHistory.length,
        analytics: result.visitHistory,
    })
}

module.exports={
    generateNewURL,
    getAnalytics,
};