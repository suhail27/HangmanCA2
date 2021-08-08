//Required modules
const express = require('express');
const cors = require('cors')
const fs = require('fs');
var scoreOfplayers = fs.readFileSync('../backend/storage.json')
var final = JSON.parse(scoreOfplayers)


//Middleware

const app = express()
app.use(cors())

// var playersdetails = {}



//APIs

//To update the JSONfile with the players name
app.post('/submitscore',function(req,res){
    const playername = req.query.playername
    const score = Number(req.query.score)
    final[playername] = score
    var finalscore = JSON.stringify(final,null,2)
    fs.writeFile('../backend/storage.json',finalscore,update);

    function update(){
        console.log('Successfully submitted')
    }
 res.json(finalscore)
    
})


//Retreieve the previous players scores

app.get('/scores',function(req,res){
    res.json(final)
})










app.listen(5050,function(){
    console.log("Yepee listening to port 5050!!")
})