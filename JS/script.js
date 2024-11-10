// Selektorer för att hämta element
const inputForm = document.getElementById("inputForm");
const inputItem = document.getElementById("inputItem");
const itemList = document.getElementById("itemList");

// Funktion för att hantera uppdateringar i formuläret
function formUpdate(event) {
  event.preventDefault(); // Förhindrar att sidan laddas om
  const taskText = inputItem.value.trim(); // Hämtar och trimar texten i input så att blanksteg elimineras
  if (taskText !== "") {
    addTask(taskText); // Lägger till ny uppgift
    inputItem.value = ""; // Rensar inputfältet
} else {
    alert("Du har inte skrivit något. Försök igen!");
}
};

// Funktion för att lägga till en ny uppgift
function addTask(taskText) {
    const listItem = document.createElement("li"); // Skapar en ny <li> element
    listItem.textContent = taskText; // Sätter uppgiftstexten
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