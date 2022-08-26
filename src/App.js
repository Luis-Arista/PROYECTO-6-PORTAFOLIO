import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import SeccionSobreMi from './Components/SeccionSobreMi/SeccionSobreMi';
import { Element } from 'react-scroll'
import SeccionMiTrabajo from './Components/SeccionMiTrabajo/SeccionMiTrabajo';
import SeccionHabilidades from './Components/SeccionHabilidades/SeccionHabilidades';
import SectionContacto from './Components/SectionContacto/SectionContacto';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div>
      <header>
         <Navbar />
         <Banner />
      </header>
      <main>
        <Element name='Sobre_Mi' >
          <SeccionSobreMi />
        </Element>
        <Element name='Mi_Trabajo' >
          <SeccionMiTrabajo/>
        </Element>
        <Element name='Habilidades' >
          <SeccionHabilidades/>
        </Element>
        <Element name='Contacto' >
          <SectionContacto />
        </Element>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
