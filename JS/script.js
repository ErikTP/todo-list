// Selektorer för att hämta element
const inputForm = document.getElementById("inputForm");
const inputItem = document.getElementById("inputItem");
const itemList = document.getElementById("itemList");

// Lyssnare för att hantera när användaren skickar in formuläret
inputForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Förhindrar att sidan laddas om
  const taskText = inputItem.value.trim(); // Hämtar och trimar texten i input så att blanksteg elimineras
  if (taskText !== "") {
    addTask(taskText); // Lägger till ny uppgift
    inputItem.value = ""; // Rensar inputfältet
  }
});

// Funktion för att lägga till en ny uppgift
function addTask(taskText) {
    const listItem = document.createElement("li"); // Skapar en ny <li> element
    listItem.textContent = taskText; // Sätter uppgiftstexten
    itemList.appendChild(listItem); // Lägger till <li> elementet som ett listobjekt till listan med <ul> element
}