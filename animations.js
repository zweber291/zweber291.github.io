//Stuff for name animation
var textWrapper = document.querySelector('.name .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

//Animations when page loads
anime.timeline()
  .add({
    targets: '.name .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeInOutExpo",
    duration: 900
  }).add({
    targets: ['.name .letter', '.name .my-picture'],
    opacity: [0,1],
    translateX: [40,0],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 800,
    offset: '-=600',
    delay: (el, i) => 150 + 25 * i
  }).add({
    targets: '.name',
    opacity: 100,
    duration: 100,
    easing: "easeInExpo"
  }).add({
    targets: '#about-me-top-link',
    opacity: [0,1],
    duration: 200,
    easing: "linear"
  }).add({
    targets: '#projects-top-link',
    opacity: [0,1],
    duration: 200,
    easing: "linear"
  }).add({
    targets: '#music-top-link',
    opacity: [0,1],
    duration: 200,
    easing: "linear"
  }).add({
    targets: '#contact-top-link',
    opacity: [0,1],
    duration: 200,
    easing: "linear"
  });

//Link animation
var links = document.getElementsByClassName('links');
function animateLink(target, scale, duration, elasticity) {
  anime.remove(target);
  anime({
    targets: target,
    scale: scale,
    duration: duration,
    elasticity: elasticity
  });
}
function hoverOn() { animateLink(this, 1.2, 800, 400) };
function hoverOff() { animateLink(this, 1.0, 600, 300) };

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('mouseenter', hoverOn, false);
  links[i].addEventListener('mouseleave', hoverOff, false);
}

//Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
  });
});

//Scroll to top button visibility
var scrollButton = document.querySelector('#top-button');
var nameText = document.querySelector('.name');
var checkOpacity = false;
function handleScroll() {
  if (isInViewport(nameText) == false && !checkOpacity) {
    fadeIn();
  }
  if (isInViewport(nameText) == true && checkOpacity) {
    fadeOut();
  }
}

function fadeIn() {
  //Show Button
  anime({
    targets: scrollButton,
    duration: 250,
    opacity: [0,1],
    easing: "linear"
  });
  checkOpacity = true;
}

function fadeOut() {
  //Hide Button
  anime({
    targets: scrollButton,
    duration: 250,
    opacity: [1,0],
    easing: "linear"
  });
  checkOpacity = false;
}

//Checks if an element is in view
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

document.addEventListener("scroll", handleScroll);
