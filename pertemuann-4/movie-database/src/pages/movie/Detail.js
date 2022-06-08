/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constrants/endpoint";

function Detail() {
    /**
     * TODO: Fetch film berdasarkan rekomendasi
     * ambil id movie
     * Fetch rekomendasi movie
     */

    const { id } = useParams();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getRecomendMovies();
    }, []);

    async function getRecomendMovies() {
        const response = await axios(ENDPOINTS.RECOMMENDMOVIE(id));
        setMovies(response.data.results);
    }

    return (
        <>
            <DetailMovie />
            <Movies movies={movies} title="Recommendation Movies" />
        </>
    );
}

export default Detail;