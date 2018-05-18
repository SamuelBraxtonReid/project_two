//create planet list
const planetList = [];

const removePlanet = function(e) {
  //remove planet
  const k = e.srcElement.parentElement.id;
  for (let i = 0; i < planetList.length; i++) {
    if (planetList[i].rKey === k) {
      planetList.splice(i, 1);
      break;
    }
  }
  e.srcElement.parentElement.parentElement.remove();
};

const favorite = function(e) {
  const button = e.srcElement;
  const k = button.parentElement.id;
  for (let i = 0; i < planetList.length; i++) {
    if (planetList[i].rKey === k) {
      if (planetList[i].fave) {
        button.style.background = "#2C3539";
        button.style.color = "white";
        planetList[i].fave = false;
      } else {
        button.style.background = "limegreen";
        button.style.color = "black";
        planetList[i].fave = true;
      }
    }
  }
}

const moveUp = function(e) {
  const element1 = e.srcElement.parentElement.parentElement.parentElement;
  const element2 = element1.previousElementSibling;
  if (element2) {
    const k = e.srcElement.parentElement.parentElement.id;
    for (let i = 0; i < planetList.length; i++) {
      if (planetList[i].rKey === k) {
        const temp = planetList[i];
        planetList[i] = planetList[i-1];
        planetList[i-1] = temp;
        break;
      }
    }
    const temp10 = element1.children[0];
    const temp11 = element1.children[1];
    const temp20 = element2.children[0];
    const temp21 = element2.children[1];
    while (element1.firstChild) {
      element1.removeChild(element1.firstChild);
    }
    while (element2.firstChild) {
      element2.removeChild(element2.firstChild);
    }
    element1.appendChild(temp20);
    element1.appendChild(temp21);
    element2.appendChild(temp10);
    element2.appendChild(temp11);
  }
}

const moveDown = function(e) {
  const element1 = e.srcElement.parentElement.parentElement.parentElement;
  const element2 = element1.nextElementSibling;
  if (element2) {
    const k = e.srcElement.parentElement.parentElement.id;
    for (let i = 0; i < planetList.length; i++) {
      if (planetList[i].rKey === k) {
        const temp = planetList[i];
        planetList[i] = planetList[i+1];
        planetList[i+1] = temp;
        break;
      }
    }
    const temp10 = element1.children[0];
    const temp11 = element1.children[1];
    const temp20 = element2.children[0];
    const temp21 = element2.children[1];
    while (element1.firstChild) {
      element1.removeChild(element1.firstChild);
    }
    while (element2.firstChild) {
      element2.removeChild(element2.firstChild);
    }
    element1.appendChild(temp20);
    element1.appendChild(temp21);
    element2.appendChild(temp10);
    element2.appendChild(temp11);
  }
}

const key = function() {
  //generate unique key
  const options = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789&|";
  let k = "";
  for (let i = 0; i < 16; i++) {
    k += options.charAt(Math.floor(Math.random() * 64));
  }
  return k;
};

const makeButton = function(t, c) {
  const button = document.createElement("button");
  button.textContent = t;
  button.className = c;
  return button;
};

const addPlanet = function(e) {

  //prvent refresh on return
  e.preventDefault();

  //generate unique key
  const k = key();
  
  //get input
  const input = document.querySelector("input");

  //buttons created
  const deleteButton = makeButton("X", "delete");
  const downButton = makeButton("▼", "down");
  const upButton = makeButton("▲", "up");
  const faveButton = makeButton("✓", "fave");

  //create buttons div
  const buttons = document.createElement("div");
  buttons.className = "buttons";
  buttons.id = k;
  buttons.appendChild(deleteButton);

  //create upDown div
  const upDown = document.createElement("div");
  upDown.className = "upDown";
  upDown.appendChild(upButton);
  upDown.appendChild(downButton);

  //more buttons added
  buttons.appendChild(upDown);  
  buttons.appendChild(faveButton);

  //create text span
  const text = document.createElement("span");
  text.textContent = input.value;
  text.contentEditable = true;
  text.className = "text";

  //create entry
  const entry = document.createElement("p");
  entry.className = "planet";
  entry.appendChild(text);
  entry.appendChild(buttons);

  //get planets
  const planets = document.querySelector("#planets");
  planets.appendChild(entry);

  //event listener for fave
  faveButton.addEventListener("click", favorite);

  //event listeners for up and down
  upButton.addEventListener("click", moveUp);
  downButton.addEventListener("click", moveDown);

  //event listener for delete
  deleteButton.addEventListener("click", removePlanet);
  
  //create object
  pe = {
    rKey: k,
    text: input.value,
    fave: false
  } 
 
  //save planet values
  planetList.push(pe);
  
  //empty input
  input.value = "";

};

//listen for form submit
document.querySelector("form").addEventListener("submit", addPlanet);
