
function scrollbg() {
  var scrollvalue = window.scrollY;
  var navhead = document.getElementById("navhead");
  if (scrollvalue < 45) {
    navhead.classList.remove('sticky');
    document.getElementsByClassName('ntog').style.backgroundColor = "red";

  } else {
    navhead.classList.add('sticky');
  }
  // console.log(scrollvalue);
}
window.addEventListener('scroll', scrollbg);
