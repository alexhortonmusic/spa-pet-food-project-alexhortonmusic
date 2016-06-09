
//---------Containers---------//

var dogContainer = document.getElementById('dogContainer');
var catContainer = document.getElementById('catContainer')

//----------Functions for event listeners----//

function executeCodeWhenDogLoads () {
  var dogFood = JSON.parse(event.target.responseText);
  console.log("dogFood", dogFood); 
  
  // Food function that prints food info to container
  
  dogFood.dog_brands.forEach(function (foods) {
    dogContainer.innerHTML += `
      <div class="dogBox">
        <h2>${foods.name}</h2>
          <p><b>${foods.types[0].type}</b></p>
            <p>Bag Size:</p>
              <p>${foods.types[0].volumes[0].name}: $${foods.types[0].volumes[0].price}</p>
              <p>${foods.types[0].volumes[1].name}: $${foods.types[0].volumes[1].price}</p>
          <p><b>${foods.types[1].type}</b></p>
            <p>Bag Size:</p>
              <p>${foods.types[1].volumes[0].name}: $${foods.types[1].volumes[0].price}</p>
              <p>${foods.types[1].volumes[1].name}: $${foods.types[1].volumes[1].price}</p>
      </div>
    `;
  });
};

function executeCodeWhenCatLoads () {
  var catFood = JSON.parse(event.target.responseText);
  console.log("catFood", catFood)

  // Food function that prints food info to container
  catFood.cat_brands.forEach(function (foods) {
    catContainer.innerHTML += `
      <div class="catBox">
        <h2>${foods.name}</h2>
          <h3>For breeds: ${foods.breeds}</h3>
          <p><b>${foods.types[0].type}</b></p>
            <p>Bag Size:</p>
              <p>${foods.types[0].volumes[0].name}: $${foods.types[0].volumes[0].price}</p>
              <p>${foods.types[0].volumes[1].name}: $${foods.types[0].volumes[1].price}</p>
          <p><b>${foods.types[1].type}</b></p>
            <p>Bag Size:</p>
              <p>${foods.types[1].volumes[0].name}: $${foods.types[1].volumes[0].price}</p>
              <p>${foods.types[1].volumes[1].name}: $${foods.types[1].volumes[1].price}</p>
      </div>
    `;
  });
  
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


// Cat XHR
var catRequest = new XMLHttpRequest();

catRequest.addEventListener('load', executeCodeWhenCatLoads);
catRequest.addEventListener('error', executeIfFilesFailToLoad);

catRequest.open('GET', 'catFood.json');

catRequest.send();

