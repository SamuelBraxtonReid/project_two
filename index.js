const planetList = [];

const removePlanet = function(e) {
  const button = e.srcElement;
  for (let i = 0; i < planetList.length; i++) {
    if (planetList[i] === button.id) {
      planetList.splice(i, 1);
    }
  }
  e.srcElement.parentElement.remove();
}

function addPlanet(e) {

  e.preventDefault();

  const input = document.querySelector("input");
  const planets = document.querySelector("#planets");

  const entry = document.createElement("p");
  entry.textContent = input.value;
  
  
  const button = document.createElement("button");
  button.textContent = "delete";
  button.className = "delete";
  button.id = input.value;
  console.log(planets);
  planetList.push(input.value);
  button.addEventListener("click", removePlanet);
  console.log(button);

  entry.appendChild(button);

  planets.appendChild(entry);

  input.value = "";

}

document.querySelector("form").addEventListener("submit", addPlanet);
