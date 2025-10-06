// Gallery data for The Whitmore Estate journey
const galleryData = {
  estate: [
    {
      src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "The Whitmore Estate - Front View",
      caption:
        "The magnificent Greek Revival facade that has welcomed visitors since 1847",
      story:
        "Built by textile magnate Samuel Whitmore, this entrance has witnessed 176 years of New England history.",
    },
    {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Grand Foyer Interior",
      caption: "Original 1847 grand foyer with period chandelier",
      story:
        "This crystal chandelier was a wedding gift to the Whitmores and has illuminated countless family celebrations.",
    },
    {
      src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Library with Hidden Passage",
      caption:
        "The library where courage met knowledge during the Underground Railroad era",
      story:
        "Behind these mahogany shelves lies the hidden passage that helped freedom seekers on their journey north.",
    },
    {
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Restored Kitchen",
      caption: "1920s restoration honoring the past while embracing modernity",
      story:
        "Period-appropriate fixtures blend seamlessly with modern conveniences in this heart of the home.",
    },
    {
      src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Master Suite",
      caption: "Contemporary addition crafted with historical sensitivity",
      story:
        "Reclaimed chestnut beams and period windows make this addition feel timelessly integrated.",
    },
    {
      src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Historic Gardens",
      caption: "Twelve acres of living New England poetry",
      story:
        "Stone walls built by Samuel Whitmore's own hands still define the property boundaries.",
    },
    {
      src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Sugar Maple Grove",
      caption: "The maple grove planted by Samuel Whitmore himself",
      story:
        "These maples provide spectacular autumn color that rivals any Vermont postcard.",
    },
    {
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Heritage Oak",
      caption: "The ancient oak that predates even the house",
      story: "This witness tree has watched over the land since before 1800.",
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Private Pond",
      caption: "Samuel's private retreat for reflection and recreation",
      story:
        "Where the textile magnate cooled his feet during summer planning sessions.",
    },
    {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Dining Room",
      caption: "Formal dining with original wide-plank floors",
      story:
        "Six working fireplaces warm different gathering spaces throughout the home.",
    },
  ],
};

// DOM Elements
let currentGallery = [];
let currentImageIndex = 0;
const modal = document.getElementById("gallery-modal");
const mainImage = document.getElementById("gallery-main-image");
const thumbnailContainer = document.querySelector(".gallery-thumbnails");
const closeBtn = document.querySelector(".gallery-close");
const prevBtn = document.querySelector(".gallery-prev");
const nextBtn = document.querySelector(".gallery-next");
const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  initializeParallax();
  initializeNavigation();
  initializeGallery();
  initializeSmoothScrolling();
  initializeLazyLoading();
  initializeFadeInElements();

  // Add scroll listener for navbar
  window.addEventListener("scroll", handleNavbarScroll);
});

// Parallax Effects
function initializeParallax() {
  const parallaxElements = document.querySelectorAll("[data-speed]");

  function updateParallax() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;

    parallaxElements.forEach((element) => {
      const speed = element.dataset.speed;
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  }

  // Use requestAnimationFrame for smooth performance
  let ticking = false;

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }

  function handleScroll() {
    requestTick();
    ticking = false;
  }

  window.addEventListener("scroll", handleScroll);

  // Initial parallax update
  updateParallax();
}

// Navigation functionality
function initializeNavigation() {
  // Hamburger menu toggle
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  // Close mobile menu when clicking on links
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!navbar.contains(e.target)) {
      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });
}

