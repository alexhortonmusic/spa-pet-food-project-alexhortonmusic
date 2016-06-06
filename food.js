
//---------Containers---------//

var dogContainer = document.getElementById('dogContainer');
var catContainer = document.getElementById('catContainer')

//--------Food Functions-----//




//----------Functions for event listeners----//

function executeCodeWhenDogLoads () {
  var dogFood = JSON.parse(event.target.responseText);
  console.log("dogFood", dogFood); 
  
  dogFood.dog_brands.forEach(function (foods) {
    dogContainer.innerHTML += `
      <h2>${foods.name}</h2>
        <p><b>${foods.types[0].type}</b></p>
          <p>Bag Size:${foods.types[0].volumes[0]}
        <p><b>${foods.types[1].type}</b></p>
          <p>Bag Size:${foods.types[1].volumes[1].stringify}
    `;
  });


};

function executeCodeWhenCatLoads () {
  var catFood = JSON.parse(event.target.responseText);
  console.log("catFood", catFood)
};

function executeIfFilesFailToLoad () {
  dogContainer.innerHTML = ('error');
};



//----------XHR------------//

// Dog XHR
var dogRequest = new XMLHttpRequest();

dogRequest.addEventListener('load', executeCodeWhenDogLoads);
dogRequest.addEventListener('error', executeIfFilesFailToLoad);

dogRequest.open('GET', 'dogFood.json');

dogRequest.send();


// // Cat XHR
// var catRequest = new XMLHttpRequest();

// catRequest.addEventListener('load', executeCodeWhenCatLoads);
// catRequest.addEventListener('error', executeIfFilesFailToLoad);

// catRequest.open('GET', 'catFood.json');

// catRequest.send();