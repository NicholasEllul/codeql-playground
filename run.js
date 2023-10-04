var data = new URLSearchParams(window.location.search);

document.getElementById("demo").innerHTML = data.get("dangerousUserInput");