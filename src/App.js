import './App.css';
import Header from './components/Header'
import Hero from './components/Hero'
import Card from './components/Card'
import DisplayCards from './components/DisplayCards'

//import Jokes from './components/JokeDataComponent'
//import Jokes from './components/Jokes'
//import Contact from './components/Contact'

// import img1 from './images/image23.png'
// import img2 from './images/image24.png'
// import img3 from './images/image25.png'
// import img4 from './images/image26.png'
// import envelope from './images/envelope-circle-check-solid.svg'
// import phone from './images//phone-solid.svg'

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <div className="card-container">
      {/* <Card
        img={Swimmer}
        isAvailable={true}
        available="SOLD OUT"
        rating={4.5}
        reviewCount={10}
        country="Canada"
        title="Life lessons with Katie Zafares"
        price={25}
      />

      <Card
        img={Wedding}
        isAvailable={true}
        available="ONLINE"
        rating={3.5}
        reviewCount={35}
        country="UK"
        title="Learn wedding photography"
        price={25}
      />
      
      <Card
        img={Bike}
        isAvailable={false}
        rating={2.5}
        reviewCount={5}
        country="Mexico"
        title="Group mountain bike"
        price={40}
      /> */}
      <DisplayCards/>
      </div>
      
    </div>
  );
}

export default App;





////////////////////////////////////////////////////////////
/**
 * Contact component
 */
      // <div className="contact-comp">
      //   <Contact 
      //     image={img1}
      //     name="White Beard"
      //     phoneogo={phone}
      //     phone="121-456-7845"
      //     emailLogo={envelope}
      //     email="example@hotmail.com"
      //   />
      //   <Contact 
      //     image={img2}
      //     name="Mr. Black"
      //     phoneLogo={phone}
      //     phone="320-541-7841"
      //     emailLogo={envelope}
      //     email="example2@hotmail.com"
      //   />
      //   <Contact 
      //     image={img3}
      //     name="Jackie Chan"
      //     phoneLogo={phone}
      //     phone="612-451-8555"
      //     emailLogo={envelope}
      //     email="example3@hotmail.com"
      //   />
      //   <Contact 
      //     image={img4}
      //     name="Denzel Washington"
      //     phoneLogo={phone}
      //     phone="314-874-1111"
      //     emailLogo={envelope}
      //     email="example4@hotmail.com"
      //   />
      // </div>

      ////////////////////////////////////////////////////////////////////
      /** 
       * joke Component
      */ 


      // <Jokes
      //   setup="Knock Knock, who's there?"
      //   punchline="Definitely not YOU!"
      //   isTrue= {true}
      //   age= {25}
      // />
      // <Jokes
      //   setup="Joke 2 blah blah"
      //   punchline="This is not funny!"
      // />
      // <Jokes
      //   setup="Joke 3 ha ha"
      //   punchline="Still not FUNNY!!"
      // />
      // <Jokes
      //   setup="Joke 4"
      //   punchline="I may have messed up"
      // />
