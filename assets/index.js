
//fetch("https://api.rawg.io/api/games/grand-theft-auto-v?key=492ce1c0258e47dc99196d915ab6197c")


// .then(function (response) {
//     return response.json();
//   })

//   .then(function (data) {
//      console.log(data.developers[0].name);
//      console.log(data.genres[0].name);
//      console.log(data.metacritic)
//      console.log(data.publishers[0].name)
//      console.log(data.esrb_rating.name)
//      console.log(data.parent_platforms)
//      console.log(data.released)
    
//  })

var devs = [];
var genres = [];
var mcScore = [];
var gameRel = [];

var genreDiv = $("#genre")
var devDiv = $("#dev")
var metaDiv = $("#meta")
var realeaseDiv = $("#release")




 async function findGame() { 
  var inputId = document.getElementById("gameInput").value;
  var newId = inputId.replaceAll(" ", "-")
  const url = `https://api.rawg.io/api/games/${newId}?search_precise=false&key=492ce1c0258e47dc99196d915ab6197c`;
  const response = await fetch(url); 
  const data = await response.json();
  // console.log(data);
  // console.log(newId);


  var game1Dev = data.developers[0].name
  var game1Genre = data.genres[0].name
  var game1Mc = data.metacritic 
  var gameRelease = data.released

  devs.push(game1Dev);
  genres.push(game1Genre);
  mcScore.push(game1Mc);
  gameRel.push(gameRelease)

  devs.sort();
  genres.sort();
  mcScore.sort();
  gameRel.sort();

  devDiv.append("<br/>" + game1Dev + "<br/>");
  genreDiv.append("<br/>" + game1Genre + "<br/>")
  metaDiv.append("<br/>" + game1Mc + "<br/>")
  realeaseDiv = ("<br/>" + gameRelease + "<br/>")
  
  



  console.log(devs, genres, mcScore, gameRel)




  

//   return game1Dev 
//   return game1Genre 
//   return game1Mc 
//   return gameRelease

  
 
 
  };


// function analyze(){
//   var dev1Count = 0
//    if (devs[1] == devs[2]){
//      dev1Count ++
     


//   }
// }

 
 $("#submit").on("click", findGame)


