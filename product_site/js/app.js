/*
 * Author: SoundStory Development Team
 * Date: October 23, 2025
 * Description: Simple JavaScript file for SoundStory music forum
 * This script updates text content and performs basic calculations on the site.
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

// Calculate total members
let totalMembers = memberCount + newMembers;

// Calculate average posts per member
let avgPosts = postCount / totalMembers;
avgPosts = Math.round(avgPosts); // Round to whole number

// Calculate percentage growth
let growthPercent = (newMembers / memberCount) * 100;
growthPercent = growthPercent.toFixed(1); // One decimal place

// ==========================================
// SECTION 3: SELECT HTML ELEMENTS
// ==========================================

// Use getElementById
let mainHeading = document.getElementById('main-content');

// Use getElementsByClassName
let statBoxes = document.getElementsByClassName('stat-box');

// Use getElementsByTagName
let allParagraphs = document.getElementsByTagName('p');

// Use querySelector
let headerLogo = document.querySelector('.header-logo');

// Use querySelectorAll
let allLinks = document.querySelectorAll('a');

// ==========================================
// SECTION 4: UPDATE TEXT WITH textContent
// ==========================================

// Update header logo text
if (headerLogo) {
    headerLogo.textContent = siteName;
}

// Update first paragraph if it exists
if (allParagraphs.length > 0) {
    allParagraphs[0].textContent = welcomeMessage + " We now have " + totalMembers + " members!";
}

// Update stat boxes if they exist
if (statBoxes.length > 0) {
    let firstStat = statBoxes[0].querySelector('.stat-number');
    if (firstStat) {
        firstStat.textContent = totalMembers;
    }
}

// ==========================================
// SECTION 5: UPDATE HTML WITH innerHTML
// ==========================================

// Add a welcome banner to the page
if (mainHeading) {
    let banner = document.createElement('div');
    banner.innerHTML = '<h2>🎵 Featured Artist: <em>' + featuredArtist + '</em> 🎵</h2>';
    banner.innerHTML += '<p><strong>Community Stats:</strong> ' + totalMembers + ' total members</p>';
    banner.innerHTML += '<p>Average posts per member: <strong>' + avgPosts + '</strong></p>';
    banner.innerHTML += '<p>Growth rate: <strong>' + growthPercent + '%</strong></p>';
    mainHeading.appendChild(banner);
}

// Update a paragraph with HTML formatting
if (allParagraphs.length > 1) {
    allParagraphs[1].innerHTML = 'Join <strong>' + siteName + '</strong> today and connect with <em>' + totalMembers + ' music lovers</em>!';
}

// ==========================================
// SECTION 6: CONSOLE OUTPUT FOR TESTING
// ==========================================

console.log('JavaScript loaded successfully!');
console.log('Total Members:', totalMembers);
console.log('Average Posts:', avgPosts);
console.log('Growth:', growthPercent + '%');