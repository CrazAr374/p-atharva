document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  // GSAP animations
  gsap.from(".logo", { opacity: 0, x: -50, duration: 1, ease: "power3.out" });
  gsap.from(".nav-menu li", {
    opacity: 0,
    y: -20,
    duration: 0.5,
    stagger: 0.1,
    ease: "power3.out",
  });

  // Hover animation for menu items
  const menuItems = document.querySelectorAll(".nav-menu a");
  menuItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      gsap.to(item, { scale: 1.1, duration: 0.3, ease: "power1.out" });
    });
    item.addEventListener("mouseleave", () => {
      gsap.to(item, { scale: 1, duration: 0.3, ease: "power1.out" });
    });
  });

  // Hamburger menu animation
  menuToggle.addEventListener("click", () => {
    if (menuToggle.classList.contains("active")) {
      gsap.to(".bar:nth-child(1)", { rotation: 45, y: 6, duration: 0.3 });
      gsap.to(".bar:nth-child(2)", { opacity: 0, duration: 0.3 });
      gsap.to(".bar:nth-child(3)", { rotation: -45, y: -6, duration: 0.3 });
    } else {
      gsap.to(".bar:nth-child(1)", { rotation: 0, y: 0, duration: 0.3 });
      gsap.to(".bar:nth-child(2)", { opacity: 1, duration: 0.3 });
      gsap.to(".bar:nth-child(3)", { rotation: 0, y: 0, duration: 0.3 });
    }
  });
});

// ... existing code ...

document.addEventListener("DOMContentLoaded", () => {
  // ... existing code ...

  // Changing text animation
  const changingText = document.querySelector(".changing-text");
  const roles = ["Developer", "AIML Learner", "Front-End Dev"];
  let currentIndex = 0;

  function updateChangingText() {
    gsap.to(changingText, {
      duration: 0.5,
      opacity: 0,
      onComplete: () => {
        changingText.textContent = roles[currentIndex];
        gsap.to(changingText, { duration: 0.5, opacity: 1 });
        currentIndex = (currentIndex + 1) % roles.length;
      },
    });
  }

  setInterval(updateChangingText, 3000);

  // Hero section animations
  gsap.from(".hero-text h2, .hero-text h1, .hero-text h3", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
  });

  gsap.from(".social-links a", {
    opacity: 0,
    y: 20,
    duration: 0.5,
    stagger: 0.1,
    ease: "power3.out",
    delay: 1,
  });

  gsap.from(".education, .academics", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
    delay: 1.2,
  });

  gsap.from(".hero-image img", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    ease: "power3.out",
    delay: 0.5,
  });

  // Image hover effect


  document.addEventListener("mouseleave", () => {
    gsap.to(heroImage, {
      rotationY: 0,
      rotationX: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  });
  // ... existing code ...

  // Custom cursor
  const cursor = document.createElement("div");
  cursor.classList.add("custom-cursor");
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

  // About Me section animations
  gsap.registerPlugin(ScrollTrigger);

  const aboutTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-me",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  aboutTl
    .from(".about-title", {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power3.out",
    })
    .from(
      ".about-image",
      {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.5"
    )
    .from(
      ".glass-morphic",
      {
        opacity: 0,
        x: 100,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.5"
    )
    .from(
      ".glass-morphic p",
      {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      },
      "-=0.5"
    )
    .from(
      ".download-cv",
      {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.5"
    );

  // Hover effect for about image
  const aboutImage = document.querySelector(".about-image");
  aboutImage.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      scale: 2,
      duration: 0.3,
    });
  });

  aboutImage.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      scale: 1,
      duration: 0.3,
    });
  });

  // Parallax effect for about image
  gsap.to(".about-image", {
    yPercent: -20,
    ease: "none",
    scrollTrigger: {
      trigger: ".about-me",
      scrub: true,
    },
  });

  // Text reveal animation
  const textReveal = document.querySelectorAll(".glass-morphic p");
  textReveal.forEach((text) => {
    const splitText = new SplitText(text, { type: "words,chars" });
    gsap.from(splitText.chars, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.02,
      ease: "power3.out",
      scrollTrigger: {
        trigger: text,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    // Animate the skills title
    gsap.from(".skills-title", {
      opacity: 0,
      y: -50,
      duration: 1,
      scrollTrigger: {
        trigger: ".skills",
        start: "top 80%",
      },
    });

    // Animate the skill rows
    gsap.from(".skills-row", {
      opacity: 0,
      x: (index) => (index % 2 === 0 ? -100 : 100),
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".skills",
        start: "top 60%",
      },
    });

    // Optional: Pause animation on hover
    const skillTracks = document.querySelectorAll(".skills-track");

    skillTracks.forEach((track) => {
      track.addEventListener("mouseenter", () => {
        gsap.to(track, { animationPlayState: "paused" });
      });

      track.addEventListener("mouseleave", () => {
        gsap.to(track, { animationPlayState: "running" });
      });
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Here you would typically send the form data to a server
      // For this example, we'll just show the notification

      showNotification(
        "Thank you for connecting! You will soon receive an email."
      );

      // Reset the form
      contactForm.reset();
    });

    function showNotification(message) {
      const notification = document.createElement("div");
      notification.className = "notification";
      notification.textContent = message;

      document.body.appendChild(notification);

      // Trigger reflow
      notification.offsetHeight;

      notification.classList.add("show");

      setTimeout(() => {
        notification.classList.remove("show");
        setTimeout(() => {
          document.body.removeChild(notification);
        }, 300);
      }, 3000);
    }
  });
});
