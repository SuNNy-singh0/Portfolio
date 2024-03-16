import logo from './logo.svg';
import './App.css';
import Header from './compoents/header';
import Banner from './compoents/Banner';
import About from './compoents/About';
import Service from './compoents/Service';
import Expertise from './compoents/Expertise';
import Footer from './compoents/Footer';
function App() {
  return (
   <>
   <Header/>
   <Banner/>
   <About></About>
   <Service/>
   <Expertise></Expertise>
   <Footer></Footer>
   </>
  );
}

export default App;
