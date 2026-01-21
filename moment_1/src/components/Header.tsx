// Importerar CSS-fil
import "./Header.css"

// Interface för Header-komponenten
interface HeaderProps {
    title: string
}

// Header-komponent som tar emot titel som props enligt interfacet
function Header({ title }: HeaderProps) {
    return (
        <header>
            <h1>{title}</h1>
                <img src="/banner.png" alt="banner med texten Ramonas filmlista" />
        </header>
    )
}

// Exporterar komponenten
export default Header