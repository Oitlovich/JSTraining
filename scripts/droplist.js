document.addEventListener("DOMContentLoaded", function() {
    var dropdown = document.querySelector(".dropdown");
    var dropbtn = document.querySelector(".dropbtn");
    var dropdownContent = document.querySelector(".dropdown-content");

    dropbtn.addEventListener("mouseover", function() {
        dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
    });

    window.addEventListener("mouseover", function(event) {
        if (!dropdown.contains(event.target)) {
            dropdownContent.style.display = "none";
        }
    });
});