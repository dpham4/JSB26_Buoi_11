let main = document.getElementById("main");

// let nameItem = "Apple";
// let priceItem = 100;
// let rate = 4;

// let item = (
// `
//     <h1>${nameItem}</h1>
//     <p>${priceItem}</p>
//     <p>${rate}</p>
// `);

// main.innerHTML = item;

let data = [
  {
    image: "image1",
    name: "You Are My Spring",
    vName: "Anh là mùa xuân của em",
  },
  {
    image: "image2",
    name: "Hometown Cha-Cha-Cha",
    vName: "Điệu cha-cha-cha làng biển",
  },
  {
    image: "image3",
    name: "Emily in Paris",
    vName: "Emily ở Paris",
  },
];

//Method 1: For loop

// let newDiv = document.createElement("div");
// for(let i = 0; i < data.length; i++){
//     let movieImage = data[i].image;
//     let movieName = data[i].name;
//     let movieVietnameseName = data[i].vName;

//     let movie = (
//     `
//         <h6 class = "movieName">${movieImage}</h6>
//         <p>${movieName}</p>
//         <p>${movieVietnameseName}</p>
//         <br>
//     `);
//     let newMovie = document.createElement("div");
//     newMovie.innerHTML = movie;
//     newDiv.appendChild(newMovie);
// }

// main.appendChild(newDiv);

// const thisIsAFunction = (pram2) => {

// }

// thisIsAFunction();

// let array1 = [1,2, 3, 4, 5];
// let array2 = array1.map((index) => index * 2) // [2, 4, 6, 8, 10]

//Method 2: Map
let newArray = data.map(
  (index) => `
    <h6 class = "movieName">${index.image}</h6> 
    <p>${index.name}</p>
    <p>${index.vName}</p>
    <br>
`
);
for (let i of newArray) {
  let newDiv = document.createElement("div");
  newDiv.innerHTML = i;
  main.appendChild(newDiv);
}
main.appendChild(newDiv);

//Method 1: For loop
let newDiv = document.createElement("div");
for (let i = 0; i < data.length; i++) {
  let movieImage = data[i].image;
  let movieName = data[i].name;
  let movieVietnameseName = data[i].vName;

  let movie = `
        <h6 class = "movieName">${movieImage}</h6> 
        <p>${movieName}</p>
        <p>${movieVietnameseName}</p>
        <br>
    `;
  let newMovie = document.createElement("div");
  newMovie.innerHTML = movie;
  newDiv.appendChild(newMovie);
}

main.appendChild(newDiv);
