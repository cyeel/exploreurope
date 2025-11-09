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
            📍 Carrousel du Louvre & other exclusive location<br><br>
            👗 One of the most prestigious fashion events in the world<br><br>
            📅 Ends today!`;
        break;
        case "alf":
          popupImage.src = "img/amsterdamlightfestival.jpg";
          popupImage.style.width = "300px"; 
          popupImage.style.borderRadius = "10px"; 
          popupTitle.textContent = "Amsterdam Light Festival";
          popupDesc.innerHTML = `
             📍 Amsterdam canals<br><br>
             💡 Light art installations along the canal<br><br>
              📅 Ends today!`;
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