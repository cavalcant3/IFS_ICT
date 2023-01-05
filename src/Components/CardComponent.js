import Card from 'react-bootstrap/Card';
import inteligenciaCard from './imagens/inteligenciaCard.jpg'
//import './CardComponent.css'

function CardComponent() {
    return (
        <div className='Container' style={{ backgroundColor: '#f6f6f6', paddingTop: '70px', paddingBottom: '70px' }}>

            <div style={{ padding: '30px', display: 'flex', justifyContent: 'center' }}>
                <h3 style={{ fontSize: '' }}><strong>Cursos e inscrições</strong></h3>
                <br />
            </div>
            <div className='cardCarrossel' style={{ display: 'flex', justifyContent: 'center' }}>
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={inteligenciaCard} />
                    <Card.Body>
                        <Card.Title>Inteligência Artificial</Card.Title>
                        <Card.Text>
                            Inteligência Artificial (IA) é uma nova ciência técnica para a pesquisa...
                        </Card.Text>
                    </Card.Body>

                    <Card.Body>
                        <Card.Link href="#" class="btn btn-success">Saiba mais</Card.Link>
                    </Card.Body>
                </Card>
            </div>

        </div>


    );
}

export default CardComponent;