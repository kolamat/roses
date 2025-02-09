const images = [
  "RedRoses.jpg",
  "goldrose.jpg",
  "telephone.jpg",
  "quotes.png",
  "quotes1.png",
  "quotes2.png",
  "red1.jpg",
  "red.jpg",
];

const personal = [
  {
    name: "",
    image: "mor1.jpg",
  },
  {
    name: "Mikhail Mordiyyah",
    image: "mor2.jpg",
  },
  {
    name: "",
    image: "mor3.jpg",
  },
];

let body = document.querySelector("body");
body.style.textAlign = "center";
body.style.scrollBehavior = "none";
body.style.height = "100vh";
body.style.background = "#c46666";
body.style.overflowX = "hidden";
body.style.color = "white";
body.style.margin = "0px";
body.style.fontFamily = "'Crimson Text', serif";

let heading = document.createElement("H1");
heading.textContent = "My name is MIKHAIL MORDIYYAH";
heading.style.textDecoration = "line-through";
heading.style.fontSize = "23px";
heading.style.color = "#490e0e";
document.querySelector("body").appendChild(heading);

const imageContainer = document.createElement("div");
imageContainer.id = "imageContainer";
imageContainer.style.display = "flex";
imageContainer.style.flexDirection = "colunm";
imageContainer.style.justifyContent = "space-between";
imageContainer.style.justifyItems = "stretch";
document.querySelector("body").appendChild(imageContainer);

const mainContainer = document.createElement("div");
mainContainer.id = "div";
mainContainer.style.width = "100%";
mainContainer.style.display = "grid";
mainContainer.style.justifyItems = "center";
// mainContainer.style.gridTemplateColumns = "repeat(auto-fill, 380px)";
mainContainer.style.placeItems = "center";
// mainContainer.style.gridTemplateColumns = "380px 380px 380px";
document.querySelector("body").appendChild(mainContainer);

let img1 = document.createElement("img");
img1.src = images[6];
img1.style.borderRadius = "10px 5px";
img1.style.width = "300px";
img1.style.height = "200px";
document.getElementById("div").appendChild(img1);

let pTag = document.createElement("p");
pTag.textContent =
  "As much as I really wanna date JOHNSON at the same I really don’t want to";
pTag.style.fontWeight = "bold";
document.getElementById("div").appendChild(pTag);

let img2 = document.createElement("img");
img2.src = images[7];
img2.style.borderRadius = "10px 5px";
img2.style.width = "350px";
img2.style.height = "310px";
document.getElementById("div").appendChild(img2);

let h2 = document.createElement("H2");
h2.textContent = "But am starting to fall for him";
document.querySelector("body").appendChild(h2);

let buttonContainer = document.createElement("div");
buttonContainer.id = "buttonContainer";
buttonContainer.style.display = "flex";
buttonContainer.style.flexWrap = "wrap";
buttonContainer.style.gap = "20px";
buttonContainer.style.justifyContent = "center";
document.querySelector("body").appendChild(buttonContainer);

let clearButton = document.createElement("img");
clearButton.src = "./reset.jpg";
clearButton.style.width = "100px";
clearButton.style.cursor = "pointer";
clearButton.style.borderRadius = "10px";
// clearButton.style.borderColor = "#00fff0";
clearButton.addEventListener("click", resetButton);
document.getElementById("buttonContainer").appendChild(clearButton);

let button = document.createElement("img");
button.src = images[2];
button.style.textAlign = "center";
button.style.borderRadius = "10px";
button.style.cursor = "pointer";
button.style.width = "100px";
button.style.borderColor = "#00fff0";
button.addEventListener("click", numberParaGraph);
document.getElementById("buttonContainer").appendChild(button);

let rose = document.createElement("img");
rose.src = images[1];
rose.style.borderRadius = "10px";
rose.style.width = "100px";
rose.style.cursor = "pointer";
rose.addEventListener("click", Roses);
document.getElementById("buttonContainer").appendChild(rose);

let paraGraphAnchor = document.createElement("a");
paraGraphAnchor.href = "https://wa.me/+2348150672809";
paraGraphAnchor.id = "paraGraphAnchor";
paraGraphAnchor.style.fontWeight = "bold";
paraGraphAnchor.style.fontSize = "15px";
paraGraphAnchor.style.padding = "15px";
paraGraphAnchor.style.color = "#aae4aa";
paraGraphAnchor.style.width = "auto";
paraGraphAnchor.style.height = "auto";
paraGraphAnchor.style.margin = "15px 0px";
document.querySelector("body").appendChild(paraGraphAnchor);

