/**
 * Define Global Variables
 *
 */
const pageSections = document.querySelectorAll("section");
const navFregment = document.createDocumentFragment();
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < pageSections.length; i++) {
    const listItem = document.createElement("li");
    const aTag = document.createElement("a");
    aTag.setAttribute("href", `#${pageSections[i].id}`);
    aTag.classList.add("menu__link");
    aTag.textContent = `${pageSections[i].getAttribute("data-nav")}`;
    listItem.appendChild(aTag);
    navFregment.appendChild(listItem);
  }
  navbar__list.appendChild(navFregment);
});

// Add class 'active' to section when near top of viewport

window.addEventListener("scroll", function (event) {
  for (let i = 0; i < pageSections.length; i++) {
    for (let i = 0; i < pageSections.length; i++) {
      if (
        pageSections[i].querySelector("p").getBoundingClientRect().top > 0 &&
        pageSections[i].querySelector("p").getBoundingClientRect().top < 450
      ) {
        pageSections[i].classList.add("your-active-class");
      } else {
        pageSections[i].classList.remove("your-active-class");
      }
    }
    console.log(pageSections[i].querySelector("p").getBoundingClientRect().top);
  }
});

// Scroll to anchor ID using scrollTO event
document.getElementById("navbar__list").addEventListener("click", function (e) {
  e.preventDefault();

  document.querySelector(e.target.getAttribute("href")).scrollIntoView({
    behavior: "smooth",
  });
});

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
