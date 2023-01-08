import {Route, Routes} from "react-router-dom"
import FirstSection from "./Components/FirstSection";
import Header from "./Components/Header";
import AboutTheProject from './Components/AboutTheProject';
import CardComponent from './Components/CardComponent'
import Coordination from './Components/Coordination'
import Footer from './Components/Footer'
function App() {
  return (
<Routes>
  <Route path="/" element={[<Header />,
   <FirstSection />, <AboutTheProject />,
    <CardComponent />, <Coordination />,
    <Footer/>]} />

<Route path="/cursos" element={[<Header />,
    <AboutTheProject />,
    <CardComponent />, <Coordination />,
    <Footer/>]} />
</Routes>
  );
}

export default App;
