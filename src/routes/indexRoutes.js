import express from "express";

const router= express.router();

router.get("/",async(req,res)=>{
    res.json({msg:"hi"})

});


export default router;