import styles from "./AddMovieForm.module.css";

function AddMovieForm() {
    return(
        <div className={styles.container}>
            <section className={styles.addMovieForm}>
                <div className={styles.addMovieForm__left}>
                    <img className={styles.addMovieForm__image} src="https://picsum.photos/350/250" alt="placeholder" />
                </div>
                <div className={styles.addMovieForm__right}>
                    <h2 className={styles.addMovieForm__title}>Add Movie</h2>
                    <form action="" className={styles.addMovieForm__form}>
                        <div className={styles.addMovieForm__formEl}>
                            <label htmlFor="title">Title</label><br />
                            <input type="text" className={styles.addMovieForm__input} />
                        </div>
                        <div className={styles.addMovieForm__formEl}>
                            <label htmlFor="year">Year</label><br />
                            <input type="text" className={styles.addMovieForm__input} />
                        </div>
                        <button className={styles.addMovieForm__button}>Submit</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default AddMovieForm;