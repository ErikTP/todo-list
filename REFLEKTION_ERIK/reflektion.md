TODO-Lista Reflektion - Erik Torres Puente
====================================

### 1. Hur fungerar addEventListener och hur har det använts för att manipulera DOM i TODO-listan?

addEventListener är en metod som används för att lyssna på händelser på ett specifikt DOM-element, vilket innebär att den "fångar upp" när en användare gör något som att klicka på en knapp eller skicka ett formulär. Med addEventListener kan man koppla händelser direkt till funktioner utan att påverka HTML-koden, vilket bidrar till att hålla både struktur & stil ren och förståeligt.

I TODO-listan används addEventListener för att:

-   **Lyssna på formulärets "submit"-händelse**: Detta triggar funktionen formUpdate när användaren försöker lägga till en ny uppgift.
    
-   **Hantera "klick"-händelser på knappar**: Funktionen AddtaskButtons skapar och lägger till knappar som tar bort eller markerar uppgifter, och varje knapp har en addEventListener kopplad till sig. Detta gör att en användare kan interagera dynamiskt med enskilda uppgifter i listan.
    

### 2. Vilka operatorer och kontrollstrukturer användes i uppgiften och varför?

Några vanliga operatorer och kontrollstrukturer som används i koden är:

-   **Operatorer**:
    
    -   **Tilldelningsoperator** (=): Används för att tilldela värden till variabler. Exempelvis "let taskIdCounter = 1;".
        
    -   **Jämförelseoperatorer** (===, !==): Dessa jämför värden och typer, och används här för att kontrollera om "inputItem" är tomt eller om en "uppgift är slutförd".
        
    -   **Logiska operatorer** (&&, ||): Dessa används i filterfunktionen för att styra när en "uppgift ska visas".
        
    -   **Increment operator (++)**: Används i "generateUniqueId()" för att unikt identifiera varje uppgift genom att returnera en räknare som adderades med värdet 1. Kod: "return taskIdCounter++;". 
        
-   **Kontrollstrukturer**:
    
    -   **if-satser**: Används för att styra olika val beroende på villkor, exempelvis för att kontrollera om "inputItem" är tomt eller filtrera "vilka uppgifter som ska visas".
        
    -   **Loop (for-of)**: Används för att iterera över alla uppgifter i listan och tillämpa filterfunktionen beroende på användarens val.
        

Dessa kontrollstrukturer gör koden flexibel och interaktiv, eftersom de styr när något ska läggas till, tas bort eller visas beroende på specifika villkor.

### 3. Hur har funktioner använts för att undvika kodupprepning och strukturera lösningen?

Funktioner har använts på ett modulärt sätt för att hantera specifika uppgifter:

-   **formUpdate**: Hanterar inskickning av uppgifter och undviker att samma logik behöver skrivas om varje gång en uppgift läggs till.
    
-   **addTask**: Skapar ett nytt listobjekt för varje uppgift, vilket gör det enkelt att anpassa strukturen för varje ny uppgift.
    
-   **AddtaskButtons**: Separat funktion för att lägga till knappar för att markera och ta bort uppgifter. Genom att hantera dessa i en egen funktion kan samma knappar enkelt återanvändas för varje ny uppgift.
    

Genom att skapa funktioner för varje delsteg reduceras kodupprepningen, vilket gör koden mer läsbar och enklare att felsöka.

### 4. Hur kan man skapa en fungerande dynamisk komponent på en webbsida med JavaScript?

För att skapa en dynamisk komponent kan man:

1.  **Definiera HTML-struktur och CSS-styling** för att skapa en grundläggande layout och stil.
    
2.  **Använda JavaScript för att manipulera DOM**: Genom att skapa, ändra och ta bort HTML-element kan man bygga interaktivitet.
    
3.  **Lägga till event-lyssnare** för att fånga användarens handlingar, exempelvis när de trycker på knappar eller fyller i fält.
    
4.  **Använda funktioner och logik** för att utföra olika uppgifter dynamiskt, exempelvis lägga till nya element eller ändra befintliga baserat på användarens interaktion.
    

Dessa steg gör att komponenten kan reagera på användarens input och ge omedelbar feedback, vilket är grunden för dynamiska komponenter.

### 5. Beskriv designbesluten för den dynamiska komponenten. Varför valdes vissa metoder och kontrollstrukturer?

När TODO-listan byggdes användes flera designbeslut för att skapa en användarvänlig, modulär och lättanvänd komponent. Här är en översikt av de viktigaste besluten och motiveringarna bakom dem:

**1. Modulära funktioner för att dela upp koden**

-   **Varför:** Genom att dela upp koden i mindre funktioner blir den mer strukturerad, lättläst och enkel att underhålla. Varje funktion har ett tydligt syfte och ansvar, vilket också gör felsökning enklare.
    
-   **Exempel:** Skapade separata funktioner som "formUpdate" för att hantera formulärinlämning, "addTask" för att lägga till en uppgift och "AddtaskButtons" för att lägga till knappar för att markera eller ta bort uppgifter.
    
