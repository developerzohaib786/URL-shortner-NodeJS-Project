const express=require("express");
const {generateNewURL, getAnalytics}=require("../controllers/url");

const router=express.Router();

router.post("/",generateNewURL);
router.get("/analytics/:shortId", getAnalytics);
module.exports=router;
