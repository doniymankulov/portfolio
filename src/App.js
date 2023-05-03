import './App.css';
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Hero/>
            <About/>
            <Footer/>
        </div>
    );
}

export default App;
