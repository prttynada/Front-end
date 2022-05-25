import StyledMovie from "./Movie.Styled";

// Menangkap props
function Movie(props) {
    // destructing object
    const { movie } = props;

    return (
        <StyledMovie>
            <img src={movie.poster} alt="" />
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
        </StyledMovie>
    );
}

export default Movie;