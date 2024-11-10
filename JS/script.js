// Selektorer för att hämta element
const inputForm = document.getElementById("inputForm");
const inputItem = document.getElementById("inputItem");
const itemList = document.getElementById("itemList");

let taskIdCounter = 1; // Räknare för att generera unika ID:n

// Funktion för att generera ett unikt ID för varje uppgift
function generateUniqueId() {
  return taskIdCounter++; // Ökar räknaren och returnerar dess värde som ID
} 

// Funktion för att hantera uppdateringar i formuläret
function formUpdate(event) {
  event.preventDefault(); // Förhindrar att sidan laddas om
  const taskText = inputItem.value.trim(); // Hämtar och trimar texten i input så att blanksteg elimineras
  if (taskText !== "") {
    const taskId = generateUniqueId(); // Skapar ett unikt ID för uppgiften
    addTask(taskText, taskId); // Lägger till ny uppgift med ID
    inputItem.value = ""; // Rensar inputfältet
} else {
    alert("Du har inte skrivit något. Försök igen!");
}
};

// Funktion för att lägga till en ny uppgift
function addTask(taskText, taskId) {
    const listItem = document.createElement("li"); // Skapar en ny <li> element
    listItem.textContent = listItem.textContent = `#${taskId} - ${taskText}`; // Sätter uppgiftstexten och visar ID
    itemList.appendChild(listItem); // Lägger till <li> elementet som ett listobjekt till listan med <ul> element
    removeButton(listItem); // Lägger till ta-bort-knappen för den nya uppgiften
}

function removeButton(listItem) {
    // Skapar en knapp för att ta bort uppgiften via en eventlyssnare vid klick
    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-button"); // Adderar klassnamn för knappen och dess styling.
    removeButton.textContent = "✖"; 
    removeButton.addEventListener("click", function () {
    itemList.removeChild(listItem); // Tar bort <li> från listan
  });

  // Lägg till knappen till listobjektet och sedan till listan
  listItem.appendChild(removeButton);
}

// Eventlyssnare när användaren skickar något till formuläret  
inputForm.addEventListener("submit", formUpdate);