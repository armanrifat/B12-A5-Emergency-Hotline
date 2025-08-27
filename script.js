// Navbar Counters
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

// DOM Elements
const heartCounter = document.getElementById("heartCount");
const coinCounter = document.getElementById("coinCount");
const copyCounter = document.getElementById("copyCount");
const historyList = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistory");
const cardSection = document.getElementById("cardSection");

// Hotline Services Data
const services = [
  { name: "Police", en: "Police", number: "999", category: "Emergency" },
  { name: "Fire Service", en: "Fire", number: "102", category: "Emergency" },
  { name: "Ambulance", en: "Ambulance", number: "10666", category: "Health" },
  { name: "Child Help", en: "Child Help", number: "1098", category: "Support" },
  { name: "Women Help", en: "Women Help", number: "109", category: "Support" },
  { name: "Gas Service", en: "Gas", number: "16496", category: "Utility" },
];

// Generate Cards
services.forEach(service => {
  const card = document.createElement("div");
  card.className = "bg-white p-4 rounded shadow text-center";

  card.innerHTML = `
    <div class="flex justify-between items-center mb-2">
      <button class="heartBtn">💗</button>
      <span class="bg-gray-200 px-2 py-1 text-xs rounded">${service.category}</span>
    </div>
    <h4 class="font-bold">${service.name}</h4>
    <p class="text-sm">${service.en}</p>
    <p class="font-mono text-lg">${service.number}</p>
    <div class="flex justify-center gap-3 mt-3">
      <button class="copyBtn bg-blue-500 text-white px-3 py-1 rounded">📋 Copy</button>
      <button class="callBtn bg-green-500 text-white px-3 py-1 rounded">📞 Call</button>
    </div>
  `;

   // Heart Click
  card.querySelector(".heartBtn").addEventListener("click", () => {
    heartCount++;
    heartCounter.textContent = heartCount;
  });

  // Copy Button
  card.querySelector(".copyBtn").addEventListener("click", () => {
    navigator.clipboard.writeText(service.number);
    alert(`Copied: ${service.number}`);
    copyCount++;
    copyCounter.textContent = copyCount;
  });

  // Call Button
  card.querySelector(".callBtn").addEventListener("click", () => {
    if (coinCount < 20) {
      alert("Not enough coins!");
      return;
    }

    coinCount -= 20;
    coinCounter.textContent = coinCount;

    const now = new Date().toLocaleTimeString();
    alert(`Calling ${service.name} at ${service.number}`);

    const li = document.createElement("li");
    li.textContent = `${service.name} - ${service.number} (at ${now})`;
    historyList.appendChild(li);
  });

  cardSection.appendChild(card);
});

// Clear History
clearHistoryBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
});