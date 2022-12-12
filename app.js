const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');
//console.log(date());

const app = express();

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req,res){
    let day = date.getDate();
    res.render("list",{listTitle: day, newListItems: items});
    
});

app.get("/work", function(req,res){
    res.render("list",{listTitle: "Work List", newListItems: workItems});
})

//ALREADY BEING DONE IN THE POST ROUTE OF OUR HOME ROOT
// app.post("/work", function(req,res){
//     let item = req.body.newItem;
//     workItems.push(item);
//     res.redirect("/work");
// })

app.post("/", function(req,res){
    const item = req.body.newItem;
    
    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }
})

app.get("/about", function(req, res){
    res.render("about");
});

app.listen(3000, function(){
    console.log("Server is up and running on port 3000");
})