// Importerar komponenter och CSS-fil
import Header from "./components/Header"
import Footer from "./components/Footer"
import MovieCard from "./components/MovieCard"
import "./App.css"

function App() {

  // Array med filmobjekt
  const movieArr = [
    {
      name: "Guardians of the Galaxy",
      year: 2014,
      watched: true
    },
    {
      name: "Avatar: Fire and Ash",
      year: 2025,
      watched: true
    },
    {
      name: "Nyckeln till frihet",
      year: 1994,
      watched: false
    },
    {
      name: "Whiplash",
      year: 2014,
      watched: true
    },
    {
      name: "Dune",
      year: 2021,
      watched: false
    },
    {
      name: "The Pitt",
      year: 2025,
      watched: false
    }
  ]

  // Returnerar header, sektion med filmkort och footer
  return (
    <>
      <Header title="Min filmlista" />

      <section className="container">
        {movieArr.map((movie, index) => (
          <MovieCard
            key={index}
            name={movie.name}
            year={movie.year}
            watched={movie.watched}
          />
        ))}
      </section>

      <Footer />
    </>
  )
}

export default App
