/**
 * Define Global Variables
 *
 */
const pageSections = document.querySelectorAll("section");
const navFregment = document.createDocumentFragment();
const btnFregment = document.createDocumentFragment();

// dyanimic navbar starts when docmuments is loaded
document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < pageSections.length; i++) {
    const listItem = document.createElement("li");
    const aTag = document.createElement("a");
    const expandBtn = document.createElement("button");
    aTag.setAttribute("href", `#${pageSections[i].id}`);
    aTag.classList.add("menu__link");
    aTag.textContent = `${pageSections[i].getAttribute("data-nav")}`;
    expandBtn.setAttribute("id", `${pageSections[i].id}Btn`);
    expandBtn.setAttribute("onclick", `toggleExpand(${pageSections[i].id})`);
    expandBtn.classList.add("collapsibleBtn");

    // expandBtn.textContent = `▼`;
    listItem.appendChild(aTag);

    navFregment.appendChild(listItem);
    pageSections[i].appendChild(expandBtn);
  }
  navbar__list.appendChild(navFregment);
});

// Add class 'active' to section when near top of viewport

window.addEventListener("scroll", function (event) {
  for (let i = 0; i < pageSections.length; i++) {
    for (let i = 0; i < pageSections.length; i++) {
      if (
        // selecting the paragraph elememnt inside the section to be clear when scrolling
        pageSections[i].querySelector("p").getBoundingClientRect().top > 0 &&
        pageSections[i].querySelector("p").getBoundingClientRect().top < 450
      ) {
        pageSections[i].classList.add("your-active-class");
        // active state to your navigation items when a section is in the viewport.
        document
          .querySelector(`a[href='#${pageSections[i].id}']`)
          .classList.add("activeNavLink");
      } else {
        pageSections[i].classList.remove("your-active-class");
        document
          .querySelector(`a[href='#${pageSections[i].id}']`)
          .classList.remove("activeNavLink");
      }
    }
  }
});

// Scroll to anchor ID using scrollTO event
document
  .getElementById("navbar__list")
  .addEventListener("click", function (eve) {
    eve.preventDefault();
    // using event delegation here to inhance the performance
    document.querySelector(eve.target.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });

function toggleExpand(val) {
  val.querySelector(".landing__container").classList.toggle("visiable");
  val.querySelector("button").classList.toggle("expandBtn");
}
