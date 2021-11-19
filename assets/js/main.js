// const carouselFrame = document.querySelector('.carousel-frame');
// const carouselSlide = document.querySelector('.carousel-slide');
// const carouselImages = getImagesPlusClones();
// const prevBtn = document.querySelector('.carousel-prev');
// const nextBtn = document.querySelector('.carousel-next');
// const navDots = Array.from(document.querySelectorAll('.carousel-dots li'));

// alert("hey");

let mainImage = document.getElementById("mainImg").src;

// let elements = document.querySelectorAll(".cell");
// for (var x = 0; x < elements.length; x++) {
//   elements[x].onclick = function () {
//     // let mimi = document.get("IMG")[0].getAttribute("src")
//     let mimi = document.getElementById("test").getAttribute("src");
//     document.getElementById('mainImg').src= mimi

//     // this.style.fontSize = "20px";
//     alert("Hey!!" + mimi);
//   };
// }

function makeSound(id) {
  switch (id) {
    case "a":
      document.getElementById("mainImg").src =
        "https://netaplants.co.il/wp-content/uploads/2020/03/FOTO-2_800x800-600x600.jpg";
      break;
    case "b":
      document.getElementById("mainImg").src =
        "https://netaplants.co.il/wp-content/uploads/2020/03/FOTO-3_800x800.jpg";
      break;
    case "c":
      document.getElementById("mainImg").src =
        "https://netaplants.co.il/wp-content/uploads/2020/03/FOTO-1_800x800-600x600.jpg";

      break;
    case "d":
      document.getElementById("mainImg").src =
        "https://netaplants.co.il/wp-content/uploads/2020/03/FOTO-9_800x800-600x600.jpg";

      break;
    case "e":
      document.getElementById("mainImg").src =
        "https://netaplants.co.il/wp-content/uploads/2020/03/FOTO-8_800x800-600x600.jpg";

      break;
    case "f":
      document.getElementById("mainImg").src =
        "https://netaplants.co.il/wp-content/uploads/2020/04/FOTO-2._800x800-1-600x600.jpg";

      break;
    case "g":
      document.getElementById("mainImg").src =
        "https://netaplants.co.il/wp-content/uploads/2020/03/FOTO-3_800x800.jpg";
      break;
    case "h":
      document.getElementById("mainImg").src =
        "https://netaplants.co.il/wp-content/uploads/2020/03/FOTO-1_800x800-600x600.jpg";

      break;
    case "i":
      document.getElementById("mainImg").src =
        "https://netaplants.co.il/wp-content/uploads/2020/03/FOTO-9_800x800-600x600.jpg";

      break;
    case "j":
      document.getElementById("mainImg").src =
        "https://netaplants.co.il/wp-content/uploads/2020/03/FOTO-8_800x800-600x600.jpg";

      break;
    case "k":
      document.getElementById("mainImg").src =
        "https://netaplants.co.il/wp-content/uploads/2020/04/FOTO-2._800x800-1-600x600.jpg";

      break;
  }
}
// let imageCounter = 1;

// function getImagesPlusClones() {
//   let images = document.querySelectorAll('.carousel-slide img');

//   const firstClone = images[0].cloneNode();
//   const lastClone = images[images.length - 1].cloneNode();

//   firstClone.className = 'first-clone';
//   lastClone.className = 'last-clone';

//   // we need clones to make an infinite loop effect
//   carouselSlide.append(firstClone);
//   carouselSlide.prepend(lastClone);

//   // must reassign images to include the newly cloned images
//   images = document.querySelectorAll('.carousel-slide img');

//   return images;
// }

// function initializeNavDots() {
//   if (navDots.length) navDots[0].classList.add('active-dot');
// }

// function initializeCarousel() {
//   carouselSlide.style.transform = 'translateX(-100%)';
// }

// function slideForward() {
//   // first limit counter to prevent fast-change bugs
//   if (imageCounter >= carouselImages.length - 1) return;
//   carouselSlide.style.transition = 'transform 400ms';
//   imageCounter++;
//   carouselSlide.style.transform = `translateX(-${100 * imageCounter}%)`;
// }

// function slideBack() {
//   // first limit counter to prevent fast-change bugs
//   if (imageCounter <= 0) return;
//   carouselSlide.style.transition = 'transform 400ms';
//   imageCounter--;
//   carouselSlide.style.transform = `translateX(-${100 * imageCounter}%)`;
// }

// function makeLoop() {
//   // instantly move from clones to originals to produce 'infinite-loop' effect
//   if (carouselImages[imageCounter].classList.contains('last-clone')) {
//     carouselSlide.style.transition = 'none';
//     imageCounter = carouselImages.length - 2;
//     carouselSlide.style.transform = `translateX(-${100 * imageCounter}%)`;
//   }

//   if (carouselImages[imageCounter].classList.contains('first-clone')) {
//     carouselSlide.style.transition = 'none';
//     imageCounter = carouselImages.length - imageCounter;
//     carouselSlide.style.transform = `translateX(-${100 * imageCounter}%)`;
//   }
// }

// function goToImage(e) {
//   carouselSlide.style.transition = 'transform 400ms';
//   imageCounter = 1 + navDots.indexOf(e.target);
//   carouselSlide.style.transform = `translateX(-${100 * imageCounter}%)`;
// }

// function highlightCurrentDot() {
//   navDots.forEach((dot) => {
//     if (navDots.indexOf(dot) === imageCounter - 1) {
//       dot.classList.add('active-dot');
//     } else {
//       dot.classList.remove('active-dot');
//     }
//   });
// }

// function addBtnListeners() {
//   nextBtn.addEventListener('click', slideForward);
//   prevBtn.addEventListener('click', slideBack);
// }

// function addNavDotListeners() {
//   navDots.forEach((dot) => {
//     dot.addEventListener('click', goToImage);
//   });
// }

// function addTransitionListener() {
//   carouselSlide.addEventListener('transitionend', () => {
//     makeLoop();
//     highlightCurrentDot();
//   });
// }

// function autoAdvance() {
//   let play = setInterval(slideForward, 5000);

//   carouselFrame.addEventListener('mouseover', () => {
//     clearInterval(play); // pause when mouse enters carousel
//   });

//   carouselFrame.addEventListener('mouseout', () => {
//     play = setInterval(slideForward, 5000); // resume when mouse leaves carousel
//   });

//   document.addEventListener('visibilitychange', () => {
//     if (document.hidden) {
//       clearInterval(play); // pause when user leaves page
//     } else {
//       play = setInterval(slideForward, 5000); // resume when user returns to page
//     }
//   });
// }

// function buildCarousel() {
//   initializeCarousel();
//   initializeNavDots();
//   addNavDotListeners();
//   addBtnListeners();
//   addTransitionListener();
//   autoAdvance();
// }

// buildCarousel();

// // $(document).ready(function(event) {
// //     var top_header = $(".carousel .fill");

// //     $(window).scroll(function() {
// //       var st = $(this).scrollTop();
// //       top_header.css({
// //         "background-position": "center calc(50% + " + st * 0.8 + "px)"
// //       });
// //     });
// //   });
// (function($) {
//     $(".card").mouseover( function() {
//       $(this).addClass("shadow");
//       $(this).removeClass("shadow-sm");
//     })
//     .mouseout( function() {
//       $(this).addClass("shadow-sm");
//       $(this).removeClass("shadow");
//     });
//   })(jQuery);