// Navbar scroll effect
function handleNavbarScroll() {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

// Gallery functionality
function initializeGallery() {
  // Add click listeners to all gallery trigger images
  document.querySelectorAll(".gallery-trigger").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      const galleryType = this.dataset.gallery;
      if (galleryData[galleryType]) {
        openGallery(galleryType, 0);
      }
    });
  });

  // Modal close functionality
  closeBtn.addEventListener("click", closeGallery);

  // Close modal when clicking outside the content
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeGallery();
    }
  });

  // Keyboard navigation
  document.addEventListener("keydown", function (e) {
    if (modal.style.display === "block") {
      switch (e.key) {
        case "Escape":
          closeGallery();
          break;
        case "ArrowLeft":
          showPreviousImage();
          break;
        case "ArrowRight":
          showNextImage();
          break;
      }
    }
  });

  // Navigation buttons
  prevBtn.addEventListener("click", showPreviousImage);
  nextBtn.addEventListener("click", showNextImage);
}

function openGallery(galleryType, imageIndex = 0) {
  currentGallery = galleryData[galleryType];
  currentImageIndex = imageIndex;

  // Show modal
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // Prevent background scrolling

  // Load main image
  updateMainImage();

  // Generate thumbnails
  generateThumbnails();

  // Add fade-in animation
  setTimeout(() => {
    modal.style.opacity = "1";
  }, 10);
}

function closeGallery() {
  modal.style.opacity = "0";
  setTimeout(() => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }, 300);
}

function updateMainImage() {
  const currentImage = currentGallery[currentImageIndex];
  mainImage.src = currentImage.src;
  mainImage.alt = currentImage.alt;

  // Update caption if it exists
  const captionElement = document.getElementById("image-caption");
  if (captionElement && currentImage.caption) {
    captionElement.textContent = currentImage.caption;
  }

  // Update active thumbnail
  updateActiveThumbnail();
}

function generateThumbnails() {
  thumbnailContainer.innerHTML = "";

  currentGallery.forEach((image, index) => {
    const thumbnail = document.createElement("img");
    thumbnail.src = image.src;
    thumbnail.alt = image.alt;
    thumbnail.dataset.index = index;

    if (index === currentImageIndex) {
      thumbnail.classList.add("active");
    }

    thumbnail.addEventListener("click", () => {
      currentImageIndex = index;
      updateMainImage();
    });

    thumbnailContainer.appendChild(thumbnail);
  });
}

function updateActiveThumbnail() {
  const thumbnails = thumbnailContainer.querySelectorAll("img");
  thumbnails.forEach((thumb, index) => {
    thumb.classList.toggle("active", index === currentImageIndex);
  });
}

function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % currentGallery.length;
  updateMainImage();
}

function showPreviousImage() {
  currentImageIndex =
    (currentImageIndex - 1 + currentGallery.length) % currentGallery.length;
  updateMainImage();
}

// Lazy loading for images
function initializeLazyLoading() {
  const images = document.querySelectorAll('img[loading="lazy"]');

  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.add("loaded");
          observer.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  }
}

// Scroll animations for elements coming into view
function initializeScrollAnimations() {
  const animateElements = document.querySelectorAll(
    ".listing-card, .property-details, .history-content"
  );

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  animateElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
}

// Initialize scroll animations when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(initializeScrollAnimations, 100);
});

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Enhanced parallax with throttling for better performance
const throttledParallax = throttle(() => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll("[data-speed]");

  parallaxElements.forEach((element) => {
    const speed = parseFloat(element.dataset.speed);
    const yPos = -(scrolled * speed);
    element.style.transform = `translateY(${yPos}px)`;
  });
}, 16); // ~60fps

// Add optimized scroll listener
window.addEventListener("scroll", throttledParallax);

// Preload critical images for better UX
function preloadCriticalImages() {
  const criticalImages = [
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  ];

  criticalImages.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}

// Initialize preloading
document.addEventListener("DOMContentLoaded", preloadCriticalImages);

// Add touch support for mobile gallery navigation
let touchStartX = 0;
let touchEndX = 0;

function handleGalleryTouch() {
  const galleryContent = document.querySelector(".gallery-content");

  galleryContent.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  galleryContent.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleGallerySwipe();
  });
}

