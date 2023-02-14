const buttons  = Array.from(document.getElementsByClassName("btn"));
const arrowdown = document.getElementsByClassName("fa-arrow-down")[0];

buttons.forEach(btn=>{
  btn.addEventListener("click", (e)=>{
    e.preventDefault();
    scrollWindow();
  });
})

arrowdown.addEventListener("click", scrollWindow)

function scrollWindow(){
  window.scrollBy({
    top: window.innerHeight, 
    behavior: "smooth"
  });
}
