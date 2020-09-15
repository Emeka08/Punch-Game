let punch = document.getElementById("punch");
let restart = document.getElementById("restart");
let image = document.getElementById("image");
let progressbar = document.getElementsByClassName("progressbar");

let avartarLife = progressbar.length;

let startPunch = () => {
  if (avartarLife >= 1) {
    avartarLife--;
    progressbar[avartarLife].style.display = "none";
    if (avartarLife >= 1) {
      progressbar[avartarLife - 1].style.borderRadius = "0 4px 4px 0";
    }
    if (avartarLife === 0) {
      image.setAttribute("src", "./img/beat-up-punch-bag.jpeg");
      punch.style.display = "none";
    }
  }
};

let endFight = () => {
  avartarLife = progressbar.length;
  image.setAttribute("src", "./img/punch-bag.jpeg");
  punch.style.display = "inline-block";
  for (let i = 0; i < progressbar.length; i++) {
    progressbar[i].style.display = "block";
    progressbar[i].style.borderRadius = "0";
  }
};

punch.addEventListener("click", startPunch);
restart.addEventListener("click", endFight);
