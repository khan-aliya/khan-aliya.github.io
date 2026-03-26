// ========================
// Active nav link on scroll
// ========================

const sections = document.querySelectorAll("section[id], footer[id]");
const AllNavLinks = document.querySelectorAll(".nav-links li a");

const observerOptions = {
  root: null,
  rootMargin: "-80px 0px -200px 0px",
  threshold: 0,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const activeId = entry.target.id;

      AllNavLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${activeId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}, observerOptions);

sections.forEach((section) => observer.observe(section));

// ========================
// Hamburger menu
// ========================

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
  const isOpen = hamburger.classList.contains("open");
  hamburger.setAttribute("aria-expanded", isOpen);
});

// Close menu when a nav link is clicked
AllNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
    hamburger.setAttribute("aria-expanded", false);
  });
});

// =========================
// Dynamic copyright year
// =========================

document.querySelector(".contact-footer-note span").textContent =
  new Date().getFullYear();

// ========================
// Profile card flip
// ========================

// const profileCard = document.getElementById("profileCard");

// if (profileCard) {
//   let isLocked = false;

//   profileCard.addEventListener("mouseenter", () => {
//     if (!isLocked) {
//       profileCard.classList.add("flipped");
//     }
//   });

//   profileCard.addEventListener("mouseleave", () => {
//     if (!isLocked) {
//       profileCard.classList.remove("flipped");
//     }
//   });

//   profileCard.addEventListener("click", (e) => {
//     if (e.target.closest(".flip-icons a")) {
//       return;
//     }
//     isLocked = !isLocked;
//     if (isLocked) {
//       profileCard.classList.add("flipped");
//     } else {
//       profileCard.classList.remove("flipped");
//     }
//   });
// }
const profileCard = document.getElementById("profileCard");

if (profileCard) {
  let isLocked = false;
  const isTouch = "ontouchstart" in window;

  if (!isTouch) {
    // Desktop only
    profileCard.addEventListener("mouseenter", () => {
      if (!isLocked) profileCard.classList.add("flipped");
    });

    profileCard.addEventListener("mouseleave", () => {
      if (!isLocked) profileCard.classList.remove("flipped");
    });
  }

  profileCard.addEventListener("click", (e) => {
    if (e.target.closest(".flip-icons a")) return;

    isLocked = !isLocked;
    profileCard.classList.toggle("flipped", isLocked);
  });
}
