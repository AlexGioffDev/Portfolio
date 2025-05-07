let links = document.getElementsByClassName("link");
let contents = document.getElementsByClassName("content-group");

Array.from(links).forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default anchor behavior

    if (this.classList.contains("active")) return;

    // Update active link
    Array.from(links).forEach((l) => l.classList.remove("active"));
    this.classList.add("active");

    const targetId = this.getAttribute("href").replace("#", "");
    const targetContent = document.getElementById(targetId);

    // Fade out current content
    Array.from(contents).forEach((c) => {
      c.classList.remove("content-active");
      c.classList.add("content-out");
    });

    // Wait for animation to finish, then show new content
    setTimeout(() => {
      Array.from(contents).forEach((c) => c.classList.remove("content-out"));
      if (targetContent) {
        targetContent.classList.add("content-active");
      }
    }, 300); // Match this to your CSS transition time
  });
});
