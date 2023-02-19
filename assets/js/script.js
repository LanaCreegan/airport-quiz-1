


// Modal

var modal = document.getElementById("instruction-modal");
var btn = document.getElementById("modal-btn");
var shut = document.getElementsByClassName("close");


btn.onclick = function() {
  modal.style.display = "block";
}


shut.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}