**2. Användning av addEventListener istället för inline-event**

-   **Varför:** För att hålla JavaScript-logiken separat från HTML-strukturen och därigenom lättförståelig. Detta innebär att nästan all logik hanterades i JavaScript-filen istället för i HTML, vilket gör det enklare att underhålla och utveckla applikationen vidare.
    
-   **Exempel:** Använde addEventListener för att lyssna på formulärets "submit"-händelse och för att lägga till knapparnas funktioner direkt i JavaScript (förutom knapparna för filtrering). 
    

**3. Filterfunktion med logiska villkor och if-satser**

-   **Varför:** Filterfunktionen gör det möjligt att visa alla, slutförda eller oavslutade uppgifter genom att lägga in olika villkor. Detta gör listan mer användarvänlig och effektiv för att sortera uppgifter.
    
-   **Exempel:** Använde if-satser för att kontrollera om en uppgift ska visas beroende på om den är markerad som slutförd eller ej. Genom att använda filterTasks-funktionen kan användaren enkelt växla mellan olika visuella perspektiv utan att skapa nya listor eller tillföra kod till andra funktioner.
    

**4. Generering av unika ID med inkrementoperatorn ++**

-   **Varför:** För att varje uppgift ska ha ett unikt ID som identifierar den, vilket ger en tydligare struktur och gör det enklare att referera till specifika uppgifter i listan. Detta kan vara användbart om listan behöver utökas eller spåras på något sätt.
    
-   **Exempel:** Använder en räknare, "taskIdCounter", som ökar med ++ varje gång en ny uppgift skapas. Detta ID visas även för användaren, vilket gör att varje uppgift lättare kan särskiljas i listan.
    

**5. DOM-manipulation för att dynamiskt lägga till, ändra och ta bort uppgifter**

-   **Varför:** Genom att manipulera DOM (Document Object Model) med JavaScript kan man skapa en dynamisk användarupplevelse där uppgifter läggs till, uppdateras eller tas bort utan att sidan behöver laddas om.
    
-   **Exempel:** När en ny uppgift läggs till skapas ett nytt element som läggs till i listan med appendChild. Här manipuleras också DOM när uppgifter markeras som klara genom att lägga till och ta bort klassnamn (med classList.toggle) som styr uppgiftens stil.

**6. Enkel och direkt användarfeedback**

-   **Varför:** Genom att ge direkt feedback kan användaren se resultatet av sina handlingar omedelbart. Detta skapar en bättre användarupplevelse och gör applikationen mer tolkbar att använda.
    
-   **Exempel:** När användaren försöker lägga till en tom uppgift, visas en alert för att tydligt informera om att uppgiften är tom. På samma sätt ändras en uppgifts stil när den markeras som klar, vilket ger visuell feedback om att en uppgift är slutförd.
    

### 6. Hur fungerar DOM-manipulation och hur har det använts för att utveckla lösningen?

DOM-manipulation innebär att man ändrar strukturen och innehållet i HTML-dokumentet genom JavaScript. I denna lösning används DOM-manipulation för att:

-   **Skapa och lägga till nya element**: Varje gång en uppgift läggs till i listan via "document.createElement" skapas exempelvis nya element som li-element, span-element, och button-element för text och knappar.  

-   **Ändra klassnamn för styling**: När en uppgift markeras som klar läggs en klass till med "classList.toggle", vilket möjliggör CSS-styling som stryker över texten.
    
-   **Ta bort element från DOM**: När en uppgift tas bort, raderas den från DOM med "removeChild", vilket ger användaren omedelbar visuell feedback.
    

Genom att manipulera DOM på detta sätt blir TODO-listan interaktiv och ger omedelbara ändringar baserade på användarens input.

### 7. Redogör utförligt för hur olika operatorer fungerar i JavaScript och när det är lämpligt att använda specifika operatorer.

-   **Tilldelningsoperatorn (=)**: Används för att tilldela ett värde till en variabel, t.ex. "let taskIdCounter = 1;".
    
-   **Jämförelseoperatorer (==, ===, !=, !==)**: (==) jämför värden oavsett typ medan (===) jämför både värde och typ. (===) är att föredra eftersom det minskar risken för plötsliga typkonverteringar, vilket gör koden mer stadig.
    
-   **Aritmetiska operatorer (+, -, *, /, %)**: Dessa används för att utföra matematiska operationer. Exempelvis används ++ för att öka räknaren för att skapa unika ID.
    
-   **Logiska operatorer (&&, ||, !)**: Dessa används för att skapa villkor som samtidigt bör uppfyllas för ett resultat. Till exempel används && i filterfunktionen för att visa uppgifter som både är slutförda och markerade.
    
-   **Villkorlig operator (? :)**: En kortare syntax för if-else-uttryck, ofta användbar för kortare villkor eller när man vill göra en snabb funktion baserat på ett villkor.
