import Blog from "./components/Blog";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
     <Nav />
     <Hero />
     <Menu />
     <Events />
     <Blog />
     <Footer />
    </div>
  );
}

export default App;
