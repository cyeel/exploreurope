
//elemen popup
const popup = document.getElementById("festival-popup");
const popupTitle = document.getElementById("popup-title");
const popupImage = document.getElementById("popup-image");
const popupDesc = document.getElementById("popup-desc");
const closeBtn = document.querySelector(".close");

//elemen tanggal festival
document.querySelectorAll(".festival").forEach(day => {
  day.addEventListener("click", () => {
    const festival = day.dataset.festival; //ambil nama festival

    //isi konten
    switch (festival) {
      case "festivalmusik":
        popupImage.src = "img/natalediroma.jpg";
        popupImage.style.width = "300px"; 
        popupImage.style.borderRadius = "10px"; 
        popupTitle.textContent = "Fête de la Musique";
        popupDesc.innerHTML = `
            📍 All over Paris<br><br>
            🎶 Annual music festival with free concerts throughout the city.`;
        break;
      case "estateromana":
        popupImage.src = "img/estateromana";
        popupImage.style.width = "300px"; 
        popupImage.style.borderRadius = "10px"; 
        popupTitle.textContent = "Estate Romana (Rome summer festival)";
        popupDesc.innerHTML = `
            📍 The whole city of Rome<br><br>
            🎭 Cultural events throughout the summer, open-air concerts and films.<br><br>
            📅 Starts today!`;
        break;
      case "primavera":
        popupImage.src = "img/primavera.jpg";
        popupImage.style.width = "300px"; 
        popupImage.style.borderRadius = "10px"; 
        popupTitle.textContent = "Primavera Sound Festival";
        popupDesc.innerHTML = `
            📍 Parc del Fòrum<br><br>
            🎵 Spain's largest international indie and pop music festival.<br><br>
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
