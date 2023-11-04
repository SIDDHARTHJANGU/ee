import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Myheader from "./Components/Myheader";
import Amplify from "./Components/Amplify";
import Sreategies from "./Components/Sreategies";
import Eefi from "./Components/Eefi";
import Ecosystem from "./Components/Ecosystem";
import Supply from "./Components/Supply";
import Ourteam from "./Components/Ourteam";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Roadmap from "./Components/Roadmap";
import Future from "./Components/Future";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Tokenomics from "./Components/Tokenomics";

function App() {
  return (
    <div className=" overflow-hidden">
      <Myheader />
      <Amplify />
      <Sreategies />
      {/* <Tokenomics /> */}
      <Eefi />
      <Supply />
      <Future />
      <Ourteam />
      <Ecosystem />
      <Roadmap />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
