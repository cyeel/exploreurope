
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
        popupTitle.textContent = "Paris fashion week";
        popupDesc.innerHTML = `
            📍 Carrousel du Louvre & othe exclusive locations<br><br>
            👗 One of the most prestigious fashion events in the world.`;
        break;
      case "estateromana":
        popupImage.src = "img/estateromana.jpg";
        popupImage.style.width = "300px"; 
        popupImage.style.borderRadius = "10px"; 
        popupTitle.textContent = "Estate Romana (Rome summer festival)";
        popupDesc.innerHTML = `
            📍 The whole city of rome<br><br>
            🎭 Cultural events throughout the summer, open-air concerts and films.<br><br>
            📅 Ends today!`;
        break;
      case "lmf":
        popupImage.src = "img/lamorce.jpg";
        popupImage.style.width = "300px"; 
        popupImage.style.borderRadius = "10px"; 
        popupTitle.textContent = "Primavera Sound Festival";
        popupDesc.innerHTML = `
            📍 Plaça de Sant Jaume<br><br>
            🎇 Barcelona's biggest annual festival, parade and human fire show.`;
        break;
      case "zff":
        popupImage.src = "img/zurichfilmfestival.jpg";
        popupImage.style.width = "300px"; 
        popupImage.style.borderRadius = "10px"; 
        popupTitle.textContent = "Zurich Film Festival";
        popupDesc.innerHTML = `
            📍 Kongresshaus Zurich<br><br>
            🎬 Europe's prestigious film festival showcases works from around the world. <br><br>
            📅 Starts today!`;
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
