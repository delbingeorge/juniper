import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
// import Courses from "./components/Courses";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";

function App() {
    return (
        <div className="App">
            <Nav />
            <Hero />
            <About />
            {/* <Courses /> */}
            <Pricing />
            <Faq />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
