//create planet list
const planetList = [];

const removePlanet = function(e) {
  //remove planet
  const button = e.srcElement;
  for (let i = 0; i < planetList.length; i++) {
    if (planetList[i][1] === button.id) {
      planetList.splice(i, 1);
    }
  }
  e.srcElement.parentElement.remove();
}

const key = function() {
  //generate unique key
  const options = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789&|";
  let k = "";
  for (let i = 0; i < 16; i++) {
    k += options.charAt(Math.floor(Math.random() * 64));
  }
  return k;
}

const addPlanet = function(e) {

  //prvent refresh on return
  e.preventDefault();

  //generate unique key
  const k = key();
  
  //get input
  const input = document.querySelector("input");

  //create button
  const button = document.createElement("button");
  button.textContent = "X";
  button.className = "delete";
  button.id = k;

  //create entry
  const entry = document.createElement("p");
  entry.textContent = input.value;
  entry.className = "planet";
  entry.appendChild(button);

  //get planets
  const planets = document.querySelector("#planets");
  planets.appendChild(entry);

  //event listener for delete
  button.addEventListener("click", removePlanet);
  
  //save planet values
  planetList.push([input.value, k]);
  
  //empty input
  input.value = "";

}

//listen for form submit
document.querySelector("form").addEventListener("submit", addPlanet);
