import './DescriptionComponent.css'

function DescriptionComponent() {
    return (
        <div className="testee1234" style={{}}>
           
           {/**a correção do código:
            *  <div style={{ display: "flex" }}>
      <div style={{ width: "49.2%", marginRight: "1.6%" }}>Coluna 1</div>
      <div style={{ width: "49.2%" }}>Coluna 2</div>
    </div>
            */}
            <div className="secaoo">
                <h3 style={{ fontSize: '18px' }}><strong>Inteligência Artificial</strong></h3>
                <p style={{ lineHeight: '1.6', fontSize: '16px', color: '#a2a2a2', width: '400px' }}>Visão Geral, Introdução ao Colab e revisão
                    do básico de Python, Campos e Aplicações,
                    Uso de matrizes com NumPy, Visão Geral de Estratégias da Huawei
                    para IA, Análise de dados com Pandas, Controvérsias da IA, Visualização de dados com Matplotlib e Seaborn.</p>
            </div>
            <div className="secaoo">
                <h3 style={{ fontSize: '18px' }}><strong>Aprendizagem de Máquinas</strong></h3>
                <p style={{ lineHeight: '1.6', fontSize: '16px', color: '#a2a2a2', width: '400px' }}>Definição, Tipos,
                    Processos, KNN, K-Means, Hierarchical clustering, Perceptron, Outros métodos-chave de aprendizagem de máquinas, Linear Regression,
                    Ridge Regression, Lasso Regression, Polynomial Regression, Logistic Regression, Naive-bayes, Decision tree, SVM, Ensemble learning.</p>
            </div>
            <div className="secaoo">
                <h3 style={{ fontSize: '18px' }}><strong>Aprendizagem Profunda (Deep Learning , DL)</strong></h3>
                <p style={{ lineHeight: '1.6', fontSize: '16px', color: '#a2a2a2', width: '400px' }}>
                    Introdução à aprendizagem profunda , Regras de treinamento, Funções de ativação, Estratégias de normalização,
                    Otimizadores, Tipos de redes neurais profundas.</p>
            </div>
            <div className="secaoo">
                <h3 style={{ fontSize: '18px' }}><strong>Huawei CLOUD</strong></h3>
                <p style={{ lineHeight: '1.6', fontSize: '16px', color: '#a2a2a2', width: '400px' }}>

                    Visão geral da HUAWEI CLOUD EI, ModelArts, Soluções com a Huawei CLOUD EI. </p>
            </div>
            <div className="secaoo">
                <h3 style={{ fontSize: '18px' }}><strong> Frameworks para DL</strong></h3>
                <p style={{ lineHeight: '1.6', fontSize: '16px', color: '#a2a2a2', width: '400px' }}>

                    Pytorch, exposição e demonstração, Tensorflow, características, Tensores no Tensorflow,
                    Variáveis no Tensorflow, Operações básica no Tensorflow, Tensorflow 1.0 versus Tensorflow 2.0,
                    Grafos e sessões , Demonstração, Autograph, Eager Execution no Tensorflow 2, Módulos comuns do Tensorflow,
                    Demonstração, Módulos comuns do Tensorflow , Demonstração, Keras: montagem de modelos, vantagens, métodos e interface,
                    Demonstração.

                </p>
            </div>
            <div className="secaoo">
                <h3 style={{ fontSize: '18px' }}><strong>Inteligência Artificial</strong></h3>
                <p style={{ lineHeight: '1.6', fontSize: '16px', color: '#a2a2a2', width: '400px' }}>Visão Geral, Introdução ao Colab e revisão
                    do básico de Python, Campos e Aplicações,
                    Uso de matrizes com NumPy, Visão Geral de Estratégias da Huawei
                    para IA, Análise de dados com Pandas, Controvérsias da IA, Visualização de dados com Matplotlib e Seaborn.</p>
            </div>
            <div className="secaoo">
                <h3 style={{ fontSize: '18px' }}><strong> Arquitetura Ascend</strong></h3>
                <p style={{ lineHeight: '1.6', fontSize: '16px', color: '#a2a2a2', width: '400px' }}>
                    AI Chips, Hardware & Software Architecture of Ascend Chips,
                    Huawei Atlas AI Computing Platform, Industry Applications of Atlas.
                </p>
            </div>
            <div className="secaoo">
                <h3 style={{ fontSize: '18px' }}><strong>Mindspore</strong></h3>
                <p style={{ lineHeight: '1.6', fontSize: '16px', color: '#a2a2a2', width: '400px' }}>
                    Platforma Open AI da Huawei para Dispositivos Inteligentes
                    Ecossistema Industrial da IA, Plataforma de IA da Huawei, Desenvolvimento de apps com base na plataforma de IA da Huawei.</p>
            </div>

        </div>
    );
}

export default DescriptionComponent;