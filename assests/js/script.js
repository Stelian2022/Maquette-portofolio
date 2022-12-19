//effect bar progress
const bars = document.querySelector(".bar12");
let observer = new IntersectionObserver((entries) => {
  //instructions
  console.dir(entries);
  entries.forEach(
    (element) => {
      if (element.isIntersecting === true) {
        element.target.style.width = element.target.innerText;
      } else {
        element.target.style.width = "0";
      }
    },
    { threshold: [1] }
  );
});

observer.observe(bars);

// bars.forEach((element)=>{
//     observer.observe(element)
// })
