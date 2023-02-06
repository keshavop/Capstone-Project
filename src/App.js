import './App.css';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import Gallery from './Components/Gallery';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Gallery></Gallery>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
