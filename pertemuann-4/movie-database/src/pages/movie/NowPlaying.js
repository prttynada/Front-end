/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constrants/endpoint";

function NowPlayingMovie() {
    // Membuat state movies
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getNowPlayingMovies();
    }, []);

    async function getNowPlayingMovies() {
        // Fetch data dari axios
        const response = await axios(ENDPOINTS.NOWPLAYING);

        // Simpan data ke state movie
        setMovies(response.data.results);
    }

    return(
        <>
            <Hero />
            <Movies movies={movies} title="Now Playing Movie"/>
        </>
    );
}

export default NowPlayingMovie;