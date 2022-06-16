/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/Movies/Movies";
import { updateMovies } from "../../features/movieSlice";
import ENDPOINTS from "../../utils/constants/endpoint";

function Detail() {
    /**
     * TODO: Fetch film berdasarkan rekomendasi
     * ambil id movie
     * Fetch rekomendasi movie
     */

    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        getRecomendMovies();
    }, []);

    async function getRecomendMovies() {
        const response = await axios(ENDPOINTS.RECOMMENDMOVIE(id));
        dispatch(updateMovies(response.data.results));
    }

    return (
        <>
            <DetailMovie />
            <Movies title="Recommendation Movies" />
        </>
    );
}

export default Detail;