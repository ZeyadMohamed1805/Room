import Nav from "../Nav/Nav";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";
import Room from "../Room/Room";
import About from "../About/About";
import Chair from "../Chair/Chair";

const Main = () => {
    return (
        <main className="min-h-screen w-screen grid grid-cols-[2fr_2fr_1fr_2fr] grid-rows-[2fr_1fr]">
            <Nav />
            <Home />
            <Shop />
            <Room />
            <About />
            <Chair />
        </main>
    )
}

export default Main;