setTimeout(function() {
  $(".loader_bg").fadeToggle();
}, 1500);

const menuSlide = () => {
  const menuIcon = document.querySelector(".menu-icon");
  const navLinks = document.querySelector(".nav-links");
  const navLinksInner = document.querySelectorAll(".nav-links li");

  //menu-icon click event
  menuIcon.addEventListener("click", () => {  
    //toggle active class
    navLinks.classList.toggle("menu-active");

    //animate navLinks
    navLinksInner.forEach((li, index) => {
      if (li.style.animation) {
        li.style.animation = "";
      } else {
        li.style.animation = `navLinkAnime 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    //toggle for menu-icon animation
    menuIcon.classList.toggle("span-anime");
  });
};

var nav = document.querySelector("nav");

window.addEventListener("scroll", function() {
  if (window.pageYOffset > 100) {
    nav.classList.add("bg-dark", "shadow");
  } else {
    nav.classList.remove("bg-dark", "shadow");
  }
});

menuSlide();

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

var nav = document.querySelector('nav');

		window.addEventListener('scroll', function () {
			if (window.pageYOffset > 100) {
				nav.classList.add('bg-dark', 'shadow');
			} else {
				nav.classList.remove('bg-dark', 'shadow');
			}
		});

    
function disableRightClick() 
{ 
alert("Sorry, right click is not allowed !!"); 
return false; 
} 
