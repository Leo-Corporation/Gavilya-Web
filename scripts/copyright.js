let p = document.getElementById("copyright-p");
let year = new Date().getFullYear();
console.info(year);
p.innerHTML = "© " + year + " Léo Corporation";