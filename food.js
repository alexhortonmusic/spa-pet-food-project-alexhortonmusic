
//---------Containers---------//

var container = document.getElementById('container');
var dogContainer = document.getElementById('dogContainer');
var catContainer = document.getElementById('catContainer');

//----------Functions for event listeners----//

function dogPrint (dogJSON) {
  for (var i = 0; i < dogJSON.dog_brands.length; i++) {
    var dogBrand = dogJSON.dog_brands[i];
    var brandName = dogBrand.name;
    dogContainer.innerHTML += `<h2>${brandName}</h2>`;
    for (var j = 0; j < dogBrand.types.length; j++) {
      var foodTypes = dogBrand.types[j];
      var qualityType = foodTypes.type;
      dogContainer.innerHTML += `<p class="qualityType">${qualityType}</p>`;
      for (var k = 0; k < foodTypes.volumes.length; k++) {
        var foodVolumes = foodTypes.volumes[k];
        var volumeName = foodVolumes.name;
        var volumePrice = foodVolumes.price;
        dogContainer.innerHTML += `
          <p>Bag Size:</p>
          <p>${volumeName}: $${volumePrice}</p>
        `;
      };   
    };
  };
};

function executeCodeWhenDogLoads () {
  var dogFood = JSON.parse(event.target.responseText);
  console.log("dogFood", dogFood); 
  dogPrint(dogFood);
};
  

function catPrint (catJSON) {
  for (var i = 0; i < catJSON.cat_brands.length; i++) {
    var catBrand = catJSON.cat_brands[i];
    var brandName = catBrand.name;
    var catBreeds = catBrand.breeds;
    catContainer.innerHTML += `<h2>${brandName}</h2>`;
    catContainer.innerHTML += `<h3>Suggested for these breeds:<br>${catBreeds}</h3>`;
    for (var j = 0; j < catBrand.types.length; j++) {
      var foodTypes = catBrand.types[j];
      var qualityType = foodTypes.type;
      catContainer.innerHTML += `<p class="qualityType">${qualityType}</p>`;
      for (var k = 0; k < foodTypes.volumes.length; k++) {
        var foodVolumes = foodTypes.volumes[k];
        var volumeName = foodVolumes.name;
        var volumePrice = foodVolumes.price;
        catContainer.innerHTML += `
          <p>Bag Size:</p>
          <p>${volumeName}: $${volumePrice}</p>
        `;
      }
    }
  }
}


function executeCodeWhenCatLoads () {
  var catFood = JSON.parse(event.target.responseText);
  console.log("catFood", catFood)
  catPrint(catFood);
};


function executeIfFilesFailToLoad () {
  container.innerHTML = ('error');
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

