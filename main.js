//querySelectorAll and loop through each one then apply the events

const card = document.querySelectorAll(".card__inner");

function flipCard() {
  this.classList.toggle('is-flipped');
}

function hoverCard() {
  this.classList.toggle('is-hovered');
}
card.forEach((card) => card.addEventListener("click", flipCard));

//HOVER IS GLITCHY, i think needs something where mouseout happens, check a tutorial

// card.forEach((card) => card.addEventListener("mouseover", hoverCard));

//mouseover is a bit glitchy and how to accomplish this on mobile?

//Mobile: automatic is-flipped toggled after a couple seconds. Maybe this should happen on all devices.

//Text that says 'click one of the cards'

// card.forEach((card) => card.addEventListener("mouseover", flipCard));

//Old code
// const card = document.querySelector('.card__inner');

// card.addEventListener('click', function() {
//   card.classList.toggle('is-flipped');
// });