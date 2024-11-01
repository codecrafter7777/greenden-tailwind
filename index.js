var sidenavbar = document.getElementById("sidenav");
var menuicon = document.getElementById("menuicon"); // Ensure this ID is set on the menu icon SVG
var closenav = document.getElementById("close-nav");

// Open side navbar
menuicon.addEventListener("click", function() {
    sidenavbar.style.right = "0"; // Use quotes for values
});

// Close side navbar
closenav.addEventListener("click", function() {
    sidenavbar.style.right = "-50%"; // Use a percentage or fixed value
});
