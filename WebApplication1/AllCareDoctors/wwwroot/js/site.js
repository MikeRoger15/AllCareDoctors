// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.
// Write your JavaScript code.

document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.querySelector(".search-icon");
    const searchBox = document.querySelector(".search-box");

    searchIcon.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents the click from closing immediately
        searchBox.style.display = searchBox.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", function (event) {
        if (!searchBox.contains(event.target) && event.target !== searchIcon) {
            searchBox.style.display = "none"; // Closes search when clicking outside
        }
    });
});

function toggleSearch() {
    const searchBox = document.querySelector('.search-box');
    if (searchBox.style.display === "block") {
        searchBox.style.display = "none";
    } else {
        searchBox.style.display = "block";
    }
}