// Fade-in cards when they scroll into view
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.1,
  });

  document.querySelectorAll(".card").forEach(card => {
    observer.observe(card);
  });

  // Scroll to Top Button
  const scrollBtn = document.createElement("button");
  scrollBtn.innerText = "↑";
  scrollBtn.id = "scrollToTop";
  Object.assign(scrollBtn.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    padding: "10px 14px",
    fontSize: "18px",
    borderRadius: "50%",
    backgroundColor: "#2196f3",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    display: "none",
    boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
    zIndex: "999",
  });

  document.body.appendChild(scrollBtn);

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });
});
// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {

  // 1. Fade-in cards on scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".card, .fade-section").forEach(el => observer.observe(el));

  // 2. Scroll-to-top button
  const scrollBtn = document.createElement("button");
  scrollBtn.innerText = "↑";
  scrollBtn.id = "scrollToTop";
  Object.assign(scrollBtn.style, {
    position: "fixed", bottom: "20px", right: "20px",
    padding: "10px 14px", fontSize: "18px", borderRadius: "50%",
    backgroundColor: "#2196f3", color: "#fff", border: "none",
    cursor: "pointer", display: "none", zIndex: "999",
    boxShadow: "0 6px 16px rgba(0,0,0,0.2)"
  });
  document.body.appendChild(scrollBtn);

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";

    // 3. Navbar shadow on scroll
    const header = document.querySelector("header");
    if (header) {
      header.style.boxShadow = window.scrollY > 50 ? "0 4px 12px rgba(0,0,0,0.15)" : "none";
    }
  });

  // 4. Image lightbox effect (gallery)
  const images = document.querySelectorAll(".gallery img");
  const lightbox = document.createElement("div");
  const img = document.createElement("img");
  lightbox.id = "lightbox";
  Object.assign(lightbox.style, {
    position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
    background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center",
    justifyContent: "center", zIndex: 1000, display: "none"
  });
  img.style.maxWidth = "90%";
  img.style.maxHeight = "80%";
  img.style.borderRadius = "12px";
  img.style.boxShadow = "0 12px 24px rgba(0,0,0,0.4)";
  lightbox.appendChild(img);
  document.body.appendChild(lightbox);

  images.forEach(image => {
    image.addEventListener("click", () => {
      img.src = image.src;
      lightbox.style.display = "flex";
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  // 5. Smooth scroll for anchor links
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  // 1. Fade-in cards on scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".card, .fade-section").forEach(el => observer.observe(el));

  // 2. Scroll-to-top button
  const scrollBtn = document.createElement("button");
  scrollBtn.innerText = "↑";
  scrollBtn.id = "scrollToTop";
  Object.assign(scrollBtn.style, {
    position: "fixed", bottom: "20px", right: "20px",
    padding: "10px 14px", fontSize: "18px", borderRadius: "50%",
    backgroundColor: "#2196f3", color: "#fff", border: "none",
    cursor: "pointer", display: "none", zIndex: "999",
    boxShadow: "0 6px 16px rgba(0,0,0,0.2)"
  });
  document.body.appendChild(scrollBtn);

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";

    // 3. Navbar shadow effect
    const header = document.querySelector("header");
    if (header) {
      header.style.boxShadow = window.scrollY > 50 ? "0 4px 12px rgba(0,0,0,0.15)" : "none";
    }
  });

  // 4. Image Lightbox for gallery
  const images = document.querySelectorAll(".gallery img");
  const lightbox = document.createElement("div");
  const img = document.createElement("img");
  lightbox.id = "lightbox";
  Object.assign(lightbox.style, {
    position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
    background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center",
    justifyContent: "center", zIndex: 1000, display: "none"
  });
  img.style.maxWidth = "90%";
  img.style.maxHeight = "80%";
  img.style.borderRadius = "12px";
  img.style.boxShadow = "0 12px 24px rgba(0,0,0,0.4)";
  lightbox.appendChild(img);
  document.body.appendChild(lightbox);

  images.forEach(image => {
    image.addEventListener("click", () => {
      img.src = image.src;
      lightbox.style.display = "flex";
    });
  });
  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  // 5. Auto Slideshow (for a #slideshow element)
  const slides = document.querySelectorAll("#slideshow img");
  let current = 0;
  if (slides.length) {
    slides.forEach((img, index) => {
      img.style.display = index === 0 ? "block" : "none";
    });
    setInterval(() => {
      slides[current].style.display = "none";
      current = (current + 1) % slides.length;
      slides[current].style.display = "block";
    }, 3000);
  }
});
document.addEventListener("DOMContentLoaded", () => {
  // 21️⃣ Text Glow on Scroll (for h1–h3)
  const glowObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("glow");
    });
  }, { threshold: 0.1 });

  document.querySelectorAll("h1, h2, h3").forEach(h => glowObserver.observe(h));

  // 22️⃣ Grayscale images until scrolled into view
  const imgObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("in-view");
    });
  }, { threshold: 0.2 });

  document.querySelectorAll("img").forEach(img => {
    img.classList.add("gray");
    imgObserver.observe(img);
  });

  // 23️⃣ Random emoji in title every few seconds
  const emojis = ["🌍", "✈️", "📷", "🏝️", "🗺️", "🧳"];
  setInterval(() => {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    document.title = `${randomEmoji} ${document.title.replace(/^[^\s]+/, '').trim()}`;
  }, 4000);

  // 24️⃣ Rain animation effect (canvas)
  const canvas = document.createElement("canvas");
  canvas.id = "rain-canvas";
  document.body.appendChild(canvas);

  Object.assign(canvas.style, {
    position: "fixed", top: 0, left: 0, pointerEvents: "none",
    zIndex: 1, width: "100%", height: "100%", opacity: "0.2"
  });

  const ctx = canvas.getContext("2d");
  const w = window.innerWidth;
  const h = window.innerHeight;
  canvas.width = w;
  canvas.height = h;

  const drops = [];
  for (let i = 0; i < 300; i++) {
    drops.push({ x: Math.random() * w, y: Math.random() * h, l: Math.random() * 1 + 10, xs: -4 + Math.random() * 4 + 2, ys: Math.random() * 10 + 10 });
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    ctx.strokeStyle = "rgba(174,194,224,0.5)";
    ctx.lineWidth = 1;
    ctx.lineCap = "round";

    for (let i = 0; i < drops.length; i++) {
      const d = drops[i];
      ctx.beginPath();
      ctx.moveTo(d.x, d.y);
      ctx.lineTo(d.x + d.xs, d.y + d.l);
      ctx.stroke();
      d.x += d.xs;
      d.y += d.ys;

      if (d.x > w || d.y > h) {
        d.x = Math.random() * w;
        d.y = -20;
      }
    }
    requestAnimationFrame(draw);
  }
  draw();

  // 25️⃣ Pause audio/video when user leaves tab
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      document.querySelectorAll("video, audio").forEach(media => media.pause());
    }
  });
});
