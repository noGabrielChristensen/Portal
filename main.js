document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const icons = document.querySelectorAll(".sidebar-icon");

  // Track collapsed state
  let collapsed = false;

  // Toggle collapse when clicking the first icon (or a designated button)
  icons[0].addEventListener("click", () => {
    collapsed = !collapsed;
    if (collapsed) {
      sidebar.style.width = "60px"; // smaller collapsed width
      icons.forEach((icon, index) => {
        if (index !== 0) icon.style.display = "none"; // hide all except toggle icon
      });
    } else {
      sidebar.style.width = ""; // reset width
      icons.forEach((icon) => {
        icon.style.display = "flex"; // show all icons
      });
    }
  });

  // Optional: click icons to go to a link
  icons.forEach((icon) => {
    const link = icon.dataset.link;
    if (link) {
      icon.addEventListener("click", () => {
        window.open(link, "_blank");
      });
    }
  });
});
