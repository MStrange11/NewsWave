const myDivElement = document.querySelector(".sidebar");
function show_side() {
  myDivElement.classList.toggle("sidebar-show");
  // console.log("toggle");
}

let stt = setInterval(() => {
  show_side();
  console.log("log");
}, 5000);
