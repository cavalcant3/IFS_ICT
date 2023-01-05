import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import image from './imagens/HuaweiICT.png'


function aboutTheProject() {
    return(
<div style={{display: 'flex', alignItems: 'center', paddingLeft: '150px', paddingRight: '100px', paddingTop: '70px', paddingBottom:'70px'}}>
  <img src={image} alt="Description of image" style={{marginRight: '10px', marginLeft: '10px'}} />
  <span>
    <h2><strong>O Projeto</strong></h2>
    <br/>
    <span >
  <p style={{ display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart:'0px', marginInlineEnd: '0px', textAlign: 'justify', width: '750px'}}>
  Este projeto oferece a formação fundamental para profissionais que desejam atuar na área de Tecnologia,
     além disso, o curso também prepara o aluno para a certificação <strong>Huawei Certified ICT Associate(HCIA) – Inteligência Artificial.</strong> Após a finalização do curso, o aluno pode realizar
      os simulados através da plataforma
  </p>
  <br/>
     <p style={{ display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart:'0px', marginInlineEnd: '0px', textAlign: 'justify', width: '750px'}}>
     TALENT ONLINE da Huawei e solicitar um voucher gratuito para realização do exame de certificação
O objetivo do curso é capacitar e preparar os alunos para o mercado de trabalho com certificações nos
 cursos correspondentes, ensinando através de aulas teóricas e práticas técnicas de configuração de
  equipamentos da multinacional Huawei. Para isso, o aluno vai dispor de um ambiente online para assistir
   aulas remotas, ferramentas de simulação de laboratórios, exercícios e um grupo de apoio para tirar dúvidas
    com professores capacitados e qualificados.
     </p>
    </span>
  </span>

 
</div>
    );
}
export default aboutTheProject;