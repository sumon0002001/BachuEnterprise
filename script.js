
var dt = new Date();
document.getElementById("date").innerHTML = dt.toLocaleTimeString();
var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleDateString();

// MDB Lightbox Init


function switchStyle() {
  if (document.getElementById('styleSwitch').checked) {
    document.getElementById('gallery').classList.add("custom");
    document.getElementById('exampleModal').classList.add("custom");
  } else {
    document.getElementById('gallery').classList.remove("custom");
    document.getElementById('exampleModal').classList.remove("custom");
  }
}