/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { updateMovies } from "../../features/movieSlice";
import ENDPOINTS from "../../utils/constants/endpoint";

function PopularMovie() {
    // Membuat dispatch: untuk trigger action
    const dispatch = useDispatch();

    useEffect(() => {
        getPopularMovies();
    }, []);

    async function getPopularMovies() {
        // Fetch data dari axios
        const response = await axios(ENDPOINTS.POPULAR);

        // Simpan data ke state movie
        dispatch(updateMovies(response.data.results));
    }

    return(
        <>
            <Hero />
            <Movies title="Popular Movie"/>
        </>
    );
}

export default PopularMovie;