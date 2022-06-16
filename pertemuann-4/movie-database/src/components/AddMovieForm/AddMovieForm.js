import { nanoid } from "nanoid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addMovie } from "../../features/movieSlice";
import Alert from "../Alert/Alert";
import Button from "../ui/Button";
import StyledAddMovieForm from "./AddMovieForm.Styled";


function AddMovieForm() {
    // destructing props
    const navigation = useNavigate();
    const dispatch = useDispatch();

    // Membuat state object
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        picture: "",
        genre: "",
    });

    // Membuat fungsi handleChange untuk handle semua input form
    function handleChange(e) {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    // Membuat state object untuk handle error
    const [isFormError, setIsFormError] = useState({
        titleErr: false,
        dateErr: false,
        pictureErr: false,
        genreErr: false,
    });

    function validate() {
        if (title === "") {
            setIsFormError({
                ...isFormError,
                titleErr: true,
            });
            return false;
        }
        else if (date === "") {
            setIsFormError({
                ...isFormError,
                titleErr: false,
                dateErr: true,
            });
            return false;
        }
        else if (genre === "") {
            setIsFormError({
                ...isFormError,
                titleErr: false,
                dateErr: false,
                genreErr: true,
            });
            return false;
        }
        else if (picture === "") {
            setIsFormError({
                ...isFormError,
                titleErr: false,
                dateErr: false,
                genreErr: false,
                pictureErr: true,
            });
            return false;
        }
        else {
            setIsFormError({
                ...isFormError,
                titleErr: false,
                dateErr: false,
                genreErr: false,
                pictureErr: false,
            });
            return true;
        }
    }

    function pushMovie() {
        // siapkan movie yang ingin diinput
        const movie = {
            id: nanoid(),
            title: title,
            year: date,
            type: genre,
            poster: picture
        };
        // jalankan acton addMovie menggunakan dispatch
        dispatch(addMovie(movie));
        navigation("/");
    }

    // handle form ketika disubmit
    function handleSubmit(e) {
        // mencegah perilaku default: refresh
        e.preventDefault();

        validate() && pushMovie();
    }

    const { title, date, picture, genre } = formData;
    const { titleErr, dateErr, pictureErr, genreErr } = isFormError;

    return(
        <StyledAddMovieForm>
            <section>
                <div className="addMovieForm__left">
                    <img src="https://picsum.photos/350/250" alt="placeholder" />
                </div>
                <div className="addMovieForm__right">
                    <h2>Add Movie</h2>
                    <form  onSubmit={handleSubmit} >
                        <div className="addMovieForm__formEl">
                            <label htmlFor="title">Title</label><br />
                            <input onChange={handleChange} name="title" id="title" type="text" value={title} />
                            {/* 
                            jika error title tru: muncul errror
                            jika tidak, munculkan string kosong */}
                            {titleErr && <Alert>Title wajib diisi!</Alert> }
                        </div>
                        <div className="addMovieForm__formEl">
                            <label htmlFor="date">Date</label><br />
                            <input onChange={handleChange} name="date" id="date" type="number" value={date} />
                            { dateErr && <Alert>Date wajib diisi!</Alert> }
                        </div>
                        <div className="addMovieForm__formEl">
                            <label htmlFor="genre">Genre</label><br />
                            <select onChange={handleChange} name="genre" id="select" value={genre}>
                                <option value="romance">Romance</option>
                                <option value="thriller">Thriller</option>
                                <option value="action">Action</option>
                                <option value="comedy">Comedy</option>
                                <option value="mistery">Mistery</option>
                                <option value="fantasy">Fantasy</option>
                                <option value="horror">Horror</option>
                                <option value="drama">Drama</option>
                            </select>
                            { genreErr && <Alert>Genre wajib diisi!</Alert> }
                        </div>
                        <div className="addMovieForm__formEl">
                            <label htmlFor="picture">Picture Link</label><br />
                            <input onChange={handleChange} name="picture" id="picture" type="text" value={picture} />
                            { pictureErr && <Alert>Link picture wajib diisi!</Alert> }
                        </div>
                        <Button full>Add Movie</Button>
                    </form>
                </div>
            </section>
        </StyledAddMovieForm>
    );
}

export default AddMovieForm;