// esto hace colapse de un boton sobre su hermano
var coll = document.querySelectorAll(".close");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
       this.setAttribute("src", "images/arrow-up-long-solid.svg")
    } else {
        content.style.display = "block";
        this.setAttribute("src", "images/arrow-down-long-solid.svg")
    }
  });
}