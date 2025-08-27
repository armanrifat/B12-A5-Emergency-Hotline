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