function handleGallerySwipe() {
  const swipeThreshold = 50;
  const diff = touchStartX - touchEndX;

  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      showNextImage(); // Swipe left - next image
    } else {
      showPreviousImage(); // Swipe right - previous image
    }
  }
}

// Initialize touch support
document.addEventListener("DOMContentLoaded", handleGalleryTouch);

// Add loading states for better UX
function showLoading() {
  mainImage.style.opacity = "0.5";
}

function hideLoading() {
  mainImage.style.opacity = "1";
}

// Enhanced image loading in gallery
function loadGalleryImage(src) {
  showLoading();

  const img = new Image();
  img.onload = () => {
    mainImage.src = src;
    hideLoading();
  };
  img.onerror = () => {
    console.error("Failed to load image:", src);
    hideLoading();
  };
  img.src = src;
}

// Journey-specific enhancements
document.addEventListener("DOMContentLoaded", function () {
  initializeJourneyEnhancements();
});

function initializeJourneyEnhancements() {
  // Enhanced scroll-triggered animations for story elements
  observeStoryElements();

  // Add special effects for timeline
  enhanceTimeline();

  // Add room story animations
  enhanceRoomStories();

  // Add progress indicator
  createJourneyProgress();
}

// Observe story elements for entrance animations
function observeStoryElements() {
  const storyElements = document.querySelectorAll(
    ".story-moment, .room-story, .chapter-content, .highlight-item"
  );

  const observerOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px",
  };

  const storyObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("story-visible");

        // Add stagger effect for multiple elements
        const siblings = entry.target.parentElement.querySelectorAll(
          ".story-moment, .room-story, .highlight-item"
        );
        siblings.forEach((sibling, index) => {
          if (sibling === entry.target) {
            setTimeout(() => {
              sibling.style.opacity = "1";
              sibling.style.transform = "translateY(0)";
            }, index * 100);
          }
        });
      }
    });
  }, observerOptions);

  storyElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    storyObserver.observe(el);
  });
}

// Enhance timeline with progressive revelation
function enhanceTimeline() {
  const timelineChapters = document.querySelectorAll(".story-chapter");

  const timelineObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const yearElement = entry.target.querySelector(".chapter-year");
          const contentElement = entry.target.querySelector(".chapter-content");

          // Animate year circle
          setTimeout(() => {
            yearElement.style.transform = "scale(1)";
            yearElement.style.opacity = "1";
          }, 100);

          // Animate content
          setTimeout(() => {
            contentElement.style.opacity = "1";
            contentElement.style.transform = "translateX(0)";
          }, 300);
        }
      });
    },
    { threshold: 0.3 }
  );

  timelineChapters.forEach((chapter) => {
    const yearElement = chapter.querySelector(".chapter-year");
    const contentElement = chapter.querySelector(".chapter-content");

    yearElement.style.transform = "scale(0.8)";
    yearElement.style.opacity = "0";
    yearElement.style.transition = "all 0.6s ease";

    contentElement.style.opacity = "0";
    contentElement.style.transform = "translateX(30px)";
    contentElement.style.transition = "all 0.6s ease";

    timelineObserver.observe(chapter);
  });
}

// Enhance room stories with alternating animations
function enhanceRoomStories() {
  const roomStories = document.querySelectorAll(".room-story");

  roomStories.forEach((story, index) => {
    const isReverse = story.classList.contains("reverse");
    const visual = story.querySelector(".room-visual");
    const narrative = story.querySelector(".room-narrative");

    const roomObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate visual
            setTimeout(() => {
              visual.style.opacity = "1";
              visual.style.transform = isReverse
                ? "translateX(0)"
                : "translateX(0)";
            }, 200);

            // Animate narrative
            setTimeout(() => {
              narrative.style.opacity = "1";
              narrative.style.transform = "translateY(0)";
            }, 400);
          }
        });
      },
      { threshold: 0.3 }
    );

    // Set initial states
    visual.style.opacity = "0";
    visual.style.transform = isReverse
      ? "translateX(50px)"
      : "translateX(-50px)";
    visual.style.transition = "all 0.8s ease";

    narrative.style.opacity = "0";
    narrative.style.transform = "translateY(30px)";
    narrative.style.transition = "all 0.8s ease";

    roomObserver.observe(story);
  });
}

