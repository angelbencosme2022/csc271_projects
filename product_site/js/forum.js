/*
 * File: app.js
 * Author: [Your Name]
 * Date: November 1, 2025
 * Description: JavaScript for SoundStory music forum platform.
 *              Implements decision tree for user onboarding, dynamic content generation,
 *              and interactive features using conditional statements and loops.
 */

// ===========================
// DECISION TREE IMPLEMENTATION
// ===========================

/**
 * Function to guide users through the decision tree
 * Based on the flowchart: musician type → experience level → learning preference
 */
function userOnboarding() {
  // Decision Node 1: Are you a musician or music enthusiast?
  const userType = prompt(
    "Welcome to SoundStory! 🎵\n\nAre you a:\n1. Musician\n2. Music Enthusiast/Fan\n\nEnter 1 or 2:"
  );

  // Condition 1: Check user type (evaluates to Boolean)
  // Uses logical OR operator to check for valid input
  if (userType === "1" || userType === "musician") {
    // User is a musician - proceed to Decision Node 2
    const experienceLevel = prompt(
      "Great! What's your experience level?\n\n1. Beginner (0-2 years)\n2. Intermediate/Advanced (2+ years)\n\nEnter 1 or 2:"
    );

    // Condition 2: Check experience level (evaluates to Boolean)
    if (experienceLevel === "1" || experienceLevel === "beginner") {
      // Beginner musician - proceed to Decision Node 3
      const learningPreference = prompt(
        "We have resources for you!\n\nAre you looking for:\n1. Lessons/Tutorials\n2. Community Support\n\nEnter 1 or 2:"
      );

      // Condition 3: Check learning preference (evaluates to Boolean)
      // Uses logical AND with NOT operator to validate input
      if (learningPreference === "1" && !(learningPreference === "2")) {
        // Terminal Node: Explore Learning Resources
        displayResult(
          "Perfect! 📚",
          "You'll love our Learning Resources & Mentorship section. We have tutorials, video lessons, and mentor matching to help you grow as a musician!",
          "beginner-lessons"
        );
      } else if (learningPreference === "2") {
        // Terminal Node: Join Beginner-Friendly Forums
        displayResult(
          "Awesome! 👥",
          "Join our Beginner-Friendly Forums where you can ask questions, share your progress, and connect with other musicians just starting out!",
          "beginner-community"
        );
      } else {
        alert("Invalid input. Please refresh and try again.");
      }
    } else if (experienceLevel === "2" || experienceLevel === "advanced") {
      // Terminal Node: Join Pro Musician Forums
      displayResult(
        "Excellent! 🎸",
        "Head over to our Pro Musician Forums where you can discuss advanced techniques, collaborate on projects, and network with fellow professionals!",
        "pro-forums"
      );
    } else {
      alert("Invalid input. Please refresh and try again.");
    }
  } else if (userType === "2" || userType === "fan" || userType === "enthusiast") {
    // Terminal Node: Join General Music Discussions
    displayResult(
      "Welcome! 🎶",
      "Dive into our General Music Discussions! Share your favorite tracks, discover new artists, and connect with music lovers from all genres!",
      "general-discussions"
    );
  } else {
    alert("Invalid input. Please refresh and try again.");
  }
}

/**
 * Display the result of the decision tree
 * @param {string} title - Result title
 * @param {string} message - Result message
 * @param {string} category - User category for styling
 */
function displayResult(title, message, category) {
  // Create result container if it doesn't exist
  let resultContainer = document.getElementById("onboarding-result");

  if (!resultContainer) {
    resultContainer = document.createElement("section");
    resultContainer.id = "onboarding-result";
    resultContainer.className = "onboarding-result";

    // Insert after main heading
    const mainHeading = document.querySelector(".main-heading-container");
    if (mainHeading && mainHeading.nextSibling) {
      mainHeading.parentNode.insertBefore(resultContainer, mainHeading.nextSibling);
    } else {
      document.querySelector("main").prepend(resultContainer);
    }
  }

  // Update content using innerHTML for formatted display
  resultContainer.innerHTML = `
    <div class="result-card ${category}">
      <h2>${title}</h2>
      <p>${message}</p>
      <button onclick="userOnboarding()" class="retry-button">Start Over</button>
    </div>
  `;

  // Scroll to result
  resultContainer.scrollIntoView({ behavior: "smooth", block: "center" });
}

