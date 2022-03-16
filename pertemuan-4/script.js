/**
 * Membuat Component Hello.
 * Component merender element-element Html
 */

function Hello(props) {
    //destructing props
    const { name } = props;

    //di luar return adalah Javascript biasa
    const nama = "Nada";

    // did dalam return adalah JSX
    return (
        <div className="hello">
            <h2>Hello React</h2>
            <p>Saya {name} Frontend Engineer</p>
        </div>
    );
}

/**
 * Membuat Component Header.
 * Menampilkan Navigasi
 */

function Header() {
    return (
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

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

/**
 * Membuat Component Footer
 * Menampilkan footer
 */
function Footer() {
    return (
        <footer>
            <h2>Copyright @prttynadaa</h2>
            <p>Created by React</p>
        </footer>
    );
}

function App() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}


/**
 * Render Component Hello ke HTML
 */
ReactDOM.render(<App />, document.getElementById("root"));