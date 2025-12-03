/*
 * Author: SoundStory Development Team
 * Date: October 23, 2025
 * Description: Simple JavaScript file for SoundStory music forum
 * This script updates text content, performs basic calculations,
 * updates forum posts, and shows popups for post details.
 */

// ==========================================
// SECTION 1: VARIABLES
// ==========================================

// String variables
let siteName = "SoundStory Music Forum";
let welcomeMessage = "Welcome to the best music community!";
let featuredArtist = "Laufey";

// Numeric variables
let memberCount = 10000;
let postCount = 50000;
let newMembers = 247;

// ==========================================
// SECTION 2: ARITHMETIC CALCULATIONS
// ==========================================

let totalMembers = memberCount + newMembers;
let avgPosts = Math.round(postCount / totalMembers);
let growthPercent = ((newMembers / memberCount) * 100).toFixed(1);

// ==========================================
// SECTION 3: SELECT HTML ELEMENTS
// ==========================================

let mainHeading = document.getElementById("main-content");
let statBoxes = document.getElementsByClassName("stat-box");
let allParagraphs = document.getElementsByTagName("p");
let headerLogo = document.querySelector(".header-logo");
let allLinks = document.querySelectorAll("a");
let forumTbody = document.querySelector(".forum-topics-section table tbody");

// ==========================================
// SECTION 4: UPDATE TEXT WITH textContent
// ==========================================

if (headerLogo) headerLogo.textContent = siteName;

if (allParagraphs.length > 0) {
  allParagraphs[0].textContent =
    welcomeMessage + " We now have " + totalMembers + " members!";
}

// ==========================================
// SECTION 5: UPDATE HTML WITH innerHTML
// ==========================================

if (mainHeading) {
  let banner = document.createElement("div");
  banner.innerHTML =
    `<h2>🎵 Featured Artist: <em>${featuredArtist}</em> 🎵</h2>
     <p><strong>Community Stats:</strong> ${totalMembers} total members</p>
     <p>Average posts per member: <strong>${avgPosts}</strong></p>
     <p>Growth rate: <strong>${growthPercent}%</strong></p>`;
  mainHeading.appendChild(banner);
}

if (allParagraphs.length > 1) {
  allParagraphs[1].innerHTML =
    `Join <strong>${siteName}</strong> today and connect with 
     <em>${totalMembers} music lovers</em>!`;
}

// ==========================================
// SECTION 6: CONSOLE OUTPUT
// ==========================================

console.log("JavaScript loaded successfully!");
console.log("Total Members:", totalMembers);
console.log("Average Posts:", avgPosts);
console.log("Growth:", growthPercent + "%");

// ==========================================
// SECTION 7: POPUP MODAL CREATION
// ==========================================

// Create modal container
const modal = document.createElement("div");
modal.id = "post-modal";
modal.style.cssText = `
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0,0,0,0.7);
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

// Inner modal box
const modalBox = document.createElement("div");
modalBox.style.cssText = `
  background: white;
  padding: 20px;
  width: 300px;
  border-radius: 8px;
  text-align: center;
`;

modal.appendChild(modalBox);
document.body.appendChild(modal);

// Close modal on click outside
modal.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});

// Function to show popup
function showPostPopup(post) {
  modalBox.innerHTML = `
    <h3>${post.topic}</h3>
    <p><strong>Started By:</strong> ${post.startedBy}</p>
    <p><strong>Replies:</strong> ${post.replies}</p>
    <button id="close-modal" style="
      margin-top:10px;
      padding:6px 12px;
      border:none;
      background:#444;
      color:white;
      border-radius:4px;
      cursor:pointer">
      Close
    </button>
  `;
  modal.style.display = "flex";

  document.getElementById("close-modal").onclick = () => {
    modal.style.display = "none";
  };
}

// ==========================================
// SECTION 8: RENDER POSTS + ADD CLICK EVENTS
// ==========================================

function renderPosts(posts) {
  let tbody = forumTbody || document.querySelector(".forum-topics-section table tbody");
  if (!tbody) return;
  tbody.innerHTML = "";

  posts.forEach(post => {
    const tr = document.createElement("tr");

    const tdTopic = document.createElement("td");
    tdTopic.textContent = post.topic;

    const tdStartedBy = document.createElement("td");
    tdStartedBy.textContent = post.startedBy;

    const tdReplies = document.createElement("td");
    tdReplies.textContent = String(post.replies);

    tr.appendChild(tdTopic);
    tr.appendChild(tdStartedBy);
    tr.appendChild(tdReplies);

    // 🔥 Add popup event
    tr.style.cursor = "pointer";
    tr.addEventListener("click", () => showPostPopup(post));

    tbody.appendChild(tr);
  });
}

// ==========================================
// SECTION 9: ABOUT PAGE POSTS
// ==========================================

const aboutPagePosts = [
  { topic: "About SoundStory - Our Mission", startedBy: "admin", replies: 3 },
  { topic: "Community Guidelines", startedBy: "moderator", replies: 5 },
  { topic: "Meet the Team", startedBy: "founder", replies: 2 },
];

// ==========================================
// SECTION 10: ABOUT LINK HANDLER
// ==========================================

const aboutLink = document.querySelector('a[href="about.html"]');

if (aboutLink) {
  aboutLink.addEventListener("click", function (event) {
    event.preventDefault(); // Stop page navigation
    renderPosts(aboutPagePosts); // Replace table
    if (mainHeading) mainHeading.focus();
    console.log("About clicked: forum topics replaced with About content.");
  });
}
