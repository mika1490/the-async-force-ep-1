function reqListener() {
  let testName = JSON.parse(this.responseText);
  document.getElementById('person4Name').innerText = testName.name;
  var test2 = new XMLHttpRequest();
  test2.onload = reqListener2;
  test2.open('GET', testName.homeworld);
  test2.send();
}


var test = new XMLHttpRequest();
test.onload = reqListener;
test.open('GET', 'https://swapi.co/api/people/4/');
test.send();



function reqListener2() {
  let testName2 = JSON.parse(this.responseText);
  document.getElementById('person4HomeWorld').innerText = testName2.name;
}

function reqListener3() {
  let testName3 = JSON.parse(this.responseText);
  document.getElementById('person14Name').innerText = testName3.name;
  let test4 = new XMLHttpRequest();
  test4.onload = reqListener4;
  test4.open('GET', testName3.species)
  test4.send();
}

let test3 = new XMLHttpRequest();
test3.onload = reqListener3;
test3.open('GET', 'https://swapi.co/api/people/14/');
test3.send();

function reqListener4() {
  //console.log(this.responseText);
  let testName4 = JSON.parse(this.responseText);
  document.getElementById('person14Species').innerText = testName4.name;
}

function reqListener5() {
  let testName5 = JSON.parse(this.responseText);
  let movie = testName5.results;
  movie.forEach(function (element) {
  let film = document.createElement('li');
  film.className = 'film';
  document.getElementById('filmList').appendChild(film);
  let filmTitle = document.createElement('h2');
  filmTitle.className = 'filmTitle';
  film.appendChild(filmTitle);
  filmTitle.innerHTML = element.title;
  let planetsTitle = document.createElement('h3'); 
  film.appendChild(planetsTitle);
  planetsTitle.innerHTML = 'Planets' 
  let createFilmPlanets = document.createElement('ul');
  createFilmPlanets.className = 'filmPlanets';
  film.appendChild(createFilmPlanets);

  let filmCreate = element.planets;
    //console.log(filmCreate);
  filmCreate.forEach(function(element) {
    let reqPlanets = new XMLHttpRequest();
    reqPlanets.addEventListener('load', planets);
    reqPlanets.open('GET', element);
    reqPlanets.send();

    function planets() {
      let formatPlanets = JSON.parse(this.response);
      let planetName = formatPlanets.name;

      let createPlanets = document.createElement('li');
      createPlanets.className = 'planet';
      createFilmPlanets.appendChild(createPlanets);
      let createPlanetName = document.createElement('h4');
      createPlanetName.className = 'planetName';
      createPlanets.appendChild(createPlanetName);
      createPlanetName.innerText = planetName;
    }
   })
  
  }) 
}


let test5 = new XMLHttpRequest();
test5.onload = reqListener5;
test5.open('GET', 'https://swapi.co/api/films/');
test5.send();

