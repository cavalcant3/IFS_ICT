import CardProfile from "../CardProfile";
import Step from '../imagens/Step.jpg';
import './ProfessoresEbolsistas.css'
import catuxe from '../imagens/catuxe.jpg';
import ItuanEduao from '../imagens/ItuanEduao.jpg';
import augusto from '../imagens/augusto.jpg';
import gabriel from '../imagens/gabriel.jpg';
import joao from '../imagens/joao.jpeg';
import eddie from '../imagens/eddiePerfil.jpeg'
function ProfessoresEbolsistas() {

    return (
        <div id="background" style={{ paddingTop: '70px', paddingBottom: '70px', backgroundColor: '#f6f6f6' }}>
            <h2 style={{ textAlign: 'center' }}><strong>Professores</strong></h2>
            <div className="containerCardProfile">
                <div className="colum33" style={{}}>
                    <CardProfile
                        name="Stephanie"
                        profileImageUrl={Step}
                        bio="Professor2 geral" />
                </div>
                <div className="colum33">
                    <CardProfile
                        name="Catuxe"
                        profileImageUrl={catuxe}
                        bio="Professor2 geral" />
                </div>
                <div className="colum33">
                    <CardProfile
                        name="Ituan Eduão"
                        profileImageUrl={ItuanEduao}
                        bio="Professor2 geral" />
                </div>
                <div className="colum33" style={{}}>
                    <CardProfile
                        name="Augusto"
                        profileImageUrl={augusto}
                        bio="Professor2 geral" />
                </div>

            </div>
            <h2 style={{ textAlign: 'center' }}><strong>Bolsistas</strong></h2>
            <div className="containerCardProfile">
                <div className="colum33">
                    <CardProfile
                        name="Matheus Cavalcante"
                        profileImageUrl={gabriel}
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
                        name="João"
                        profileImageUrl={joao}
                        bio="Aluno do Instituto Federal de Sergipe" />
                </div>
                <div className="colum33">
                    <CardProfile
                        name="Eddie"
                        profileImageUrl={eddie}
                        bio="Aluno do Instituto Federal de Sergipe" />
                </div>

            </div>
        </div>
    );

}
export default ProfessoresEbolsistas;