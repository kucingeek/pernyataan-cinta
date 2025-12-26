const params = new URLSearchParams(window.location.search);

// MODE BACA SAJA (PENERIMA)
if (params.has("nama")) {
  document.querySelector(".form-card").classList.add("hidden");
  document.querySelector(".result-card").classList.remove("hidden");

  document.getElementById("hasilNama").innerText = params.get("nama");
  document.getElementById("hasilPesan1").innerText = params.get("p1");
  document.getElementById("hasilPesan2").innerText = params.get("p2");

  playMusic();
}

// PEMBUAT LINK
function buatPernyataan() {
  const nama = encodeURIComponent(
    document.getElementById("nama").value || "Kamu"
  );
  const p1 = encodeURIComponent(document.getElementById("pesan1").value);
  const p2 = encodeURIComponent(document.getElementById("pesan2").value);

  const url = `${window.location.origin}${window.location.pathname}?nama=${nama}&p1=${p1}&p2=${p2}`;

  document.getElementById("shareLink").value = url;

  document.querySelector(".form-card").classList.add("hidden");
  document.querySelector(".result-card").classList.remove("hidden");

  document.getElementById("hasilNama").innerText = decodeURIComponent(nama);
  document.getElementById("hasilPesan1").innerText = decodeURIComponent(p1);
  document.getElementById("hasilPesan2").innerText = decodeURIComponent(p2);

  playMusic();
}

// MUSIK
function playMusic() {
  const music = document.getElementById("bgMusic");
  music.volume = 0.5;
  music.play().catch(() => {});
}

// TERIMA CINTA
function terimaCinta() {
  document.getElementById("response").classList.remove("hidden");
}

// COPY LINK
function copyLink() {
  const link = document.getElementById("shareLink");
  link.select();
  document.execCommand("copy");
  alert("Link berhasil disalin 💕");
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart-bg");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 4 + "s";
  heart.style.fontSize = 14 + Math.random() * 20 + "px";

  document.querySelector(".hearts-container").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

// buat hati terus muncul
setInterval(createHeart, 500);