// ===========================
// LOOP 1: FOR LOOP
// ===========================

/**
 * FOR LOOP: Generate popular music genres dynamically
 * Why for loop? We have a fixed array of genres and need to iterate through each one
 * exactly once to create genre cards. For loops are ideal for iterating through
 * arrays with a known length.
 */
function displayMusicGenres() {
  // Array of popular genres on SoundStory
  const genres = [
    { name: "Rock", icon: "🎸", description: "Classic and modern rock discussions" },
    { name: "Pop", icon: "🎤", description: "Latest pop hits and trends" },
    { name: "Hip Hop", icon: "🎧", description: "Rap, beats, and urban culture" },
    { name: "Jazz", icon: "🎺", description: "Smooth jazz and improvisation" },
    { name: "Electronic", icon: "🎹", description: "EDM, house, and techno" },
    { name: "Indie", icon: "🎵", description: "Independent and alternative music" }
  ];

  // Create container for genres
  const genreContainer = document.createElement("section");
  genreContainer.className = "genre-showcase";
  genreContainer.innerHTML = "<h2>Explore Music Genres</h2><div class='genre-grid' id='genre-grid'></div>";

  // Insert into page
  const whyJoinSection = document.querySelector(".why-join-section");
  if (whyJoinSection) {
    whyJoinSection.insertAdjacentElement("afterend", genreContainer);
  }

  const genreGrid = document.getElementById("genre-grid");

  // FOR LOOP: Iterate through each genre and create a card
  for (let i = 0; i < genres.length; i++) {
    const genreCard = document.createElement("div");
    genreCard.className = "genre-card";

    // Use textContent for text and innerHTML for structure
    genreCard.innerHTML = `
      <span class="genre-icon">${genres[i].icon}</span>
      <h3>${genres[i].name}</h3>
      <p>${genres[i].description}</p>
    `;

    genreGrid.appendChild(genreCard);
  }
}

// ===========================
// LOOP 2: WHILE LOOP
// ===========================

/**
 * WHILE LOOP: Display community statistics counter
 * Why while loop? We're counting up to a target number to create an animated
 * counter effect. While loops are perfect for conditions that need to be checked
 * repeatedly until a certain state is reached.
 */
function displayCommunityStats() {
  // Community statistics data
  const stats = {
    members: 15000,
    posts: 50000,
    genres: 25
  };

  // Create stats container
  const statsContainer = document.createElement("section");
  statsContainer.className = "community-stats";
  statsContainer.innerHTML = `
    <h2>Join Our Growing Community</h2>
    <div class="stats-grid">
      <div class="stat-card">
        <span class="stat-number" id="members-count">0</span>
        <span class="stat-label">Active Members</span>
      </div>
      <div class="stat-card">
        <span class="stat-number" id="posts-count">0</span>
        <span class="stat-label">Forum Posts</span>
      </div>
      <div class="stat-card">
        <span class="stat-number" id="genres-count">0</span>
        <span class="stat-label">Music Genres</span>
      </div>
    </div>
  `;

  // Insert into page
  const getConnectedSection = document.querySelector(".get-connected-section");
  if (getConnectedSection) {
    getConnectedSection.insertAdjacentElement("beforebegin", statsContainer);
  }

  // WHILE LOOP: Animate counter for members
  let memberCount = 0;
  const memberTarget = stats.members;
  const memberIncrement = 500; // Increment by 500 each iteration
  const membersElement = document.getElementById("members-count");

  // Use setInterval to create animation effect
  const memberInterval = setInterval(() => {
    // WHILE condition: continue while count is less than target
    while (memberCount < memberTarget && memberCount + memberIncrement <= memberTarget) {
      memberCount += memberIncrement;
      membersElement.textContent = memberCount.toLocaleString();
      break; // Break to allow setInterval to control timing
    }

    // When we reach the target, stop the interval
    if (memberCount >= memberTarget) {
      membersElement.textContent = memberTarget.toLocaleString();
      clearInterval(memberInterval);
    }
  }, 50);

  // Simpler counters for other stats (instant display)
  document.getElementById("posts-count").textContent = stats.posts.toLocaleString();
  document.getElementById("genres-count").textContent = stats.genres;
}

