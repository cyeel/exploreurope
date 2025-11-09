const itineraries = {
  2: [
    {
      title: "Paris Romantis",
      image: "img/paris.jpg",
      location: "Menara Eiffel & Louvre Museum",
      hotel: "Hotel Lumière - Rue de Rivoli, Paris (📞 +33 1 42 96 00 00)",
      cost: "💰 Perkiraan biaya: €400",
      transport: "🚆 Metro Paris sangat efisien untuk berpindah antar lokasi.",
      days: [
        { day: "Day 1", detail: "Menara Eiffel di pagi hari, lalu makan siang di Café Gustave. Sore kunjungi Museum Louvre." },
        { day: "Day 2", detail: "Nikmati taman Tuileries dan jalan-jalan di Champs-Élysées sebelum berbelanja di Galeries Lafayette." }
      ]
    },
    {
      title: "Amsterdam Santai",
      image: "img/amsterdam.jpg",
      location: "Canal Belt & Rijksmuseum",
      hotel: "Canal View Hotel - Keizersgracht 89 (📞 +31 20 555 1234)",
      cost: "💰 Perkiraan biaya: €350",
      transport: "🚴 Disarankan menyewa sepeda untuk menjelajah kanal dan museum.",
      days: [
        { day: "Day 1", detail: "Eksplor kanal dan Rijksmuseum. Sore menikmati kopi di kafe tepi sungai." },
        { day: "Day 2", detail: "Kunjungi Keukenhof dan pasar bunga Bloemenmarkt." }
      ]
    }
  ],
  3: [
    {
      title: "Swiss Adventure",
      image: "img/zurich.jpg",
      location: "Zurich - Lucerne - Interlaken",
      hotel: "AlpenStay - Zurich Center (📞 +41 44 333 9999)",
      cost: "💰 Perkiraan biaya: CHF 700",
      transport: "🚆 Gunakan Swiss Travel Pass untuk hemat dan cepat antar kota.",
      days: [
        { day: "Day 1", detail: "Jalan-jalan di tepi Danau Zurich dan belanja di Bahnhofstrasse." },
        { day: "Day 2", detail: "Naik kereta ke Lucerne, kunjungi Chapel Bridge dan Lion Monument." },
        { day: "Day 3", detail: "Nikmati pemandangan pegunungan di Interlaken dan danau Thun." }
      ]
    },
    {
      title: "Italia Heritage Trip",
      image: "img/italy.jpg",
      location: "Roma - Florence - Venice",
      hotel: "Hotel Venezia - Roma (📞 +39 06 998 2345)",
      cost: "💰 Perkiraan biaya: €600",
      transport: "🚄 Gunakan kereta cepat Trenitalia untuk perjalanan antar kota.",
      days: [
        { day: "Day 1", detail: "Keliling Colosseum dan Fontana di Trevi di Roma." },
        { day: "Day 2", detail: "Ke Florence, kunjungi Duomo dan Uffizi Gallery." },
        { day: "Day 3", detail: "Menikmati naik gondola di Venice dan makan malam di tepi kanal." }
      ]
    }
  ],
  4: [
    {
      title: "Scandinavia Highlights",
      image: "img/scandinavia.jpg",
      location: "Oslo - Stockholm - Copenhagen",
      hotel: "Nordic Stay - Copenhagen (📞 +45 88 33 2211)",
      cost: "💰 Perkiraan biaya: €950",
      transport: "🛳 Kombinasi ferry & kereta malam adalah pilihan seru!",
      days: [
        { day: "Day 1", detail: "Mulai di Oslo, kunjungi Vigeland Park dan Opera House." },
        { day: "Day 2", detail: "Naik ferry ke Stockholm, eksplor Gamla Stan dan Royal Palace." },
        { day: "Day 3", detail: "Kereta ke Copenhagen, nikmati Tivoli Gardens." },
        { day: "Day 4", detail: "Keliling kanal dan berfoto di Little Mermaid statue." }
      ]
    },
    {
      title: "Central Europe Explorer",
      image: "img/centraleurope.jpg",
      location: "Prague - Vienna - Budapest",
      hotel: "Hotel Imperial - Vienna (📞 +43 1 50110)",
      cost: "💰 Perkiraan biaya: €800",
      transport: "🚆 Gunakan rail pass untuk efisiensi dan fleksibilitas.",
      days: [
        { day: "Day 1", detail: "Mulai di Prague, kunjungi Old Town dan Charles Bridge." },
        { day: "Day 2", detail: "Menuju Vienna, nikmati musik klasik dan Schönbrunn Palace." },
        { day: "Day 3", detail: "Berendam di spa air panas Budapest dan makan di pasar lokal." },
        { day: "Day 4", detail: "Berbelanja oleh-oleh dan jalan sore di Danube Promenade." }
      ]
    }
  ]
};

const itineraryList = document.getElementById("itineraryList");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalLocation = document.getElementById("modalLocation");
const modalHotel = document.getElementById("modalHotel");
const modalCost = document.getElementById("modalCost");
const modalTransport = document.getElementById("modalTransport");
const closeModal = document.querySelector(".close");

document.querySelectorAll(".day-buttons button").forEach(btn => {
  btn.addEventListener("click", () => {
    const days = btn.getAttribute("data-days");
    showItineraries(days);
  });
});

function showItineraries(days) {
  itineraryList.innerHTML = "";
  itineraries[days].forEach(item => {
    const card = document.createElement("div");
    card.classList.add("itinerary-card");
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <div class="content">
        <h3>${item.title}</h3>
        <p>${item.location}</p>
      </div>
    `;
    card.addEventListener("click", () => openModal(item));
    itineraryList.appendChild(card);
  });
}

function openModal(item) {
  modal.style.display = "flex";
  modalImage.classList.add("itinerarydalampopup");
  modalImage.src = item.image;
  modalTitle.textContent = item.title;
  modalLocation.textContent = `📍 ${item.location}`;
  modalHotel.textContent = `🏨 ${item.hotel}`;
  modalCost.textContent = item.cost;
  modalTransport.textContent = item.transport;

  // Tambahkan itinerary per hari
  const existingDays = modal.querySelectorAll("h4, ul.day-list");
  existingDays.forEach(el => el.remove());

  item.days.forEach(d => {
    const dayTitle = document.createElement("h4");
    dayTitle.textContent = d.day;
    const dayList = document.createElement("ul");
    dayList.classList.add("day-list");
    const li = document.createElement("li");
    li.textContent = d.detail;
    dayList.appendChild(li);
    modal.querySelector(".modal-content").append(dayTitle, dayList);
  });
}

closeModal.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});
