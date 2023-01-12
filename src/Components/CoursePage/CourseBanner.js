import './CourseBanner.css'
import aboutTheProject from '../AboutTheProject';
import inteligenciaCard from '../imagens/inteligenciaCard.jpg'
import Button from 'react-bootstrap/Button'
function CourseBanner() {
    return (
        <section>
            <div className="Banner">
                <div className="Container">
                    {/*Ou certificação?*/}
                    <h1 className="titulo" style={{ fontSize: '35px'}}>Inteligência Artificial </h1>
                </div>
            </div>
           
     <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '150px', paddingRight: '100px', paddingTop: '80px', paddingBottom: '70px' }}>
      <img src={inteligenciaCard} alt="Description of image" style={{ marginRight: '10px', marginLeft: '10px', width:'500px', height:'300px', marginTop: '90px' }} />
      <span style={{paddingLeft:'20px'}}>
        <h2 style={{paddingTop:'70px'}}>Huawei ICT Academy HCIA - Inteligência Artificial</h2>
        
        <span >
          <p style={{color:'#a2a2a2', display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px', textAlign: 'justify', width: '750px' }}>
          Inteligência Artificial (IA) é uma nova ciência técnica para a pesquisa e desenvolvimento de teorias, métodos, tecnologias e sistemas de aplicação para simular
           e estender a inteligência humana. A inteligência artificial é um ramo da ciência da computação. Ele tenta compreender a essência da inteligência e produzir uma nova máquina inteligente
            que pode responder de maneira semelhante à inteligência humana. A pesquisa neste campo inclui robótica, reconhecimento de linguagem, reconhecimento de imagem,
           processamento de linguagem natural e sistemas especialistas.
          </p>
          <p style={{color:'#a2a2a2', display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px', textAlign: 'justify', width: '750px' }}>
          <strong>*Verificar datas de inscrição</strong>
          </p>
          <br />
          <Button variant="btn-primary" style={{textAlign: 'center', borderColor: '#269238', backgroundColor:'#269238', fontSize:'14px', color:'#ffff', fontWeight: 'bold', border:'1px solid #fff', padding:'13px 40px', textTransform:'capitalize'}}>INSCREVA-SE</Button>
        </span>
      </span>


    </div>

        </section>

    );

}

export default CourseBanner;