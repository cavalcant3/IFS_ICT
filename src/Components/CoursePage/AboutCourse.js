
import { Tab, Tabs } from 'react-bootstrap';
import DescriptionComponent from './DescriptionComponent'

function AboutCourse() {
    return (
        <div style={{ width: '100%', paddingLeft: '100px', paddingRight: '100px' }}>
            <Tabs
                defaultActiveKey="profile"
                id="justify-tab-example"
                className="mb-3"
                fill
                style={{}}

            >
                <Tab eventKey="home" title="Descrição" >
                    <div style={{display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                        <p style={{ textAlign: 'center', fontSize: '16px', color: '#a2a2a2', width: '800px', paddingBottom:'20px' }}>No curso são abordados os temas relacionados à Inteligência Artificial, Aprendizado de Máquinas, Aprendizado Profundo,
                            frameworks para aprendizado profundo, PyTorch, TensorFlow, Mindspore,
                            Arquitetura Ascend, plataforma Open AI e Huawei Cloud.</p>
                    </div>
                    <DescriptionComponent />
                </Tab>
                <Tab eventKey="infoAdicional" title="Informação Adicional">
                    <div style={{}}>
                        <p >No curso são abordados os temas relacionados à Inteligência Artificial, Aprendizado de Máquinas, Aprendizado Profundo,
                            frameworks para aprendizado profundo, PyTorch, TensorFlow, Mindspore, Arquitetura Ascend, plataforma Open AI e Huawei Cloud.</p>
                    </div>
                </Tab>
                <Tab eventKey="resultados" title="Resultados">
                    <div style={{}}>
                        <p >No curso são abordados os temas relacionados à Inteligência Artificial, Aprendizado de Máquinas, Aprendizado Profundo,
                            frameworks para aprendizado profundo, PyTorch, TensorFlow, Mindspore, Arquitetura Ascend, plataforma Open AI e Huawei Cloud.</p>
                    </div>
                </Tab>

            </Tabs>


        </div>
    );
}
export default AboutCourse;