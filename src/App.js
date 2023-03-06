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
import ErrorPage from './Components/ErrorPage';
import FAQComponent from './Components/FAQComponent';
import SelecaoResultado from './Components/SelecaoResultado';


{/*<MatriculasAbertas />,*/ }
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <FirstSection />
            <AboutTheProject />
            <CardComponent />
            <Coordination />

          </>
        } />

           
        <Route path="/cursos" element={[
          <CourseBanner />, <AboutCourse />,
          <SelecaoResultado />,
           <FAQComponent />,
          <ProfessoresEbolsistas />]} />

        <Route path="*" element={<ErrorPage />} />

        <Route path="/testando" element={<FAQComponent />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
