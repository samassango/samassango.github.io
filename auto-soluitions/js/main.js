
function myFunction() {
    var x = document.getElementById("navBarLinks");
    if (x.className === "navbar-links") {
      x.className += " responsive";
    } else {
      x.className = "navbar-links";
    }
  }

//   const images = document.querySelectorAll('.slider img');
//   let currentImageIndex = 0;

//   function startSlider() {
//     setInterval(() => {
//       images[currentImageIndex].classList.remove('active');
//       currentImageIndex = (currentImageIndex + 1) % images.length;
//       images[currentImageIndex].classList.add('active');
//     }, 1000);
//   }

//   startSlider();