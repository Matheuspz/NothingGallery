

let slideIndex = [1, 1];
/* Class the members of each slideshow group with different CSS classes */
let slideId = ["mySlides", "mySlidesQDR"];
showSlides(1, 0);
showSlides(1, 1);


function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);

  document.getElementById("img_excluir").style.display = "none";
  document.getElementById("txt_excluir").style.display = "none";
  document.getElementById("img_excluir_qdr").style.display = "none";
  document.getElementById("txt_excluir_qdr").style.display = "none";

  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}