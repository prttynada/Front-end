import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";

function Home({movies}) {
    return (
        <>
            <Hero />
            <Movies />
        </>
    );
}

export default Home;