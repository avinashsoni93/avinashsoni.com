import Header from "./components/Header";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import ContactMe from "./pages/ContactMe";
import Timeline from "./pages/Timeline";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="home" className="main-container">
      <Header />
      <Home />
      <Skills />
      <Timeline />
      <Projects />
      {/* <ContactMe /> */}
      <Footer />
    </div>
  );
}

export default App;
