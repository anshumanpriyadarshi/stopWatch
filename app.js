const express = require("express");
const app = express();
const path = require("path")
const bodyParser = require("body-parser");

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + "/public"));

app.get("/", (req,res)=>{
    res.render(path.join(__dirname) + '/index.ejs');
});


app.get("/viewhistory",(req,res)=>{
    let newobj = JSON.parse(req.query.obj);
    res.render(path.join(__dirname) + '/viewhistory.ejs',{ list : newobj});
    // console.log(req.query.obj); 
    //  console.log(newobj);
})


app.listen(3000,()=>{
    console.log("Started");
});