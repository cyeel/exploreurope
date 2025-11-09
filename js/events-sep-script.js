
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
      case "pwf":
        popupImage.src = "img/parisfashionweek.jpg";
        popupImage.style.width = "300px"; 
        popupImage.style.borderRadius = "10px"; 
        popupTitle.textContent = "Paris Fashion Week";
        popupDesc.innerHTML = `
            📍 Carrousel du Louvre & lokasi eksklusif lainnya<br><br>
            👗 Salah satu acara mode paling bergengsi di dunia.`;
        break;
      case "estateromana":
        popupImage.src = "img/estateromana.jpg";
        popupImage.style.width = "300px"; 
        popupImage.style.borderRadius = "10px"; 
        popupTitle.textContent = "Estate Romana (Festival Musim Panas Romawi)";
        popupDesc.innerHTML = `
            📍 Seluruh kota Roma<br><br>
            🎭 Acara budaya sepanjang musim panas, konser & film terbuka.<br><br>
            📅 Berakhir hari ini!`;
        break;
      case "lmf":
        popupImage.src = "img/lamorce.jpg";
        popupImage.style.width = "300px"; 
        popupImage.style.borderRadius = "10px"; 
        popupTitle.textContent = "Primavera Sound Festival";
        popupDesc.innerHTML = `
            📍 Plaça de Sant Jaume<br><br>
            🎇 Festival tahunan terbesar Barcelona, parade, dan pertunjukan api manusia.`;
        break;
      case "zff":
        popupImage.src = "img/zurichfilmfestival.jpg";
        popupImage.style.width = "300px"; 
        popupImage.style.borderRadius = "10px"; 
        popupTitle.textContent = "Zurich Film Festival";
        popupDesc.innerHTML = `
            📍 Kongresshaus Zurich<br><br>
            🎬 Festival film bergengsi Eropa menampilkan karya dari seluruh dunia. <br><br>
            📅 Dimulai hari ini!`;
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
