import CardProfile from "../CardProfile";
import Step from '../imagens/Step.jpg';
import './ProfessoresEbolsistas.css'
import catuxe from '../imagens/catuxe.jpg';
import ItuanEduao from '../imagens/ItuanEduao.jpg';
import augusto from '../imagens/augusto.jpg';
import gabriel from '../imagens/gabriel.jpg';
import jovino from '../imagens/jovino.jpg';
import eddie from '../imagens/eddiePerfil.jpeg'
import MatheusCavalcante from '../imagens/MatheusCavalcante.jpg'
function ProfessoresEbolsistas() {

    return (
        <div id="background" style={{ paddingTop: '70px', paddingBottom: '70px', backgroundColor: '#f6f6f6' }}>
            <h2 style={{ textAlign: 'center' }}><strong>Professores</strong></h2>
            <div className="containerCardProfile">
                
                <div className="colum33">
                    <CardProfile
                        name="Catuxe Oliveira"
                        profileImageUrl={catuxe}
                        bio="Professora no Instituto Federal de Sergipe" />
                </div>
                <div className="colum33">
                    <CardProfile
                        name="Ituan Eduão"
                        profileImageUrl={ItuanEduao}
                        bio="Professor no Instituto Federal de Sergipe" />
                </div>
                <div className="colum33" style={{}}>
                    <CardProfile
                        name="Augusto Andrade"
                        profileImageUrl={augusto}
                        bio="Professor no Instituto Federal de Sergipe" />
                </div>

            </div>
            <h2 style={{ textAlign: 'center' }}><strong>Bolsistas</strong></h2>
            <div className="containerCardProfile">
                <div className="colum33">
                    <CardProfile
                        name="Matheus Cavalcante"
                        profileImageUrl={MatheusCavalcante}
                        bio="Aluno do Instituto Federal de Sergipe" />
                </div>
                <div className="colum33">
                    <CardProfile
                        name="Gabriel Nascimento"
                        profileImageUrl={gabriel}
                        bio="Aluno do Instituto Federal de Sergipe" />
                </div>
               <div className="colum33">
                    <CardProfile
                        name="Felipe Jovino"
                        profileImageUrl={jovino}
                        bio="Aluno do Instituto Federal de Sergipe" />
                </div>
                <div className="colum33">
                    <CardProfile
                        name="Eddie Fernandes"
                        profileImageUrl={eddie}
                        bio="Aluno do Instituto Federal de Sergipe" />
                </div>

            </div>
        </div>
    );

}
export default ProfessoresEbolsistas;