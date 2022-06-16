/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import ENDPOINTS from "../../utils/constants/endpoint";
import Button from "../ui/Button";
import StyledHero from "./Hero.Styled";

function Hero() {
    // Membuat state movie
    const [movie, setMovie] = useState("");
    const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
    const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;
    

    useEffect(getDetailMovie, []);

    // Mendapatkan 1 data dari trending movies
    async function getTrendingMovies() {
        const response = await axios(ENDPOINTS.TRENDINGMOVIE);
        return response.data.results[1];
    }

    // Membuat fungsi untuk mendapatkan detail movie
    async function getDetailMovie() {
        const trendingMovie = await getTrendingMovies();
        const id = trendingMovie.id;

        // fetch detail movie by id
        const response = await axios(ENDPOINTS.HERO(id));

        setMovie(response.data);
    }

    return(
        <StyledHero>
            <section>
                <div className="hero__left">
                    <h2>{movie.title}</h2>
                    <h3>Genre: {genres}</h3>
                    <p>{movie.overview}</p>
                    <Button as="a" href={trailer} target="_blank" variant="secondary" size="lg">Watch Movie</Button>
                </div>
                <div className="hero__right">
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.Title} />
                </div>
            </section>
        </StyledHero>
    );
}

export default Hero;