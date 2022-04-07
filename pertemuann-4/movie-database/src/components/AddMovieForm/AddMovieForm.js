import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./AddMovieForm.module.css";


function AddMovieForm(props) {
    // destructing props
    const {movies, setMovies} = props;

    // Membuat state title
    const [title, setTitle] = useState("");
    // Membuat state untuk date
    const [date, setDate] = useState("");
    // membuat state untuk genre
    const [genre, setGenre] =useState("");
    // membuat state untuk picture
    const [picture, setPicture] = useState("");

    // membuat state title dan date serta genre dan picture error/empty
    const [isTitleError, setIsTitleError] = useState(false);
    const [isDateError, setIsDateError] = useState(false);
    const [isGenreError, setIsGenreError] = useState(false);
    const [isPicError, setIsPicError] = useState(false);


    // Membuat fungsi handleTitle
    function handleTitle(e) {
        setTitle(e.target.value);
    }

    function handleDate(e) {
        setDate(e.target.value);
    }

    function handleGenre(e) {
        setGenre(e.target.value);
    }

    function handlePic(e) {
        setPicture(e.target.value);
    }

    // handle form ketika disubmit
    function handleSubmit(e) {
        // mencegah perilaku default: refresh
        e.preventDefault();

        // jika title kosong maka set error title: true
        if (title === "") {
            setIsTitleError(true);
        }
        else if (date === "") {
            setIsTitleError(false);
            setIsDateError(true);
        }
        else if (genre === "") {
            setIsTitleError(false);
            setIsDateError(false);
            setIsGenreError(true);
        }
        else if (picture === "") {
            setIsTitleError(false);
            setIsDateError(false);
            setIsGenreError(false);
            setIsPicError(true);
        }
        else {
         // siapkan movie yang ingin diinput
            const movie = {
                id: nanoid(),
                title: title,
                year: date,
                type: genre,
                poster: picture
            };

            setMovies([...movies, movie]);  
            setIsTitleError(false);
            setIsDateError(false);
            setIsGenreError(false);
            setIsPicError(false); 
        }
    }

    return(
        <div className={styles.container}>
            <section className={styles.addMovieForm}>
                <div className={styles.addMovieForm__left}>
                    <img className={styles.addMovieForm__image} src="https://picsum.photos/350/250" alt="placeholder" />
                </div>
                <div className={styles.addMovieForm__right}>
                    <h2 className={styles.addMovieForm__title}>Add Movie</h2>
                    <form action="" className={styles.addMovieForm__form} onSubmit={handleSubmit} >
                        <div className={styles.addMovieForm__formEl}>
                            <label htmlFor="title">Title</label><br />
                            <input onChange={handleTitle} id="title" type="text" className={styles.addMovieForm__input} value={title} />
                            {/* 
                            jika error title tru: muncul errror
                            jika tidak, munculkan string kosong */}
                            {isTitleError && <Alert>Title wajib diisi!</Alert> }
                        </div>
                        <div className={styles.addMovieForm__formEl}>
                            <label htmlFor="date">Date</label><br />
                            <input onChange={handleDate} id="date" type="number" className={styles.addMovieForm__input} value={date} />
                            { isDateError && <Alert>Date wajib diisi!</Alert> }
                        </div>
                        <div className={styles.addMovieForm__formEl}>
                            <label htmlFor="genre">Genre</label><br />
                            <select onChange={handleGenre} name="select" id="select" className={styles.addMovieForm__input} value={genre}>
                                <option value="romance">Romance</option>
                                <option value="thriller">Thriller</option>
                                <option value="action">Action</option>
                                <option value="comedy">Comedy</option>
                                <option value="mistery">Mistery</option>
                                <option value="fantasy">Fantasy</option>
                                <option value="horror">Horror</option>
                                <option value="drama">Drama</option>
                            </select>
                            { isGenreError && <Alert>Genre wajib diisi!</Alert> }
                        </div>
                        <div className={styles.addMovieForm__formEl}>
                            <label htmlFor="picture">Picture Link</label><br />
                            <input onChange={handlePic} id="picture" type="text" className={styles.addMovieForm__input} value={picture} />
                            { isPicError && <Alert>Link picture wajib diisi!</Alert> }
                        </div>
                        <button className={styles.addMovieForm__button}>Submit</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default AddMovieForm;