// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AlsoLike from './Components/also-like-component/alsoLike';
import Background from './Components/background-component/background';
import Contact from './Components/contacts-component/contact';
import Footer from './Components/footer-component/footer';
import Header from './Components/header-component/header';
import Hero from './Components/hero-component/hero';
import Middle from './Components/middle-section-component/middle';
import Mission from './Components/mission-component/mission';
import Nature from './Components/nature-component/nature';
import ShowcaseOne from './Components/showcase-one-component/showcaseOne';
import Wildlife from './Components/wildlife-component/wildlife';

function App() {
  return (
      <div className="App">
        <Header />
        <Background />       
        <ShowcaseOne />
        <Hero />
        <Middle />
        <Nature />
        <AlsoLike />
        <Mission />
        <Wildlife />
        <Contact />
        <Footer />
      </div>
  );
}

export default App;
