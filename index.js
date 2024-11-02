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


// Search input

// var productContainer= document.getElementById("product-container")

// var search = document.getElementById("search")

// var productlist = productContainer.querySelectorAll("div")





    var productContainer = document.getElementById("product-container");
    var search = document.getElementById("search");
    var productList = productContainer.querySelectorAll("div");

    search.addEventListener("keyup", function (event) {
        var enteredValue = event.target.value.toUpperCase();

        for (var count = 0; count < productList.length; count++) {
            var productName = productList[count].querySelector("h1").textContent;

            if (productName.toUpperCase().indexOf(enteredValue) < 0) {
                productList[count].style.display = "none";
            } else {
                productList[count].style.display = "block";
            }
        }
    });
