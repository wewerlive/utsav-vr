import './App.css';
import AboutVR from './components/AboutVR';
import Gallery from './components/Gallery';
import Intro360 from './components/Intro360';
import Partners from './components/Partners';
import RathYatra from './components/RathYatra';
import Sponsors from './components/Sponsors';
import Layout from './layout';

function App() {
  return (
    <>
    <Layout>
      <Intro360 />
      {/* <AboutVR  />
      <RathYatra />
      <Gallery />
      <Partners />
      <Sponsors /> */}
    </Layout>
    </>
  );
}

export default App;
