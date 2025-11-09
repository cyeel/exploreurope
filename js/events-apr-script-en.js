
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
      case "rome-birthday":
        popupImage.src = "img/natalediroma.jpg";
        popupImage.style.width = "300px"; 
        popupImage.style.borderRadius = "10px"; 
        popupTitle.textContent = "Natale di Roma";
        popupDesc.innerHTML = `
            📍 Via dei Fori Imperiali<br><br>
            🎉 Commemorating the founding of the city of Rome (753 BC) with an ancient Roman parade.`;
        break;
      case "kings-day":
        popupImage.src = "img/koningsdag.jpg";
        popupImage.style.width = "300px"; 
        popupImage.style.borderRadius = "10px"; 
        popupTitle.textContent = "King's day (Koningsdag)";
        popupDesc.innerHTML = `
            📍 Along the Amsterdam canals<br><br>
            🧡 Dutch national day, the whole city turns into a sea of ​​orange.`;
        break;
      case "tulip-festival":
        popupImage.src = "img/tulipfestival.jpg";
        popupImage.style.width = "300px"; 
        popupImage.style.borderRadius = "10px"; 
        popupTitle.textContent = "Tulip's Festival";
        popupDesc.innerHTML = `
            📍 Keukenhof dan city center<BR><br>
            🌷 Thousands of tulips bloom in Amsterdam's parks.`;
        break;
      case "sechselauten":
        popupImage.src = "img/sechselauten.jpg";
        popupImage.style.width = "300px"; 
        popupImage.style.borderRadius = "10px";
        popupTitle.textContent = "Sechseläuten";
        popupDesc.innerHTML =   `
            📍 Bellevueplatz<br><br>
            🔥 The “Böögg” snowman burning festival marks the end of winter.`;
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
