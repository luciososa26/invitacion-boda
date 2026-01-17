const text = "Tenemos una noticia...";
const element = document.getElementById("typing");

let index = 0;

function type() {
  if (!element) return; 

  if (index < text.length) {
    element.textContent += text.charAt(index);
    index++;
    setTimeout(type, 150);
  }
}

type();
