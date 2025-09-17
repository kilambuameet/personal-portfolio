import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/navBar/NavBar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Hobbies from "./components/Hobbies/Hobbies";
import ContactForm from "./pages/contactUs/ContactUs";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Projects />
      <Skills />
      <Hobbies />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
