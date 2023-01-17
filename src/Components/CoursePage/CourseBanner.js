import '../CoursePage/CourseBanner.css'
import inteligenciaCard from '../imagens/inteligenciaCard.jpg'
import Button from 'react-bootstrap/Button'
import AboutCourse from './AboutCourse'
function CourseBanner() {
  return (
    <section>
      <div className="Banner">
        <div className="Container">
          <h1 className="titulo" style={{ fontSize: '35px' }}>Inteligência Artificial </h1>
        </div>
      </div>

      <div className='Containerr'>
        <div className='containerAboutCourse' style={{}}>
          {/**Ajustar tamanho da imagem */}
          <img className='inteligenciaCard' src={inteligenciaCard} alt="Description of image" style={{}} />
          <span className='containerTextos'>
            <h2 style={{ paddingTop: '70px' }}>Huawei ICT Academy HCIA - Inteligência Artificial</h2>


            <p className='textCourseB' style={{}}>
              Inteligência Artificial (IA) é uma nova ciência técnica para a pesquisa e desenvolvimento de teorias, métodos, tecnologias e sistemas de aplicação para simular
              e estender a inteligência humana. A inteligência artificial é um ramo da ciência da computação. Ele tenta compreender a essência da inteligência e produzir uma nova máquina inteligente
              que pode responder de maneira semelhante à inteligência humana. A pesquisa neste campo inclui robótica, reconhecimento de linguagem, reconhecimento de imagem,
              processamento de linguagem natural e sistemas especialistas.
            </p>
            <p className='textCourseB' style={{}}>
              <strong>*Verificar datas de inscrição</strong>
            </p>
            <br />
            <Button variant="btn-primary" style={{ textAlign: 'center', borderColor: '#269238', backgroundColor: '#269238', fontSize: '14px', color: '#ffff', fontWeight: 'bold', border: '1px solid #fff', padding: '13px 40px', textTransform: 'capitalize' }}>INSCREVA-SE</Button>

          </span>
        </div>

      </div>

    </section>

  );

}

export default CourseBanner;