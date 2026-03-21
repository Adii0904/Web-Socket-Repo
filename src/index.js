import express from "express";

const app = express();



app.get("/check" , (req, res)=>{
    res.status(200).json({
        ip : req.ip,
        message:"i am coonected"
    })

})

app.listen(4000, ()=>{
    console.log("server is connected");
})