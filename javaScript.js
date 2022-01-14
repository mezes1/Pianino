const bir = document.querySelector(".b"),
  birB = document.querySelector(".as"),
  ikki = document.querySelector(".a"),
  ikkiB = document.querySelector(".gs"),
  uch = document.querySelector(".g"),
  uchB = document.querySelector(".fs"),
  tort = document.querySelector(".f"),
  besh = document.querySelector(".e"),
  beshB = document.querySelector(".ds"),
  olti = document.querySelector(".d"),
  oltiB = document.querySelector(".cs"),
  yetti = document.querySelector(".c");

const birM = document.querySelector(".birmp"),
  birBM = document.querySelector(".birbmp"),
  ikkiM = document.querySelector(".ikkimp"),
  ikkiBM = document.querySelector(".ikkibmp"),
  uchM = document.querySelector(".uchmp"),
  uchBM = document.querySelector(".uchbmp"),
  tortM = document.querySelector(".tortmp"),
  beshM = document.querySelector(".beshmp"),
  beshBM = document.querySelector(".beshbmp"),
  oltiM = document.querySelector(".oltimp"),
  oltiBM = document.querySelector(".oltibmp"),
  yettiM = document.querySelector(".yettimp");

// bir.addEventListener("click", () => {
//   birM.controls();
// });
bir.addEventListener("mousedown", () => {
  birM.load();
  birM.play();
});

birB.addEventListener("mousedown", () => {
  birBM.load();
  birBM.play();
});

ikki.addEventListener("mousedown", () => {
  ikkiM.load();
  ikkiM.play();
});

ikkiB.addEventListener("mousedown", () => {
  ikkiBM.load();
  ikkiBM.play();
});

uch.addEventListener("mousedown", () => {
  uchM.load();
  uchM.play();
});

uchB.addEventListener("mousedown", () => {
  uchBM.load();
  uchBM.play();
});

tort.addEventListener("mousedown", () => {
  tortM.load();
  tortM.play();
});

besh.addEventListener("mousedown", () => {
  beshM.load();
  beshM.play();
});

beshB.addEventListener("mousedown", () => {
  beshBM.load();
  beshBM.play();
});

olti.addEventListener("mousedown", () => {
  oltiM.load();
  oltiM.play();
});

oltiB.addEventListener("mousedown", () => {
  oltiBM.load();
  oltiBM.play();
});

yetti.addEventListener("mousedown", () => {
  yettiM.load();
  yettiM.play();
});
