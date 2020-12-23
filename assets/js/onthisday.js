const dayData = 
[
  {
     "id": 1,
     "date": "2012-04-05",
     "monthday": "0405",
     "text": "<a target=\"_blank\" href=\"http://en.wikipedia.org/wiki/Banjo#Tenor_banjo\">Banjo<\/a> maestro <a target=\"_blank\" href=\"http://en.wikipedia.org/wiki/Barney_McKenna\">Barney McKenna<\/a> of <a target=\"_blank\" href=\"http://en.wikipedia.org/wiki/The_Dubliners\">The Dubliners<\/a> dies in his home in Howth, Co Dublin. At the age of 72.",
     "image": "http://itsthedubliners.com/images/barney/bm_09.jpg"
  },
  {
     "id": 2,
     "date": "2008-08-16",
     "monthday": "0816",
     "text": "Legendary singer <a target=\"_blank\" href=\"http://en.wikipedia.org/wiki/Ronnie_Drew\">Ronnie Drew<\/a> dies at the age of 73. He was a founder member of <a target=\"_blank\" href=\"http://en.wikipedia.org/wiki/The_Dubliners\">The Dubliners<\/a>. Thanks for the music Ronnie. We love you!",
     "image": "https://upload.wikimedia.org/wikipedia/en/0/0e/Ronnie_Drew_2006.jpg"
  },
  {
     "id": 3,
     "date": "2007-08-30",
     "monthday": "0830",
     "text": "Irish folk music and folklore collector, singer and social historian <a href=\"http://en.wikipedia.org/wiki/Tom_Munnelly\" target=\"_blank\">Tom Munnelly<\/a> dies in Miltown Malbay, Co. Clare, aged 63.",
     "image": "https://img.rasset.ie/00031a8c-488.jpg"
  }
]

import get from "./utils/getElement.js";
import getUser from "./utils/getUser.js";
const img = get(".user-img");
const title = get(".user-title");
const value = get(".user-value");
const btn = get(".btn");
const btns = [...document.querySelectorAll(".icon")];

const showUser = async () => {
  const person = await getUser();
  displayUser(person);
};

function displayUser(person) {
  img.src = person.image;
  value.textContent = person.name;
  title.textContent = `My name is `;
  btns.forEach((btn) => btn.classList.remove("active"));
  btns[0].classList.add("active");

  btns.forEach((btn) => {
    const label = btn.dataset.label;

    // btn.dataset.title = person[label];
    btn.addEventListener("click", () => {
      title.textContent = `My ${label} is `;
      value.textContent = person[label];
      btns.forEach((btn) => btn.classList.remove("active"));
      btn.classList.add("active");
    });
  });
}

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);

