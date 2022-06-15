/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoint";

function TopRatedMovie() {
    // Membuat state movies
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getTopRatedMovies();
    }, []);

    async function getTopRatedMovies() {
        // Fetch data dari axios
        const response = await axios(ENDPOINTS.TOPRATED);

        // Simpan data ke state movie
        setMovies(response.data.results);
    }

    return(
        <>
            <Hero />
            <Movies movies={movies} title="Top Rated Movie"/>
        </>
    );
}

export default TopRatedMovie;