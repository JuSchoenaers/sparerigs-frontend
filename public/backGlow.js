document.addEventListener("DOMContentLoaded", () => {
  console.log("in")
    const glow = document.createElement("div");
        glow.classList.add("glow");
        document.body.appendChild(glow);
        const hexBackground = document.getElementById("hexBg");

        document.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
        const size = 50;
        const rect = hexBackground.getBoundingClientRect();
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  ripple.className = "ripple";

  document.body.appendChild(ripple);
  
      ripple.addEventListener("animationend", () => {
    ripple.remove();
      });
    });

    // Update glow position based on mouse movement
    document.addEventListener("mousemove", (e) => {
    glow.style.top = `${e.clientY - 150}px`;
  glow.style.left = `${e.clientX - 150}px`;
    });
  });