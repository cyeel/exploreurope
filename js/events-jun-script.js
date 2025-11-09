
//elemen popup
const popup = document.getElementById("festival-popup");
const popupTitle = document.getElementById("popup-title");
const popupImage = document.getElementById("popup-image");
const popupDesc = document.getElementById("popup-desc");
const closeBtn = document.querySelector(".close");

//elemen tanggal festival
document.querySelectorAll(".festival").forEach(day => {
  day.addEventListener("click", () => {
    const festival = day.dataset.festival; // ambil nama festival

    //isi konten
    switch (festival) {
      case "festivalmusik":
        popupImage.src = "img/natalediroma.jpg";
        popupImage.style.width = "300px"; 
        popupImage.style.borderRadius = "10px"; 
        popupTitle.textContent = "Fête de la Musique";
        popupDesc.innerHTML = `
            📍 Seluruh Paris<br><br>
            🎶 Festival musik tahunan dengan konser gratis di seluruh kota.`;
        break;
      case "estateromana":
        popupImage.src = "img/estateromana";
        popupImage.style.width = "300px"; 
        popupImage.style.borderRadius = "10px"; 
        popupTitle.textContent = "Estate Romana (Festival Musim Panas Romawi)";
        popupDesc.innerHTML = `
            📍 Seluruh kota Roma<br><br>
            🎭 Acara budaya sepanjang musim panas, konser & film terbuka.<br><br>
            📅 Dimulainya dari hari ini!`;
        break;
      case "primavera":
        popupImage.src = "img/primavera.jpg";
        popupImage.style.width = "300px"; 
        popupImage.style.borderRadius = "10px"; 
        popupTitle.textContent = "Primavera Sound Festival";
        popupDesc.innerHTML = `
            📍 Parc del Fòrum<br><br>
            🎵 Festival musik indie dan pop internasional terbesar di Spanyol.<br><br>
            📅 Berakhir hari ini!`;
        break;
    }

    //tampilann
    popup.style.display = "flex";
  });
});

//biar nutup di luar
popup.addEventListener("click", e => {
  if (e.target === popup) popup.style.display = "none";
});

//tombol x buat nutup
closeBtn.addEventListener("click", () => popup.style.display = "none");
