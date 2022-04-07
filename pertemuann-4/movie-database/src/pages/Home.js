import { useState } from "react";
import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Navbar from "../components/Navbar/Navbar";
import data from "../utils/constrants/data";

function Home() {
    // Membuat variabel movies
    const [ movies, setMovies ] = useState(data);

    return (
        <div>
            <Navbar />
            <Hero />
            <Movies movies={movies} setMovies={setMovies} />
            <AddMovieForm movies={movies} setMovies={setMovies} />
            <Footer />
        </div>
    );
}

export default Home;