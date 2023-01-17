import './FirstSection.css'
import videoBGMp4 from './videos/preview.mp4';
import videoBGOgg from './videos/preview.ogg';
import videoBGWebm from './videos/preview.webm';
import angle from './imagens/angle.png';

function FirstSection() {
  {/**Video AQUI */ }
  return (

    <section>
      <div className='video_background' style={{ }}>
        <div className='overlay'></div>
        <video autoPlay loop muted
          style={{}}>
          <source src={videoBGMp4} type="video/mp4" />
          <source src={videoBGOgg} type="video/ogg" />
          <source src={videoBGWebm} type="video/webm" />

          Your browser does not support the video tag.

        </video>
        <div className='content'>
          <h1>Huawei Academy</h1>
          <p>O Instituto Federal de Educação Ciência e Tecnologia de Sergipe (IFS), em parceria com Huawei,
             está ofertando um curso online
             com o objetivo de preparar alunos e profissionais na área de Inteligência Artificial.</p>
             <div style={{marginTop:'5%', fontSize:'13px', fontWeight: '1.6'}}>saiba mais</div>
             <i> <img  style={{width: '17px'}} src={angle}/></i>
        </div>
      
        <div className='buttonHomePage'>
          
        </div>

      </div>
    </section>

  );


}
export default FirstSection;