const C4 = new Audio("Fl-1.mp3");
const Db4 = new Audio("Fl-3.mp3");
const D4 = new Audio("Fl-5_2.mp3");
const Eb4 = new Audio("Fl-6.mp3");
const F4 = new Audio("Fl-7.mp3");
const E4 = new Audio("Fl-8.mp3");

const playsound = audio => {
    const clone = audio.cloneNode();
    clone.play();
    setTimeout(() => (clone.volume = 0.8),400);
    setTimeout(() => (clone.volume = 0.6),800);
    setTimeout(() => (clone.volume = 0.4),1200);
    setTimeout(() => (clone.volume = 0.2),1600);
    setTimeout(() => (clone.volume = 0),2000);
};

// c4
const C4key = document.querySelector(".C4");
const playC4 = () => {
    playsound(C4);
    C4key.classList.add("active");
    // document.getElementById("btn1").style.backgroundColor = "red";
    setTimeout(() => C4key.classList.remove("active"), 300);
};
C4key.addEventListener("click", playC4);

// Db4
const Db4key = document.querySelector(".Db4");
const playDb4 = () => {
    playsound(Db4);
    Db4key.classList.add("active");
    setTimeout(() => Db4key.classList.remove("active"), 300);
};
Db4key.addEventListener("click", playDb4);

// D4
const D4key = document.querySelector(".D4");
const playD4 = () => {
    playsound(D4);
    D4key.classList.add("active");
    setTimeout(() => D4key.classList.remove("active"), 300);
};
D4key.addEventListener("click", playD4);

// Eb4
const Eb4key = document.querySelector(".Eb4");
const playEb4 = () => {
    playsound(Eb4);
    Eb4key.classList.add("active");
    setTimeout(() => Eb4key.classList.remove("active"), 300);
};
Eb4key.addEventListener("click", playEb4);

// E4
const E4key = document.querySelector(".E4");
const playE4 = () => {
    playsound(E4);
    E4key.classList.add("active");
    setTimeout(() => E4key.classList.remove("active"), 300);
};
E4key.addEventListener("click", playE4);

// F4
const F4key = document.querySelector(".F4");
const playF4 = () => {
    playsound(F4);
    F4key.classList.add("active");
    setTimeout(() => F4key.classList.remove("active"), 300);
};
F4key.addEventListener("click", playF4);
