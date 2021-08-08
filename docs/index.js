document.addEventListener('DOMContentLoaded',function(){



  var getscoreandname = document.getElementById('submitdetails')
  var getscoresofgame = document.getElementById('getresults')

  getscoreandname.addEventListener('click',function(){
    var playername = document.getElementById('playername').value
    var score = document.getElementById('playerscore').value
    
    fetch(`http://localhost:5050/submitscore?playername=${playername}&score=${score}`,{method:'POST'})
    .then(function(response){
      return response.json()
    })
    .then(function(json){
      if(json.err){
        throw json.err
      }else{
        console.log(json)
      }
    })
  })


  getscoresofgame.addEventListener('click',function(){
    fetch('http://localhost:5050/scores',{method:'GET'})
    .then(function(response){
      return response.json()
    })
    .then(function(json){
      if(json.err){
        throw json.err
      }else{
        const result = json
        const names = Object.keys(result)
        const scorings = Object.values(result)
        //var chart;
        for(var i = 0;i<names.length;i++){
          for(var x = 0;x<scorings.length;x++){
            if(i == x){
              console.log('YES!')
              document.getElementById('playerchart').innerHTML += `<br>` + names[i] + ' ' + scorings[x] + `<br>`
            }
            // document.getElementById('playerchart').innerHTML += names[i] + ' ' + scorings[x] 
          }
        }//console.log(chart)
        // document.getElementById('playerchart').innerHTML = chart
      }
    })
  })



})