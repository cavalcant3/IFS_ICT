import { Route, Routes } from "react-router-dom"
import FirstSection from "./Components/FirstSection";
import Header from "./Components/Header";
import AboutTheProject from './Components/AboutTheProject';
import CardComponent from './Components/CardComponent';
import Coordination from './Components/Coordination';
import Footer from './Components/Footer';
import CourseBanner from './Components/CoursePage/CourseBanner';
import AboutCourse from './Components/CoursePage/AboutCourse';
import ProfessoresEbolsistas from './Components/CoursePage/ProfessoresEbolsistas';
import MatriculasAbertas from './Components/CoursePage/MatriculasAbertas';
import AditionalInformation from './Components/CoursePage/AditionalInformation';
import DescriptionComponent from "./Components/CoursePage/DescriptionComponent";
{/*<MatriculasAbertas />,*/ }
function App() {
  return (
    <Routes>
      <Route path="/" element={[<Header />,
      <FirstSection />, <AboutTheProject />,
      <CardComponent />, <Coordination />,
      <Footer />]} />

      <Route path="/cursos" element={[<Header />,
      <CourseBanner />, <AboutCourse />,
      <ProfessoresEbolsistas />,
      <Footer />]} />

      <Route path="/testando" element={[<Header />,<CourseBanner />,<AboutCourse />,<ProfessoresEbolsistas />, <Footer />]}>

      </Route>
    </Routes>

  );
}

export default App;
