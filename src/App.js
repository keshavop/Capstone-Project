import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import Gallery from './Components/Gallery';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import Home from './Components/Home';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Slider></Slider>
      <Gallery></Gallery>
      <About></About>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
