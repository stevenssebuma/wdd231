// Get the hamburger and close elements  
const hamburger = document.getElementById("hamburger");  
const closeBtn = document.getElementById("close");  
const nav = document.getElementById("nav");  

// Toggle the navigation menu and icons  
hamburger.onclick = function() {  
    nav.classList.toggle("active"); // Toggle the 'active' class on the nav  
    toggleIcons();  
};  

closeBtn.onclick = function() {  
    nav.classList.remove("active"); // Remove the 'active' class on the nav  
    toggleIcons();  
};  

// Function to toggle between hamburger and close icons  
function toggleIcons() {  
    if (nav.classList.contains("active")) {  
        hamburger.style.display = "none"; // Hide hamburger when active  
        closeBtn.style.display = "block"; // Show close button when nav is active  
    } else {  
        hamburger.style.display = "block"; // Show hamburger when nav is inactive  
        closeBtn.style.display = "none"; // Hide close button when nav is inactive  
    }  
}