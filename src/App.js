import Header from "./components/Header";
import Alertsection from "./components/Alertsection";
import Firstsection from "./components/Firstsection";
import Secondsection from "./components/Secondsection";
import Thirdsection from "./components/Thirdsection";
import Fourthsection from "./components/Fourthsection";
import Fifthsection from "./components/Fifthsection";
import Sixthsection from "./components/Sixthsection";
//import Random from "./components/Random"



import Footer from "./components/Footer";
//import AppleYoutube from "./components/AppleYoutube";
import Youtube from "./components/Youtube";



function App() {
  return (
    <div>
    <Header />
    <Alertsection />
    <Firstsection />
    <Secondsection />
    <Thirdsection />
    <Fourthsection />
    <Fifthsection />
    <Sixthsection />
    {/* <Random /> */}
    {/* <AppleYoutube /> */}
    <Youtube />
    <Footer />
    
    </div>
  );
}

export default App;
