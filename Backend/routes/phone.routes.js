const express = require("express");
const router = express.Router();
const phoneData = require("../data/phones.json")

router.get("/", async (req, res, next) =>{
    try {
        res.json({
            message:"Welcome to our Api",
            phoneData:phoneData
        });
    }catch (error){
        next(error);
        res.status(500).send({error: "Failed to retrieve phones"})
    }
})
router.get("/:id", async (req, res, next) =>{
    try {
        const {id} = req.params;
        res.json({
            phoneData:phoneData[id]
        });
    }catch (error){
        next(error);
    }
})


module.exports = router;