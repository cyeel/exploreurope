
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
            🎉 Peringatan berdirinya kota Roma (tahun 753 SM) dengan parade Romawi kuno.`;
        break;
      case "kings-day":
        popupImage.src = "img/koningsdag.jpg";
        popupImage.style.width = "300px"; 
        popupImage.style.borderRadius = "10px"; 
        popupTitle.textContent = "King's day (Koningsdag)";
        popupDesc.innerHTML = `
            📍 Sepanjang kanal Amsterdam<br><br>
            🧡 Hari nasional Belanda, seluruh kota berubah jadi lautan oranye.`;
        break;
      case "tulip-festival":
        popupImage.src = "img/tulipfestival.jpg";
        popupImage.style.width = "300px"; 
        popupImage.style.borderRadius = "10px"; 
        popupTitle.textContent = "Festival Tulip";
        popupDesc.innerHTML = `
            📍 Keukenhof dan pusat kota<BR><br>
            🌷 Ribuan bunga tulip bermekaran di taman-taman Amsterdam.`;
        break;
      case "sechselauten":
        popupImage.src = "img/sechselauten.jpg";
        popupImage.style.width = "300px"; 
        popupImage.style.borderRadius = "10px";
        popupTitle.textContent = "Sechseläuten";
        popupDesc.innerHTML =   `
            📍 Bellevueplatz<br><br>
            🔥 Festival membakar boneka salju “Böögg” menandai akhir musim dingin.`;
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
