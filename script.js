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
document.addEventListener("DOMContentLoaded", () => {
  // 41️⃣ Typing Effect for all h1 tags
  document.querySelectorAll("h1").forEach(h1 => {
    const text = h1.textContent;
    h1.textContent = "";
    let i = 0;
    const type = () => {
      if (i < text.length) {
        h1.textContent += text.charAt(i);
        i++;
        setTimeout(type, 100);
      }
    };
    type();
  });

  // 42️⃣ Spotlight cursor effect
  const spotlight = document.createElement("div");
  Object.assign(spotlight.style, {
    position: "fixed",
    pointerEvents: "none",
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 80%)",
    zIndex: "9999",
    mixBlendMode: "overlay"
  });
  document.body.appendChild(spotlight);
  document.addEventListener("mousemove", e => {
    spotlight.style.left = `${e.clientX - 75}px`;
    spotlight.style.top = `${e.clientY - 75}px`;
  });

  // 43️⃣ Scroll-based background gradient
  window.addEventListener("scroll", () => {
    const scroll = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    const r = Math.floor(200 + 55 * scroll);
    const g = Math.floor(100 + 155 * (1 - scroll));
    const b = 255 - Math.floor(scroll * 200);
    document.body.style.background = `linear-gradient(to bottom, rgb(${r},${g},${b}), #ffffff)`;
  });

  // 44️⃣ Animated border rainbow
  const rainbowBorder = document.createElement("div");
  Object.assign(rainbowBorder.style, {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    boxSizing: "border-box",
    border: "8px solid transparent",
    zIndex: "999",
    pointerEvents: "none",
    animation: "rainbowBorder 8s linear infinite"
  });
  document.body.appendChild(rainbowBorder);

  // 45️⃣ Auto glow on input focus
  const inputs = document.querySelectorAll("input, textarea");
  inputs.forEach(el => {
    el.style.transition = "box-shadow 0.3s";
    el.addEventListener("focus", () => {
      el.style.boxShadow = "0 0 10px #00f7ff";
    });
    el.addEventListener("blur", () => {
      el.style.boxShadow = "none";
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  // 51️⃣ Scroll Reveal from Bottom
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-visible");
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll("section, .card, p, img").forEach(el => {
    el.classList.add("reveal-hidden");
    revealObserver.observe(el);
  });

  // 52️⃣ Button click flash
  document.querySelectorAll("button, a").forEach(el => {
    el.addEventListener("click", () => {
      el.style.transition = "background-color 0.2s";
      el.style.backgroundColor = "#ff0";
      setTimeout(() => {
        el.style.backgroundColor = "";
      }, 200);
    });
  });

  // 53️⃣ Random greetings
  const greetings = ["🌍 Hello Traveler!", "✈️ Ready for a trip?", "📷 Smile for memories!", "🗺️ Explore the map!"];
  setInterval(() => {
    const msg = document.createElement("div");
    msg.innerText = greetings[Math.floor(Math.random() * greetings.length)];
    Object.assign(msg.style, {
      position: "fixed", top: "10px", left: "50%", transform: "translateX(-50%)",
      background: "#222", color: "#fff", padding: "10px 20px", borderRadius: "20px",
      fontSize: "14px", zIndex: "9999", opacity: "0", transition: "opacity 0.5s"
    });
    document.body.appendChild(msg);
    setTimeout(() => msg.style.opacity = "1", 50);
    setTimeout(() => msg.style.opacity = "0", 3000);
    setTimeout(() => msg.remove(), 4000);
  }, 30000); // every 30s

  // 54️⃣ Blur background on open modals
  document.querySelectorAll("dialog, .modal").forEach(modal => {
    modal.addEventListener("show", () => {
      document.body.style.filter = "blur(5px)";
    });
    modal.addEventListener("close", () => {
      document.body.style.filter = "none";
    });
  });

  // 55️⃣ Mouse trail sparkles
  const stars = ["⭐", "✨", "🌟", "💫"];
  document.addEventListener("mousemove", (e) => {
    const sparkle = document.createElement("span");
    sparkle.innerText = stars[Math.floor(Math.random() * stars.length)];
    Object.assign(sparkle.style, {
      position: "fixed",
      left: e.pageX + "px",
      top: e.pageY + "px",
      fontSize: "12px",
      pointerEvents: "none",
      opacity: 1,
      transition: "transform 0.8s ease-out, opacity 0.8s",
      transform: "translateY(-20px)",
      zIndex: "9999"
    });
    document.body.appendChild(sparkle);
    setTimeout(() => {
      sparkle.style.opacity = "0";
      sparkle.style.transform = "translateY(-40px)";
    }, 10);
    setTimeout(() => sparkle.remove(), 800);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  // 61️⃣ Firefly swarm
  for (let i = 0; i < 20; i++) {
    const firefly = document.createElement("div");
    firefly.className = "firefly";
    document.body.appendChild(firefly);
    firefly.style.top = `${Math.random() * 100}vh`;
    firefly.style.left = `${Math.random() * 100}vw`;
    firefly.animate([
      { transform: `translate(0, 0)` },
      { transform: `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)` }
    ], {
      duration: 8000 + Math.random() * 4000,
      direction: "alternate",
      iterations: Infinity,
      easing: "ease-in-out"
    });
  }

  // 62️⃣ Animated underline on scroll
  const underlineObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("underline-visible");
    });
  }, { threshold: 0.1 });
  document.querySelectorAll("h1, h2, h3").forEach(h => {
    h.classList.add("underline-hidden");
    underlineObserver.observe(h);
  });

  // 63️⃣ Random image zoom pulse
  setInterval(() => {
    const imgs = document.querySelectorAll("img");
    const randomImg = imgs[Math.floor(Math.random() * imgs.length)];
    if (!randomImg) return;
    randomImg.style.transition = "transform 0.5s";
    randomImg.style.transform = "scale(1.05)";
    setTimeout(() => {
      randomImg.style.transform = "scale(1)";
    }, 500);
  }, 3000);

  // 64️⃣ Scroll speed bubble
  const speedBubble = document.createElement("div");
  speedBubble.id = "speed-bubble";
  Object.assign(speedBubble.style, {
    position: "fixed",
    left: "20px",
    bottom: "20px",
    padding: "8px 10px",
    borderRadius: "12px",
    fontSize: "12px",
    color: "#fff",
    background: "#3f51b5",
    zIndex: "9999"
  });
  document.body.appendChild(speedBubble);

  let lastTime = Date.now();
  let lastScroll = window.scrollY;

  window.addEventListener("scroll", () => {
    const now = Date.now();
    const currentScroll = window.scrollY;
    const speed = Math.abs(currentScroll - lastScroll) / (now - lastTime + 1);
    speedBubble.innerText = speed > 1.5 ? "⚡ Fast" : speed > 0.5 ? "🚶 Medium" : "🐢 Slow";
    lastTime = now;
    lastScroll = currentScroll;
  });

  // 65️⃣ Snowflake drift
  setInterval(() => {
    const snow = document.createElement("div");
    snow.innerText = "❄️";
    Object.assign(snow.style, {
      position: "fixed",
      top: "-30px",
      left: `${Math.random() * 100}%`,
      fontSize: "16px",
      opacity: 0.8,
      pointerEvents: "none",
      zIndex: 9999,
      animation: "snowFall 8s linear forwards"
    });
    document.body.appendChild(snow);
    setTimeout(() => snow.remove(), 8000);
  }, 400);
});
document.addEventListener("DOMContentLoaded", () => {
  // 66️⃣ Page shake on fast scroll
  let lastY = window.scrollY;
  setInterval(() => {
    const currentY = window.scrollY;
    if (Math.abs(currentY - lastY) > 150) {
      document.body.style.animation = "shakePage 0.3s";
      setTimeout(() => document.body.style.animation = "", 300);
    }
    lastY = currentY;
  }, 250);

  // 67️⃣ Wave text animation for all h2 elements
  document.querySelectorAll("h2").forEach(h2 => {
    const text = h2.textContent;
    h2.innerHTML = "";
    [...text].forEach((char, i) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.display = "inline-block";
      span.style.animation = `waveAnim 1s ease-in-out infinite`;
      span.style.animationDelay = `${i * 0.05}s`;
      h2.appendChild(span);
    });
  });

  // 68️⃣ Navbar shadow on scroll
  const nav = document.querySelector("nav");
  window.addEventListener("scroll", () => {
    if (!nav) return;
    nav.style.boxShadow = window.scrollY > 20 ? "0 2px 10px rgba(0,0,0,0.3)" : "none";
  });

  // 69️⃣ Time-based greeting popup
  const hours = new Date().getHours();
  let greeting = "👋 Welcome!";
  if (hours < 12) greeting = "🌞 Good Morning!";
  else if (hours < 18) greeting = "☀️ Good Afternoon!";
  else greeting = "🌙 Good Evening!";
  const greetDiv = document.createElement("div");
  greetDiv.textContent = greeting;
  Object.assign(greetDiv.style, {
    position: "fixed",
    top: "20px",
    right: "20px",
    background: "#222",
    color: "#fff",
    padding: "10px 15px",
    borderRadius: "10px",
    zIndex: "9999",
    opacity: "0",
    transition: "opacity 0.5s"
  });
  document.body.appendChild(greetDiv);
  setTimeout(() => greetDiv.style.opacity = "1", 500);
  setTimeout(() => greetDiv.style.opacity = "0", 4000);
  setTimeout(() => greetDiv.remove(), 5000);

  // 70️⃣ Floating background bubbles
  setInterval(() => {
    const bubble = document.createElement("div");
    Object.assign(bubble.style, {
      width: `${Math.random() * 30 + 10}px`,
      height: `${Math.random() * 30 + 10}px`,
      background: "rgba(255, 255, 255, 0.1)",
      position: "fixed",
      bottom: "0px",
      left: `${Math.random() * 100}%`,
      borderRadius: "50%",
      zIndex: "-1",
      animation: "bubbleRise 10s linear forwards"
    });
    document.body.appendChild(bubble);
    setTimeout(() => bubble.remove(), 10000);
  }, 500);
});
document.addEventListener("DOMContentLoaded", () => {
  // 71️⃣ Flash visited links
  document.querySelectorAll("a:visited").forEach(link => {
    link.style.transition = "box-shadow 0.3s";
    link.style.boxShadow = "0 0 8px #f0f";
    setTimeout(() => link.style.boxShadow = "none", 1000);
  });

  // 72️⃣ Delayed image reveal on load
  const images = document.querySelectorAll("img");
  images.forEach((img, index) => {
    img.style.opacity = "0";
    img.style.transition = "opacity 1s ease";
    setTimeout(() => {
      img.style.opacity = "1";
    }, index * 200);
  });

  // 73️⃣ Bounce to top if scrolled too far
  window.addEventListener("scroll", () => {
    if (window.scrollY > document.body.scrollHeight - 1000) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  });

  // 74️⃣ Auto-focus first input
  const firstInput = document.querySelector("input, textarea");
  if (firstInput) {
    setTimeout(() => firstInput.focus(), 500);
  }

  // 75️⃣ Ripple click effect
  document.addEventListener("click", (e) => {
    const ripple = document.createElement("div");
    ripple.className = "ripple";
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 1000);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  // 76️⃣ Glowing trail
  document.addEventListener("mousemove", (e) => {
    const dot = document.createElement("div");
    dot.className = "mouse-glow";
    dot.style.left = `${e.pageX}px`;
    dot.style.top = `${e.pageY}px`;
    document.body.appendChild(dot);
    setTimeout(() => dot.remove(), 500);
  });

  // 77️⃣ Scroll direction indicator
  let lastY = window.scrollY;
  const arrow = document.createElement("div");
  arrow.textContent = "⬇️";
  Object.assign(arrow.style, {
    position: "fixed", top: "10px", right: "10px",
    fontSize: "24px", zIndex: "9999"
  });
  document.body.appendChild(arrow);

  window.addEventListener("scroll", () => {
    const currentY = window.scrollY;
    arrow.textContent = currentY > lastY ? "⬇️" : "⬆️";
    lastY = currentY;
  });

  // 78️⃣ Background pulse
  setInterval(() => {
    document.body.style.transition = "background-color 1s ease";
    document.body.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}, 50%, 95%)`;
  }, 5000);

  // 79️⃣ Fade page if user idle
  let idleTimeout;
  const resetIdle = () => {
    document.body.style.opacity = "1";
    clearTimeout(idleTimeout);
    idleTimeout = setTimeout(() => {
      document.body.style.opacity = "0.6";
    }, 10000);
  };
  ["mousemove", "keydown", "scroll"].forEach(evt =>
    document.addEventListener(evt, resetIdle)
  );
  resetIdle();

  // 80️⃣ Word-by-word paragraph fade
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const text = entry.target.textContent.trim();
        entry.target.innerHTML = "";
        text.split(" ").forEach((word, i) => {
          const span = document.createElement("span");
          span.textContent = word + " ";
          span.style.opacity = "0";
          span.style.display = "inline-block";
          span.style.transition = "opacity 0.5s ease";
          span.style.transitionDelay = `${i * 0.1}s`;
          entry.target.appendChild(span);
          setTimeout(() => span.style.opacity = "1", 50);
        });
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll("p").forEach(p => {
    fadeObserver.observe(p);
  });
});
