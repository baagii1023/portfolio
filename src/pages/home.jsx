import  Hero  from '../components/Hero'
import  About from '../components/About'
import  Navbar  from '../components/Navbar'
import  Projects  from '../components/Projects'
import  Tech  from '../components/Tech'
import  Contact from '../components/Contact'

function Home() {
  return (
      <div className="relative z-0">
        <div>
          <Navbar />
          <Hero />
        </div>

        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <About />
        </div>

        <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Tech />
        </div>

        <Projects />

        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <Contact />
        </div>
      </div>
  );
};

export default Home
