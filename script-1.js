// Typing effect
const text = ["B.sc computer science Student", "Web Developer", "Tech Enthusiast", "Karate Player"];
let index=0, charIndex=0;

function typeEffect(){
  if(charIndex < text[index].length){
    document.getElementById("typing").innerHTML += text[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect(){
  if(charIndex > 0){
    document.getElementById("typing").innerHTML = text[index].substring(0,charIndex-1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    index = (index+1)%text.length;
    setTimeout(typeEffect, 200);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Modal for certificates
function openModal(title){
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modal-title").innerText = title;
}
function closeModal(){
  document.getElementById("modal").style.display = "none";
}