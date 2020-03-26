import Head from 'next/head'
import Welcome from '../src/components/Welcome';
import Navbar from '../src/components/Navbar';
import About from '../src/components/About';
import Events from '../src/components/Events';
import Menu from '../src/components/Menu';
import Map from '../src/components/Map';
import Footer from '../src/components/Footer';
import Contact from '../src/components/Contact';
import Info from '../src/components/Info';
import GalleryC from '../src/components/GalleryC';

const Home = () => (
  <div className="container">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Kabab restaurant: the real food taste</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Welcome />
    <Navbar />
    <About />
    <Menu />
    <Events />
    <GalleryC />
    {/* <Info />
    <Contact /> */}
    <Map />
    <Footer />
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Dancing+Script|Open+Sans|Pacifico&display=swap');
      body {
        font-family: 'Pacifico', cursive;
        font-family: 'Open Sans', sans-serif;
        background: #000000;
      }
      h1{    
        font-weight: bold;
        font-family: 'Pacifico',cursive;
        font-size: 2em;
        color: #ffffff;
        padding: 40px 0 30px 0;
      }
    `}</style>
  </div>
)

export default Home
