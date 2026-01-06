const places = [
  {
    name: "Taj Mahal",
    image: "images/tajmahal.jpg",
    famousFor: "White marble monument, architecture",
    food: "Petha, Mughlai food",
    description: "A world-famous monument in Agra, symbol of love."
  },
  {
    name: "Goa",
    image: "images/goa.jpg",
    famousFor: "Beaches, nightlife, water sports",
    food: "Seafood, Goan curry",
    description: "A coastal state known for beaches and vibrant nightlife."
  },
  {
    name: "Kerala",
    image: "images/kerala.jpg",
    famousFor: "Backwaters, greenery, Ayurveda",
    food: "Sadya, appam, seafood",
    description: "God’s Own Country, famous for nature and culture."
  },
  {
    name: "Ladakh",
    image: "images/ladakh.jpg",
    famousFor: "Mountains, monasteries",
    food: "Thukpa, momos",
    description: "Cold desert region known for adventure and scenery."
  },
  {
    name: "Jaipur",
    image: "images/jaipur.jpg",
    famousFor: "Forts, palaces",
    food: "Dal baati churma",
    description: "The Pink City of India with rich royal history."
  },
  {
    name: "Manali",
    image: "images/manali.jpg",
    famousFor: "Snow, adventure sports",
    food: "Siddu, momos",
    description: "A popular hill station in Himachal Pradesh."
  },
  {
    name: "Rishikesh",
    image: "images/rishikesh.jpg",
    famousFor: "Yoga, river rafting",
    food: "Satvik food",
    description: "Spiritual city on the banks of the Ganga."
  },
  {
    name: "Varanasi",
    image: "images/varanasi.jpg",
    famousFor: "Ghats, temples",
    food: "Kachori sabzi",
    description: "One of the oldest living cities in the world."
  },
  {
    name: "Mysore",
    image: "images/mysore.jpg",
    famousFor: "Mysore Palace",
    food: "Mysore pak",
    description: "Cultural city famous for heritage and festivals."
  },
  {
    name: "Ooty",
    image: "images/ooty.jpg",
    famousFor: "Tea gardens",
    food: "Homemade chocolates",
    description: "Hill station in Tamil Nadu with pleasant climate."
  },
  {
    name: "Andaman Islands",
    image: "images/andaman.jpg",
    famousFor: "Beaches, coral reefs",
    food: "Seafood",
    description: "Island destination known for natural beauty."
  },
  {
    name: "Darjeeling",
    image: "images/darjeeling.jpg",
    famousFor: "Tea gardens, toy train",
    food: "Momos, tea",
    description: "Hill station famous for tea and mountain views."
  }
];

const listDiv = document.getElementById("placeList");
const detailsDiv = document.getElementById("placeDetails");

places.forEach(place => {
  const div = document.createElement("div");
  div.className = "place";
  div.textContent = place.name;

  div.onclick = () => {
    detailsDiv.innerHTML = `
      <h2>${place.name}</h2>
      <img src="${place.image}">
      <p><strong>Famous for:</strong> ${place.famousFor}</p>
      <p><strong>Famous food:</strong> ${place.food}</p>
      <p>${place.description}</p>
    `;
  };

  listDiv.appendChild(div);
});
