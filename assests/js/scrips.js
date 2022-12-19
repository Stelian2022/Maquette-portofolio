console.log("connected");
const modalParent = document.querySelector(".modalParent");
console.dir(modalParent);
const modaleMenu = document.getElementById("modaleMenu");
const portfolioModaleBack = document.querySelector("#portfolioModaleBack");
const portfolioModaleBackImg = document.querySelector(
  "#portfolioModaleBack img"
);

const portfolioModaleBackClose = document.querySelector(
  "#portfolioModaleBackClose"
);
//declarer 8 const pour mes images
const modaleMenuImgs = document.querySelectorAll("#modaleMenu img");

let displayModaleMenu = false;
console.dir(modaleMenu);
//ouverture de ma modale Menu
modalParent.addEventListener("click", function (event) {
  if (displayModaleMenu === false) {
    modaleMenu.style.display = "flex";
    displayModaleMenu = true;
  } else {
    modaleMenu.style.display = "none";
    displayModaleMenu = false;
  }
});
//ouverture modale image portfolio
for (let i = 0; i < modaleMenuImgs.length; i++) {
  const element = modaleMenuImgs[i];
  element.addEventListener("click", function () {
    console.log(element.src);
    if (portfolioModaleBack.style.display === "none") {
      portfolioModaleBack.style.display = "flex";
      portfolioModaleBackImg.src = element.src;
    }
  });

  portfolioModaleBackClose.addEventListener("click", function () {
   
    if (portfolioModaleBack.style.display === "flex") {
      portfolioModaleBack.style.dysplay = "none";
    }
  });
}