let buttDiv = document.createElement("div");
buttDiv.href = "https://wa.me/+2348150672809";
buttDiv.id = "buttDiv";
// buttDiv.textContent = "jackson";
buttDiv.style.fontWeight = "bold";
buttDiv.style.fontSize = "15px";
document.querySelector("body").appendChild(buttDiv);

function resetButton() {
  const emptyContent0 = document.getElementById("paraGraphAnchor");
  emptyContent0.textContent = "";

  const emptyContent1 = document.getElementById("buttDiv");
  emptyContent1.textContent = "";
}
function numberParaGraph() {
  let paraGraph = document.getElementById("paraGraphAnchor");
  paraGraph.textContent =
    "You Can Call Me anytime am always ON and active for you (+2348150672809) Either WhatsApp or Mobile Call, am availey";
  paraGraph.style.fontSize = "20px";
  document.querySelector("body").appendChild(paraGraph);
}

function Roses() {
  // This const code makes only the image to display once and not multiple times
  const emptyContent = document.getElementById("paraGraphAnchor");
  emptyContent.textContent = "";

  let redRose = document.createElement("img");
  redRose.src = images[0];
  redRose.style.width = "300px";
  redRose.style.borderRadius = "10px 20px";
  redRose.style.marginTop = "20px";
  document.getElementById("paraGraphAnchor").appendChild(redRose);
}

function Quotes() {
  const button = document.createElement("button");
  button.textContent = "Love Quotes";
  button.style.fontWeight = "bold";
  button.style.fontSize = "15px";
  button.style.padding = "5px 10px";
  button.style.textAlign = "center";
  button.style.borderRadius = "10px";
  button.style.background = "#c46666";
  button.style.color = "#fff";
  button.style.cursor = "pointer";
  button.style.borderColor = "#00fff0";
  button.addEventListener("click", message);
  document.getElementById("buttonContainer").appendChild(button);
}

Quotes();

function message() {
  // THIS AN IF-STATEMENT THAT MAKES THE QUOTES TO DISPLAY ONLY ONCE
  if (document.getElementById("quote0")) {
    return;
  }

  const quote0 = document.createElement("img");
  quote0.id = "quote0";
  quote0.src = images[3];
  quote0.style.width = "300px";
  quote0.style.marginTop = "5px";
  quote0.style.borderRadius = "10px";
  document.getElementById("buttDiv").appendChild(quote0);

  const quote1 = document.createElement("img");
  quote1.id = "quote1";
  quote1.src = images[4];
  quote1.style.width = "300px";
  quote1.style.borderRadius = "10px";
  quote1.style.margin = "10px 5px";
  document.getElementById("buttDiv").appendChild(quote1);

  const quote2 = document.createElement("img");
  quote2.id = "quote2";
  quote2.src = images[5];
  quote2.style.width = "300px";
  quote2.style.borderRadius = "10px";
  document.getElementById("buttDiv").appendChild(quote2);
}

function tryReturn() {
  personal.map((person, index) => {
    const personContainer = document.createElement("div");
    personContainer.id = "personContainer";
    personContainer.style.alignContent = "bottom";

    const paraGraph = document.createElement("p");
    paraGraph.textContent = person.name;
    paraGraph.style.margin = "0px";
    personContainer.appendChild(paraGraph);

    const image = document.createElement("img");
    image.src = person.image;
    image.style.width = "120px";
    image.style.borderRadius = "10px";

    // this if statement is used to give margin to the second image and apply style conditionally

    //THIS IF-STATEMENT IS USED TO CHECK IF THE INDEX IS LESS THAN 2
    if (index === 1) {
      personContainer.style.margin = "20px 2px";
    }
    // THIS IF-STATEMENT IS USED TO GIVE MARGIN TO THE FIRST AND THIRD IMAGE

    // if (person.image === "mor1.jpg" || person.image === "mor3.jpg") {
    //   image.style.margin = "20px 2px";
    // }

    personContainer.appendChild(image);
    imageContainer.appendChild(personContainer);
  });
}

tryReturn();
