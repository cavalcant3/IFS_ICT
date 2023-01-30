import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import image from './imagens/HuaweiICT.png'
import './AboutTheProject.css';

function aboutTheProject() {
  return (
    <div className='ContainerAboutTheProject' style={{ display: 'flex', alignItems: 'center', paddingTop: '70px', paddingBottom: '70px' }}>
      <img src={image} alt="Description of image"  className='ImagemCursoCard' style={{  }} />
      <span>
        <h2><strong>O Projeto</strong></h2>
        <br />
        <span >
          <p style={{ display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em',textAlign: 'justify'}}>
            Este projeto, por <strong>iniciativa do Ministério da Ciência, Tecnologia e Inovações e Softex no âmbito do Programa MCTI Futuro</strong>, oferece a formação fundamental para profissionais que desejam atuar na área de Tecnologia,
            além disso, o curso também prepara o aluno para a certificação <strong>Huawei Certified ICT Associate(HCIA) – Inteligência Artificial.</strong> Após a finalização do curso, o aluno pode realizar
            os simulados através da plataforma
          </p>
          <br />
          <p style={{ display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em',textAlign: 'justify'}}>
            TALENT ONLINE da Huawei e solicitar um voucher gratuito para realização do exame de certificação
            O objetivo do curso é capacitar e preparar os alunos para o mercado de trabalho com certificações nos
            cursos correspondentes, ensinando através de aulas teóricas e práticas técnicas de configuração de
            equipamentos da multinacional Huawei. Para isso, o aluno vai dispor de um ambiente online para assistir
            aulas remotas, ferramentas de simulação de laboratórios, exercícios e um grupo de apoio para tirar dúvidas
            com professores capacitados e qualificados.
          </p>
          <br/>
          <br />
          <p style={{ display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em',textAlign: 'justify'}}>
            
          <strong>Projeto apoiado pelo Ministério da Ciência, Tecnologia e Inovações, com recursos da Lei nº 8.248, 
          de 23 de outubro de 1991. </strong>
          </p>
          <br/>
          
        </span>
        <div className='Requisitos'>
          <h2><strong>Requisitos:</strong></h2>

          <ul >
            <li className='item'>Acompanhar as aulas online</li>
            <li className='item'>Disponibilidade no horário proposto</li> 
            <li className='item'>Dispor de Celular ou Pc</li>
            <li className='item'>Vontade de aprender</li>

          </ul>
          </div>
      </span>


    </div>
  );
}
export default aboutTheProject;