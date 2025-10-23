
    var myZodiacSign = "Gemini";
    var myBirthMonth = "May";
    var mybirthDay = 25;
    var myLuckyNumber = 3.0;
    var myHoroscopeDescription = "Geminis are very intelligent and pick up knowledge quickly. They are perceptive, analytical, and often very funny. They have an unreserved, childlike curiosity, always asking new questions. Geminis have an uncanny ability to size up a person's character in a matter of seconds, even if they only just met them.";
    var doIBelieveInAstrology = true;

    var signElement = document.getElementById("sign") = "sign";
    document.getElementById("sign").textContent = sign;
    signElement.textContent = myZodiacSign;

    var myElement = document.getElementsByClassName("birthday");
    myElement[0].textContent += myBirthMonth + " " + mybirthDay.toString() + "th";

    var luckyNumElement = document.getElementsByClassName("luckyNum");
    luckyNumElement[0].textContent += myLuckyNumber.toString();

    var paragraphElements = document.getElementsByTagName("p");
    paragraphElements[0].textContent = myHoroscopeDescription;
    paragraphElements[1].innerHTML += " <strong>" + doIBelieveInAstrology.toString() + "</strong>";



    // Create a new variable and assign it an integer/float value representing the mood rating of your zodiac sign.  
// Create new variables and assign them integer/float values representing the mood ratings of your partners’ zodiac signs. 
// Calculate the average mood rating of you and your partners. 
// Use the appropriate DOM method to select the new paragraph you created and display a message showing your mood rating and the average mood rating of you and your partners. The message should be similar to the following: "Today's mood rating for Leo: 4.5 out of 5. The average mood rating of Leo, Libra, and Gemini is: 3.8."

    var myMoodRating = 4.5;
    var partner1MoodRating = 3.8;
    var partner2MoodRating = 4.0;
    
    var averageMoodRating = (myMoodRating + partner1MoodRating + partner2MoodRating) / 3;
    paragraphElements[2].textContent = "Today's mood rating for " + myZodiacSign + ": " + myMoodRating.toFixed(1) + " out of 5. The average mood rating of " + myZodiacSign + " and Aquarius is: " + averageMoodRating.toFixed(1) + ".";
// console.log("Welcome to Cosmic Horoscopes! 🌟Discover your destiny today.");

var signs = [ "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];

var mySign = signs[5];

var partner1 = signs[5];
var partner2 = signs[1];


paragraphElements[3].innerHTML = "My Zodiac Sign is " + mySign;
paragraphElements[4].innerHTML = "Mithilesh's Zodiac Sign is " + partner1;
paragraphElements[5].innerHTML = "Nick's Zodiac Sign is " + partner2; 


var descriptions = ["Today is a day for new beginnings. Embrace change and seize opportunities.",
"Your determination will lead to success today. Stay focused on your goals.",
"Communication is key today. Express yourself clearly and listen to others.",
"Trust your intuition. It will guide you in making the right decisions.",
"Your creativity shines today. Use it to inspire and lead others.",
"Pay attention to the details. Your meticulous work will pay off.",
"Balance is essential. Find harmony in all aspects of your life.",
"Embrace transformation. Let go of what no longer serves you.",
"Adventure awaits. Explore new horizons and expand your horizons.",
"Hard work leads to success. Keep pushing toward your goals.",
"Your unique perspective is an asset. Share your ideas with others.",
"Trust your emotions. They will guide you in making the right choices."
]


var myDescription = descriptions[5];
var partner1Description = descriptions[5];
var partner2Description = descriptions[1];


descriptions[3] = "This is the best zodiac description ever written.";

paragraphElements[6].innerHTML = "Gemini Horoscope: " + myDescription + "<br>Aquarius Horoscope: " + partner2Description;


