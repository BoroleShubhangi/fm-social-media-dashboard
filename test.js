var toggle_btn=document.getElementById('toggle_btn');

toggle_btn.addEventListener('click',function myFunction() {
  console.log("click")
  var element = document.getElementById("body");
  element.classList.toggle("toggle_theme");
}
)

