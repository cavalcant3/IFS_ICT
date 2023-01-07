import Card from 'react-bootstrap/Card';
import inteligenciaCard from './imagens/inteligenciaCard.jpg'


function CardComponent() {
    return (
         <div href="#cursos" className='Container' style={{ backgroundColor: '#f6f6f6', paddingTop: '70px', paddingBottom: '70px' }}>

             <div style={{ }}>
                 <h3 style={{ textAlign:'center'}}><strong>Cursos e inscrições</strong></h3>
                 <br />
             </div>
             <div className='cardCarrossel' style={{ display:'flex', justifyContent:'center' }}>
                 <Card id="sld" style={{ width: '18rem' }}>
                     <Card.Img variant='top'  src="https://www.totvs.com/wp-content/uploads/2019/06/o-que-e-inteligencia-artificial.jpg" />
                     <Card.Body>
                        <Card.Title>Inteligência Artificial</Card.Title>
                         <Card.Text>
                             Inteligência Artificial (IA) é uma nova ciência técnica para a pesquisa...
                         </Card.Text>
                     </Card.Body>

                     <Card.Body>
                         <Card.Link href="https://e.huawei.com/en/talent/#ict-academy/news-details?consultationId=509" class="btn btn-success">Saiba mais</Card.Link>
                     </Card.Body>
                 </Card>
             </div>

         </div>

        

    );
}

export default CardComponent;