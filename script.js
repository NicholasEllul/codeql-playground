// This script takes a URL parameter and directly inserts it into the page without sanitizing it
var data = new URLSearchParams(window.location.search);
document.getElementById("demo").innerHTML = data.get("userInput");

document.getElementById("demo").innerHTML = data.get("otherInput");