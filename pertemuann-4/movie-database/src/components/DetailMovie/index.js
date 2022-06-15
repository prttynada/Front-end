/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ENDPOINTS from "../../utils/constants/endpoint";
import Button from "../ui/Button";
import StyledDetailMovie from "./DetailMovie.styled";


function DetailMovie() {
    /**
     * TODO:
     * -Ambil id di params
     * Fetch Detail by id
     */

    // Menggunakan useParams: untuk mengambil parameter id di URL
    const { id } = useParams();
    const [movie, setMovie] = useState("");
    const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
    const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;

    useEffect(() => {
        getDetailMovie();
    }, [id]);

    async function getDetailMovie() {
        const response = await axios(ENDPOINTS.DETAIL(id));

        // Set hasil data dari axios ke state movie
        setMovie(response.data);
    }

    return (
        <StyledDetailMovie>
            <div className="poster">
                <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="poster" />
            </div>
            <div className="info">
                <h2>{movie.title}</h2>
                <h3>{genres}</h3>
                <p>{movie.overview}</p>
                <Button as="a" href={trailer}>Watch</Button>
            </div>
        </StyledDetailMovie>
    );
}

export default DetailMovie;