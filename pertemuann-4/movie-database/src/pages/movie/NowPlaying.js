/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { updateMovies } from "../../features/movieSlice";
import ENDPOINTS from "../../utils/constants/endpoint";

function NowPlayingMovie() {
    const dispatch = useDispatch();

    useEffect(() => {
        getNowPlayingMovies();
    }, []);

    async function getNowPlayingMovies() {
        // Fetch data dari axios
        const response = await axios(ENDPOINTS.NOWPLAYING);

        // Simpan data ke state movie
        dispatch(updateMovies(response.data.results));
    }

    return(
        <>
            <Hero />
            <Movies title="Now Playing Movie"/>
        </>
    );
}

export default NowPlayingMovie;