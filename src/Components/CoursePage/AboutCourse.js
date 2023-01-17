
import { Tab, Tabs } from 'react-bootstrap';
import DescriptionComponent from './DescriptionComponent'
import AditionalInformation from './AditionalInformation'
import Resultados from './Resultados'
import '../CoursePage/AboutCourse.css'

function AboutCourse() {
    {/* Tela de abas para informações dos cursos */ }
    return (
        <div className='ContainerTabs'>
            <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="nav-justified"
                fill
                style={{}}

            >
                <Tab eventKey="home" title="Descrição">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <p style={{ textAlign: 'center', fontSize: '16px', color: '#a2a2a2', width: '800px', paddingBottom: '20px' }}>No curso são abordados os temas relacionados à Inteligência Artificial, Aprendizado de Máquinas, Aprendizado Profundo,
                            frameworks para aprendizado profundo, PyTorch, TensorFlow, Mindspore,
                            Arquitetura Ascend, plataforma Open AI e Huawei Cloud.</p>
                    </div>


                    <div className="DescriptionComponent" style={{}}>
                        
                    <div className="secaoo">
                        <h3 style={{ fontSize: '18px' }}><strong>Inteligência Artificial</strong></h3>
                        <p style={{  }}>Visão Geral, Introdução ao Colab e revisão
                            do básico de Python, Campos e Aplicações,
                            Uso de matrizes com NumPy, Visão Geral de Estratégias da Huawei
                            para IA, Análise de dados com Pandas, Controvérsias da IA, Visualização de dados com Matplotlib e Seaborn.</p>
                    </div>
                        <div className="secaoo">
                            <h3 style={{ fontSize: '18px' }}><strong>Aprendizagem de Máquinas</strong></h3>
                            <p style={{ }}>Definição, Tipos,
                                Processos, KNN, K-Means, Hierarchical clustering, Perceptron, Outros métodos-chave de aprendizagem de máquinas, Linear Regression,
                                Ridge Regression, Lasso Regression, Polynomial Regression, Logistic Regression, Naive-bayes, Decision tree, SVM, Ensemble learning.</p>
                        </div>
                        <div className="secaoo">
                            <h3 style={{ fontSize: '18px' }}><strong>Aprendizagem Profunda (Deep Learning , DL)</strong></h3>
                            <p style={{  }}>
                                Introdução à aprendizagem profunda , Regras de treinamento, Funções de ativação, Estratégias de normalização,
                                Otimizadores, Tipos de redes neurais profundas.</p>
                        </div>
                        <div className="secaoo">
                            <h3 style={{ fontSize: '18px' }}><strong>Huawei CLOUD</strong></h3>
                            <p style={{  }}>

                                Visão geral da HUAWEI CLOUD EI, ModelArts, Soluções com a Huawei CLOUD EI. </p>
                        </div>



                    </div>
                    <div className="DescriptionComponent">
                        <div className="secaoo">
                            <h3 style={{ fontSize: '18px' }}><strong> Frameworks para DL</strong></h3>
                            <p style={{  }}>

                                Pytorch, exposição e demonstração, Tensorflow, características, Tensores no Tensorflow,
                                Variáveis no Tensorflow, Operações básica no Tensorflow, Tensorflow 1.0 versus Tensorflow 2.0,
                                Grafos e sessões , Demonstração, Autograph, Eager Execution no Tensorflow 2, Módulos comuns do Tensorflow,
                                Demonstração, Módulos comuns do Tensorflow , Demonstração, Keras: montagem de modelos, vantagens, métodos e interface,
                                Demonstração.

                            </p>
                        </div>
                        <div className="secaoo">
                            <h3 style={{ fontSize: '18px' }}><strong>Inteligência Artificial</strong></h3>
                            <p style={{  }}>Visão Geral, Introdução ao Colab e revisão
                                do básico de Python, Campos e Aplicações,
                                Uso de matrizes com NumPy, Visão Geral de Estratégias da Huawei
                                para IA, Análise de dados com Pandas, Controvérsias da IA, Visualização de dados com Matplotlib e Seaborn.</p>
                        </div>
                        <div className="secaoo">
                            <h3 style={{ fontSize: '18px' }}><strong> Arquitetura Ascend</strong></h3>
                            <p style={{  }}>
                                AI Chips, Hardware & Software Architecture of Ascend Chips,
                                Huawei Atlas AI Computing Platform, Industry Applications of Atlas.
                            </p>
                        </div>
                        <div className="secaoo">
                            <h3 style={{ fontSize: '18px' }}><strong>Mindspore</strong></h3>
                            <p style={{ }}>
                                Platforma Open AI da Huawei para Dispositivos Inteligentes
                                Ecossistema Industrial da IA, Plataforma de IA da Huawei, Desenvolvimento de apps com base na plataforma de IA da Huawei.</p>
                        </div>

                    </div>
                </Tab>
                <Tab eventKey="infoAdicional" title="Informação Adicional">
                    <div style={{}}>
                        <AditionalInformation />

                    </div>
                </Tab>
                <Tab eventKey="resultados" title="Resultados">
                    <div style={{}}>
                        {/**FALTA ORGANIZAR OS RESULTADOS */}
                        
                        <Resultados />
                    </div>
                </Tab>

            </Tabs>


        </div>
    );
}
export default AboutCourse;