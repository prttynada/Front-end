import StyledMovie from "./Movie.Styled";

// Menangkap props
function Movie(props) {
    // destructing object
    const { movie } = props;

    return (
        <StyledMovie>
            <img src={movie.poster || `https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.year || movie.release_date}</p>
        </StyledMovie>
    );
}

export default Movie;