// Create journey progress indicator
function createJourneyProgress() {
  const progressContainer = document.createElement("div");
  progressContainer.className = "journey-progress";
  progressContainer.innerHTML = `
    <div class="progress-track">
      <div class="progress-fill"></div>
    </div>
    <div class="progress-labels">
      <span data-section="hero">Arrival</span>
      <span data-section="discovery">Discovery</span>
      <span data-section="history">History</span>
      <span data-section="rooms">Rooms</span>
      <span data-section="grounds">Grounds</span>
      <span data-section="legacy">Legacy</span>
    </div>
  `;

  document.body.appendChild(progressContainer);

  // Add progress styles
  const progressStyles = `
    .journey-progress {
      position: fixed;
      top: 50%;
      right: 30px;
      transform: translateY(-50%);
      z-index: 500;
      display: none;
    }
    
    .progress-track {
      width: 4px;
      height: 300px;
      background: rgba(139, 90, 60, 0.2);
      border-radius: 2px;
      position: relative;
      margin-bottom: 10px;
    }
    
    .progress-fill {
      width: 100%;
      background: linear-gradient(to bottom, #8b5a3c, #b68f71);
      border-radius: 2px;
      transition: height 0.3s ease;
      height: 0%;
    }
    
    .progress-labels {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    
    .progress-labels span {
      font-size: 0.8rem;
      color: #2c3e50;
      cursor: pointer;
      padding: 4px 8px;
      border-radius: 4px;
      transition: all 0.3s ease;
      font-family: 'Montserrat', sans-serif;
      background: rgba(255, 255, 255, 0.9);
      border: 1px solid rgba(139, 90, 60, 0.2);
      font-weight: 500;
    }
    
    .progress-labels span:hover,
    .progress-labels span.active {
      color: #8b5a3c;
      background: rgba(139, 90, 60, 0.1);
    }
    
    @media (max-width: 768px) {
      .journey-progress {
        display: none !important;
      }
    }
  `;

  const styleSheet = document.createElement("style");
  styleSheet.textContent = progressStyles;
  document.head.appendChild(styleSheet);

  // Update progress on scroll
  window.addEventListener("scroll", updateJourneyProgress);

  // Add click handlers for navigation
  progressContainer.querySelectorAll("[data-section]").forEach((label) => {
    label.addEventListener("click", () => {
      const targetId = label.dataset.section;
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Show progress indicator after initial load
  setTimeout(() => {
    progressContainer.style.display = "block";
  }, 1000);
}

function updateJourneyProgress() {
  const sections = [
    "hero",
    "discovery",
    "history",
    "rooms",
    "grounds",
    "legacy",
  ];
  const progressFill = document.querySelector(".progress-fill");
  const progressLabels = document.querySelectorAll(".progress-labels span");

  if (!progressFill) return;

  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  // Calculate overall progress
  const totalProgress = (scrollPosition + windowHeight) / documentHeight;
  progressFill.style.height = `${Math.min(totalProgress * 100, 100)}%`;

  // Highlight current section
  let currentSection = "";
  sections.forEach((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
        currentSection = sectionId;
      }
    }
  });

  progressLabels.forEach((label) => {
    label.classList.toggle("active", label.dataset.section === currentSection);
  });
}

// Fade-in elements on scroll
function initializeFadeInElements() {
  const fadeElements = document.querySelectorAll(".fade-in-element");

  if (!fadeElements.length) return;

  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          fadeObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  fadeElements.forEach((element) => {
    fadeObserver.observe(element);
  });
}
