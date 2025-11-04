import Navbar from './components/Navbar';
import Intro from './components/IntroPage';
import Home from './components/Home';
import Cursor from './components/FollowCursor';
import TeamSections from './components/TeamSections';
import Whatsapp from './components/wa';
import Contact from './components/ContactFrom';
import Backgroundvidio from './components/Background';
import GaleryPhoto from './components/GaleryPhoto';
import Footer from './components/footer';
import About from './components/About';
import SosialMedia from './components/SosialMedia';
import PagesClients from './components/PagesClients';
import Pricing from './components/Pricing';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Backgroundvidio />
      {/* <Intro /> */}
      <GaleryPhoto />
      <SosialMedia />
      <TeamSections />
      <PagesClients />
      <Contact />
      {/* <Pricing /> */}
      <Footer />
      <Whatsapp />
      <Cursor />
    </div>
  );
}

export default App;
