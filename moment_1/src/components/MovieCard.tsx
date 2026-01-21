// Importerar CSS-fil för MovieCard-komponenten
import "./MovieCard.css"

// Interface för MovieCard-komponenten
interface MovieCardProps {
    name: string,
    year: number,
    watched: boolean
}

// MovieCard-komponent som tar emot props enligt interfacet
function MovieCard({ name, year, watched }: MovieCardProps) {

    // Omvandlar boolean till text
    const watchedText = watched ? "Ja" : "Nej"

    // Returnerar sektion med namn, utgivningsår och om filmen är sedd eller inte
    return (
        <section className="movie-card">
            <h2>{name}</h2>
            <p>Utgivningsår: {year}</p>
            <p>Sett: {watchedText}</p>
        </section>
    )
}

// Exporterar komponenten
export default MovieCard