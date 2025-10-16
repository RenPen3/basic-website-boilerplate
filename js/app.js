const mobile = document.querySelector(".mobile");
const ham = document.querySelector(".ham-menu");
const upArrow = document.getElementById("up");
const header = document.querySelector(".header");
const hamLine = document.querySelector(".line");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
import { cards } from "/js/cards.js";
import { skills } from "/js/skills.js";

console.log(upArrow);
ham.addEventListener("click", () => {
  mobile.classList.toggle("show");
  header.style.background = "rgba(240, 240, 240, .8)";
  header.style.opacity = "1";
  line1.classList.toggle("active");
  line2.classList.toggle("active");
  line3.classList.toggle("active");
  ham.classList.toggle("active");
});

upArrow.addEventListener("mouseenter", () => {
  upArrow.style.marginBottom = "2em";
});

/* YEAR LOGIC */
document.addEventListener("DOMContentLoaded", () => {
  const currentYear = new Date().getFullYear();
  const yearElement = document.getElementById("copyright-year");
  if (yearElement) {
    yearElement.textContent = currentYear;
  }
});

/* CARD SECTION */
const cardRender = cards
  .map((card) => {
    return `<div class="portfolio-item">
            <a href="#"
              ><img
                class="portfolio-img"
                src="${card.image}"
                alt="${card.alt}"
            /></a>
            <h3 class="portfolio-title">${card.heading}</h3>
            <p class="portfolio-description">${card.description}</p>
          </div>`;
  })
  .join("");

document.querySelector(".portfolio-grid").innerHTML = cardRender;

/* SKILL SECTION */
const skillsRender = skills
  .map((skill) => {
    return `<div class="skill-icon">
            <i class="${skill.class}"></i>
            <p class="skill-title">${skill.title}</p>
          </div>`;
  })
  .join("");

document.querySelector(".skills-grid").innerHTML = skillsRender;
