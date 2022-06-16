//import Hello.js
import Hello from "../components/Hello.js";

/**
 * Membuat Component Main
 * menampung konten Utama
 */
 function Main() {
    return (
        <main>
            <Hello name="Jae" />
            <Hello name="Sungjin" />
            <Hello name="Youngk" />
            <Hello name="Wonpil" />
            <Hello name="Dowoon" />
        </main>
    );
}

export default Main;