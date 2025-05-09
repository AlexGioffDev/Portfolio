let links = document.getElementsByClassName("link");
let contents = document.getElementsByClassName("content-group");
const langButtons = document.querySelectorAll(".buttons-container .btn");
const aboutTexts = document.querySelectorAll(".about-texts .content-text");

console.log({ aboutTexts });

Array.from(links).forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    if (this.classList.contains("active")) return;

    Array.from(links).forEach((l) => l.classList.remove("active"));
    this.classList.add("active");

    const targetId = this.getAttribute("href").replace("#", "");
    const targetContent = document.getElementById(targetId);

    Array.from(contents).forEach((c) => {
      c.classList.remove("content-active");
      c.classList.add("content-out");
    });

    setTimeout(() => {
      Array.from(contents).forEach((c) => c.classList.remove("content-out"));
      if (targetContent) {
        targetContent.classList.add("content-active");
      }
    }, 500);
  });
});

langButtons.forEach((element) => {
  element.addEventListener("click", function (e) {
    e.preventDefault();

    if (this.classList.contains("btn-active")) return;

    langButtons.forEach((btn) => btn.classList.remove("btn-active"));

    this.classList.add("btn-active");
    let targetID = this.innerText.toLowerCase();
    const targetContent = document.getElementById(targetID);

    aboutTexts.forEach((about) => {
      if (about.classList.contains("text-active")) {
        about.classList.remove("text-active");
        about.classList.add("text-out");
      }
    });

    setTimeout(() => {
      aboutTexts.forEach((about) => about.classList.remove("text-out"));
      if (targetContent) {
        targetContent.classList.add("text-active");
      }
    }, 500);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const charts = document.querySelectorAll(".donut-chart");

  charts.forEach((chart) => {
    const percent = chart.dataset.percent;
    const fg = chart.querySelector(".donut-fg");
    fg.style.setProperty("--percent", percent);

    // Optional: animate when scrolled into view
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((ent) => {
          if (ent.isIntersecting) {
            fg.classList.add("animate");
            obs.unobserve(ent.target);
          }
        });
      },
      { threshold: 0.6 }
    );

    io.observe(chart);
  });
});
