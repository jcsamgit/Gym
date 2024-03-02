const drawer = document.querySelector("#drawer");
const linksContent = document.querySelector(".linksContent");
var num=0

linksContent.style.transition="0s"
drawer.addEventListener("click", () => {
  linksContent.classList.toggle("desplegar");
  drawer.classList.toggle("active");
  linksContent.style.transition="1.5s"
  setTimeout(() => {
      linksContent.style.transition="0s"
  }, 2000);
});
