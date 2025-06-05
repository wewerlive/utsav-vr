import '../App.css';
import AboutVR from '../components/AboutVR';
import Gallery from '../components/Gallery';
import Partners from '../components/Partners';
import RathYatra from '../components/RathYatra';
// import Sponsors from './components/Sponsors';
import Layout from '../layout';

function AboutUs() {
  return (
    <>
    <Layout>
      <AboutVR  />
      <RathYatra />
      <Gallery />
      <Partners />
      {/* <Sponsors /> */}
    </Layout>
    </>
  );
}

export default AboutUs;