// ===========================
// NODELIST LOOP
// ===========================

/**
 * NODELIST LOOP: Add hover effects and accessibility to all navigation links
 * Uses a loop to apply the same behavior to each navigation element
 */
function enhanceNavigation() {
  // Select all navigation links
  const navLinks = document.querySelectorAll(".header-nav a");

  // Check that at least one element was found using length property
  if (navLinks.length > 0) {
    // Loop through each link in the NodeList
    for (let i = 0; i < navLinks.length; i++) {
      const link = navLinks[i];

      // Add mouseover event for visual feedback
      link.addEventListener("mouseover", function () {
        this.style.transform = "translateY(-2px)";
        this.style.transition = "transform 0.3s ease";
      });

      // Add mouseout event to reset
      link.addEventListener("mouseout", function () {
        this.style.transform = "translateY(0)";
      });

      // Add keyboard accessibility
      link.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          this.click();
        }
      });

      // Add focus styling for accessibility
      link.addEventListener("focus", function () {
        this.style.outline = "2px solid #4CAF50";
        this.style.outlineOffset = "4px";
      });

      link.addEventListener("blur", function () {
        this.style.outline = "none";
      });
    }

    console.log(`Enhanced ${navLinks.length} navigation links with interactive effects.`);
  } else {
    console.warn("No navigation links found to enhance.");
  }
}

/**
 * ADDITIONAL NODELIST LOOP: Enhance all sections with fade-in animation
 */
function addScrollAnimations() {
  // Select all main sections
  const sections = document.querySelectorAll("main section");

  // Check length property - ensure sections exist
  if (sections.length > 0) {
    // Loop through each section
    for (let i = 0; i < sections.length; i++) {
      // Add animation class to each section
      sections[i].classList.add("fade-in-section");
      sections[i].style.opacity = "0";
      sections[i].style.transform = "translateY(20px)";
      sections[i].style.transition = "opacity 0.6s ease, transform 0.6s ease";
    }

    // Intersection Observer for scroll-triggered animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe each section
    for (let i = 0; i < sections.length; i++) {
      observer.observe(sections[i]);
    }

    console.log(`Added scroll animations to ${sections.length} sections.`);
  } else {
    console.warn("No sections found for scroll animations.");
  }
}

// ===========================
// INITIALIZATION
// ===========================

/**
 * Initialize all functions when DOM is fully loaded
 */
document.addEventListener("DOMContentLoaded", function () {
  console.log("SoundStory app.js loaded successfully!");

  // Initialize dynamic content with loops
  displayMusicGenres(); // FOR LOOP
  displayCommunityStats(); // WHILE LOOP

  // Enhance page elements with NodeList loops
  enhanceNavigation(); // NODELIST LOOP 1
  addScrollAnimations(); // NODELIST LOOP 2

  // Add decision tree button to main heading
  const mainHeading = document.querySelector(".main-heading-container");
  if (mainHeading) {
    const onboardingButton = document.createElement("button");
    onboardingButton.textContent = "Find Your Community 🎵";
    onboardingButton.className = "onboarding-button";
    onboardingButton.onclick = userOnboarding;
    mainHeading.appendChild(onboardingButton);
  }

  console.log("All features initialized!");
});