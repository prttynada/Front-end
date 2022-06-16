/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { updateMovies } from "../../features/movieSlice";
import ENDPOINTS from "../../utils/constants/endpoint";

function TopRatedMovie() {
    const dispatch = useDispatch();

    useEffect(() => {
        getTopRatedMovies();
    }, []);

    async function getTopRatedMovies() {
        // Fetch data dari axios
        const response = await axios(ENDPOINTS.TOPRATED);

        // Simpan data ke state movie
        dispatch(updateMovies(response.data.results));
    }

    return(
        <>
            <Hero />
            <Movies title="Top Rated Movie"/>
        </>
    );
}

export default TopRatedMovie;