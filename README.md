# Filmlista
Applikationen visar en lista med filmer som är skapad med React och TypeScript. 
Innehåll och logik är uppdelade i komponenter och webbplatsen är responsivt designad. 

## Struktur
Projektet är strukturerat i fyra komponenter, med tillhörande CSS-filer för styling:
- **App**
  - Huvudkomponent som lagrar data i en array.
  - Renderar övergripande struktur med Header, MovieCard och Footer inkluderat.
  - Använder `map()` för att skapa MovieCard-komponenter dynamiskt
- **MovieCard**
  - Representerar ett enskilt filmobjekt.
  - Tar emot data via props (titel, utgivningsår och om filmen är sedd eller inte)
  - Renderar filminformation i ett kort-liknande format
- **Header**
  - Visar sidans titel och banner
  - Titeln skickas som prop från App-komponenten
- **Footer**
  - Visar sidfoten med information om utvecklaren av webbplatsen

## Länk till publicerad webbplats
[https://moment1dt210g.netlify.app/](https://moment1dt210g.netlify.app/)

## Skapad av
Ramona Reinholdz      
Mittuniversitetet, Webbutvecklingsprogrammet      
[rare2400@student.miun.se](mailto:rare2400@student.miun.se)      
2026-01-21
