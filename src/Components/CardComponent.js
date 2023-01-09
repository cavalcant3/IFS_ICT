import Card from 'react-bootstrap/Card';
import inteligenciaCard from './imagens/inteligenciaCard.jpg'
import { useNavigate } from 'react-router-dom';

function CardComponent() {
    let navigate = useNavigate();
    return (
         <div href="#cursos" className='ContainerCardCourse' style={{ backgroundColor: '#f6f6f6', paddingTop: '70px', paddingBottom: '70px' }}>

             <div style={{ }}>
                 <h3 style={{ textAlign:'center'}}><strong>Cursos e inscrições</strong></h3>
                 <br />
                 <p style={{ textAlign:'center', color:'#a2a2a2', lineHeight: '1.6', fontSize:'16px'}}><i>Conheça mais dos cursos oferecidos,
                  professores ministrantes, bolsistas e o cronograma das aulas e datas de inscrições.</i></p>
             </div>
             <div className='cardCarrossel' style={{ display:'flex', justifyContent:'center' }}>
                 <Card id="sld" style={{ width: '18rem' }}>
                     <Card.Img variant='top'  src="https://www.totvs.com/wp-content/uploads/2019/06/o-que-e-inteligencia-artificial.jpg" />
                     <Card.Body>
                        <Card.Title>Inteligência Artificial</Card.Title>
                         <Card.Text>
                             <i style={{color:'#a2a2a2'}}>Inteligência Artificial (IA) é uma nova ciência técnica para a pesquisa...</i>
                         </Card.Text>
                     </Card.Body>

                     <Card.Body>
                         <Card.Link 
                         onClick={() =>{
                            navigate("/cursos");
                          }}
                         Link to class="btn btn-success">Saiba mais</Card.Link>
                     </Card.Body>
                 </Card>
             </div>

         </div>

        

    );
}

export default CardComponent;