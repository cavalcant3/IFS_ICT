import './CourseBanner.css'
import aboutTheProject from '../AboutTheProject';

function CourseBanner() {
    return (
        <section>
            <div className="Banner" style={{}}>

                <div className="Container">
                    {/*Ou certificação?*/}
                    <h1 className="titulo" style={{ fontSize: '60px' }}>Treinamento: Artificial Intelligence</h1>
                    <h3 className="titulo" style={{}}><strong>(Certificação HCIA-IA)</strong></h3>
                    <p className="texto">O Instituto Federal de Sergipe em parceria com a Huawei
                        oferta gratuitamente a todos os estudantes e profissionais da área de Tecnologia
                        da Informação e Engenharia do <strong>IFS</strong>, o treinamento para a certificação em Inteligência Artificial.</p>

                </div>
            </div>

        </section>

    );

}

export default CourseBanner;