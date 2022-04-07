import styles from "./Movies.module.css";
import Movie from "../Movie/Movie";
import { nanoid } from "nanoid";

function Movies(props) {
    // destructing props
    const {movies, setMovies} = props;

    // Membuat fungsi untuk handle Click
    function handleClick() {
        const movie = {
            id: nanoid(7),
            title: "Spiral Jigsaw",
            year: "2021",
            type: "Movie",
            poster: "https://picsum.photos/300/400",
        };

        // menjalankan fungsi setMovie
        // tambahkan movie ke dalam movies
        // spread operator
        setMovies([...movies, movie]);
    }

    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>Latest Movies</h2>
                <div className={styles.movie__container}>
                    {/* 
                     * looping: map
                     * Render Component Movie
                     * Kirim props movie 
                     */}
                    {movies.map(function(movie) {
                        return <Movie key={movie.id} movie={movie} />;
                    })}
                </div>
                {/* Menambahkan Button */}
                {/* Menambahkan event onClick */}
                <button onClick={handleClick}>Add Movie</button>
            </section>
        </div>
    );
}

export default Movies;