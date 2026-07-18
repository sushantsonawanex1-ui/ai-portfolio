const text = "Python Developer | AI Enthusiast | Future AI Engineer";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 70);
    }
}

typeEffect();
