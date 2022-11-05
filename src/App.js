import "./App.css";
import About from "./components/About";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Testimonials from "./components/Testimonials";

function App() {
    return (
        <div className="App">
            <Nav />
            <Hero />
            <About />
            <Courses />
            <Testimonials />
            <Footer />
        </div>
    );
}

export default App;
