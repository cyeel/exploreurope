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
        popupTitle.textContent = "Fête de la Musique";
        popupDesc.innerHTML = `
            📍 Carrousel du Louvre & lokasi eksklusif lainnya<br><br>
            👗 Salah satu acara mode paling bergengsi di dunia.<br><br>
            📅 Berakhir hari ini!`;
        break;
        case "alf":
          popupImage.src = "img/amsterdamlightfestival.jpg";
          popupImage.style.width = "300px"; 
          popupImage.style.borderRadius = "10px"; 
          popupTitle.textContent = "Amsterdam Light Festival";
          popupDesc.innerHTML = `
             📍 Kanal Amsterdam<br><br>
             💡 Instalasi seni cahaya di sepanjang kanal<br><br>
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