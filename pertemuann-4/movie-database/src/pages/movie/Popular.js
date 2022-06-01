/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";

function PopularMovie() {
    // simpan API_KEY dan URL ke varibla
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

    // Membuat state movies
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getPopularMovies();
    }, []);

    async function getPopularMovies() {
        // Fetch data dari axios
        const response = await axios(URL);

        // Simpan data ke state movie
        setMovies(response.data.results);
    }

    return(
        <>
            <Hero />
            <Movies movies={movies} title="Popular Movie"/>
        </>
    );
}

export default PopularMovie;