const itineraries = {
  2: [
    {
      title: "Romantic Paris",
      image: "img/paris.jpg",
      location: "Eiffel Tower & Louvre Museum",
      hotel: "Hotel Lumière - Rue de Rivoli, Paris (📞 +33 1 42 96 00 00)",
      cost: "💰 Estimated cost: €400",
      transport: "🚆 The Paris Metro is very efficient for getting around the city.",
      days: [
        { day: "Day 1", detail: "Visit the Eiffel Tower in the morning, have lunch at Café Gustave. In the afternoon, explore the Louvre Museum." },
        { day: "Day 2", detail: "Enjoy Tuileries Garden and stroll along the Champs-Élysées before shopping at Galeries Lafayette." }
      ]
    },
    {
      title: "Relaxing Amsterdam",
      image: "img/amsterdam.jpg",
      location: "Canal Belt & Rijksmuseum",
      hotel: "Canal View Hotel - Keizersgracht 89 (📞 +31 20 555 1234)",
      cost: "💰 Estimated cost: €350",
      transport: "🚴 Renting a bicycle is recommended to explore the canals and museums.",
      days: [
        { day: "Day 1", detail: "Explore the canals and Rijksmuseum. Enjoy coffee by the riverside in the afternoon." },
        { day: "Day 2", detail: "Visit Keukenhof Gardens and the Bloemenmarkt flower market." }
      ]
    }
  ],
  3: [
    {
      title: "Swiss Adventure",
      image: "img/zurich.jpg",
      location: "Zurich - Lucerne - Interlaken",
      hotel: "AlpenStay - Zurich Center (📞 +41 44 333 9999)",
      cost: "💰 Estimated cost: CHF 700",
      transport: "🚆 Use the Swiss Travel Pass to save time and money between cities.",
      days: [
        { day: "Day 1", detail: "Walk along Lake Zurich and shop at Bahnhofstrasse." },
        { day: "Day 2", detail: "Take a train to Lucerne, visit the Chapel Bridge and Lion Monument." },
        { day: "Day 3", detail: "Enjoy mountain views in Interlaken and relax by Lake Thun." }
      ]
    },
    {
      title: "Italian Heritage Trip",
      image: "img/italy.jpg",
      location: "Rome - Florence - Venice",
      hotel: "Hotel Venezia - Rome (📞 +39 06 998 2345)",
      cost: "💰 Estimated cost: €600",
      transport: "🚄 Use the high-speed Trenitalia train for intercity travel.",
      days: [
        { day: "Day 1", detail: "Tour the Colosseum and Trevi Fountain in Rome." },
        { day: "Day 2", detail: "Head to Florence, visit the Duomo and Uffizi Gallery." },
        { day: "Day 3", detail: "Take a gondola ride in Venice and enjoy dinner by the canal." }
      ]
    }
  ],
  4: [
    {
      title: "Scandinavia Highlights",
      image: "img/scandinavia.jpg",
      location: "Oslo - Stockholm - Copenhagen",
      hotel: "Nordic Stay - Copenhagen (📞 +45 88 33 2211)",
      cost: "💰 Estimated cost: €950",
      transport: "🛳 A mix of ferry rides and overnight trains makes for an exciting trip!",
      days: [
        { day: "Day 1", detail: "Start in Oslo, visit Vigeland Park and the Opera House." },
        { day: "Day 2", detail: "Take a ferry to Stockholm, explore Gamla Stan and the Royal Palace." },
        { day: "Day 3", detail: "Travel by train to Copenhagen, enjoy Tivoli Gardens." },
        { day: "Day 4", detail: "Stroll through the canals and take pictures with the Little Mermaid statue." }
      ]
    },
    {
      title: "Central Europe Explorer",
      image: "img/centraleurope.jpg",
      location: "Prague - Vienna - Budapest",
      hotel: "Hotel Imperial - Vienna (📞 +43 1 50110)",
      cost: "💰 Estimated cost: €800",
      transport: "🚆 Use a rail pass for flexibility and efficiency.",
      days: [
        { day: "Day 1", detail: "Start in Prague, visit Old Town and Charles Bridge." },
        { day: "Day 2", detail: "Head to Vienna, enjoy classical music and Schönbrunn Palace." },
        { day: "Day 3", detail: "Relax in Budapest’s thermal baths and try local market food." },
        { day: "Day 4", detail: "Shop for souvenirs and take a sunset walk along the Danube Promenade." }
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

  // Add itinerary details per day
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
