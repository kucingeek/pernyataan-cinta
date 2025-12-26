const music = document.getElementById("bgMusic");
const heartsContainer = document.querySelector(".hearts-container");

// ===============================
// HATI BERTERBANGAN
// ===============================
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart-bg";
  heart.innerText = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = 14 + Math.random() * 20 + "px";
  heart.style.animationDuration = 5 + Math.random() * 5 + "s";

  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 10000);
}
setInterval(createHeart, 400);

// ===============================
// PEMBUAT: BUAT LINK
// ===============================
function buatPernyataan() {
  const nama = document.getElementById("nama").value.trim();
  const pesan1 = document.getElementById("pesan1").value.trim();
  const pesan2 = document.getElementById("pesan2").value.trim();

  if (!nama || !pesan1 || !pesan2) {
    alert("Isi semuanya dulu ya 💖");
    return;
  }

  const params = new URLSearchParams({
    n: nama,
    p1: pesan1,
    p2: pesan2,
  });

  const link = `${location.origin}${location.pathname}?${params.toString()}`;
  document.getElementById("shareLink").value = link;

  // Tampilkan hasil untuk pembuat (tanpa musik)
  tampilkanPesan(nama, pesan1, pesan2);
}

// ===============================
// TAMPILKAN PESAN
// ===============================
function tampilkanPesan(nama, pesan1, pesan2) {
  document.getElementById("hasilNama").textContent = nama;
  document.getElementById("hasilPesan1").textContent = pesan1;
  document.getElementById("hasilPesan2").textContent = pesan2;

  document.getElementById("formCard").classList.add("hidden");
  document.getElementById("openCard").classList.add("hidden");
  document.getElementById("resultCard").classList.remove("hidden");
}

// ===============================
// PENERIMA: BUKA PESAN (MUSIK MULAI)
// ===============================
function bukaPesan() {
  music.volume = 0.6;
  music.play().catch(() => {});

  const params = new URLSearchParams(location.search);
  tampilkanPesan(params.get("n"), params.get("p1"), params.get("p2"));
}

// ===============================
// TERIMA CINTA
// ===============================
function terimaCinta() {
  document.getElementById("response").classList.remove("hidden");
}

// ===============================
// COPY LINK
// ===============================
function copyLink() {
  const input = document.getElementById("shareLink");
  input.select();
  document.execCommand("copy");
  alert("Link berhasil disalin 💌");
}

// ===============================
// AUTO MODE PENERIMA
// ===============================
window.onload = () => {
  const params = new URLSearchParams(location.search);

  if (params.has("n")) {
    // MODE PENERIMA
    document.getElementById("formCard").classList.add("hidden");
    document.getElementById("openCard").classList.remove("hidden");
  }
};
