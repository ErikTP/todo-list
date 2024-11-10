// Selektorer för att hämta element
const inputForm = document.getElementById("inputForm");
const inputItem = document.getElementById("inputItem");
const itemList = document.getElementById("itemList");

let taskIdCounter = 1; // Räknare för att generera unika ID:n

// Funktion för att generera ett unikt ID för varje uppgift
function generateUniqueId() {
    if (itemList.children.length === 0) { // Kontrollera om det finns några <li> element kvar i listan
        taskIdCounter = 1; // Återställ räknaren om listan är tom
    }
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
    const listItem = document.createElement("li"); // Skapar ett nytt <li>-element
    const taskTextSpan = document.createElement("span"); // Skapar en span för textinnehållet

    taskTextSpan.textContent = `#${taskId} - ${taskText}`; // Sätter uppgiftstext och ID
    listItem.appendChild(taskTextSpan); // Lägger till text-span till listobjektet
    itemList.appendChild(listItem); // Lägger till listobjektet i listan

    AddtaskButtons(listItem); // Lägger till knapparna på listan
}

// Funktion för att lägga till "Ta bort-knappen" och "Markera som klar"-knappen
function AddtaskButtons(listItem) {
    // Skapar en knapp för att ta bort uppgiften via en eventlyssnare vid klick
    const removeTaskButton = document.createElement("button");
    removeTaskButton.classList.add("remove-button"); // Adderar klassnamn för knappen och dess styling.
    removeTaskButton.textContent = "✖"; // Symbol för "Ta bort"
    removeTaskButton.addEventListener("click", function () {
    itemList.removeChild(listItem); // Tar bort <li> från listan
    });
       
    // Skapar en knapp för att markera uppgifter som är klara via en eventlyssnare vid klick.     
    const markTaskButton = document.createElement("button");
    markTaskButton.classList.add("mark-button"); // Adderar klassnamn för knappen och dess styling
    markTaskButton.textContent = "✔"; // Symbol för "Klar"
    markTaskButton.addEventListener("click", function () {
    listItem.classList.toggle("marked"); // Växlar klassen "completed" för att markera som klar
    });
  
    // Lägger till knappen till listobjektet
    listItem.appendChild(markTaskButton);
     // Lägger till knappen till listobjektet och sedan till listan
    listItem.appendChild(removeTaskButton);
  }



// Eventlyssnare när användaren skickar något till formuläret  
inputForm.addEventListener("submit", formUpdate);