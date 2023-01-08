import CardProfile from "../CardProfile";
import Step from '../imagens/Step.jpg';
import './ProfessoresEbolsistas.css'

function ProfessoresEbolsistas() {

    return (
        <div id="background" style={{ paddingTop: '70px', paddingBottom: '70px', backgroundColor: '#f6f6f6' }}>
            <h2 style={{ textAlign: 'center' }}><strong>Professores</strong></h2>
            <div className="containerCardProfile">
                <div className="colum33" style={{}}>
                    <CardProfile
                        name="Professor2"
                        profileImageUrl={Step}
                        bio="Professor2 geral" />
                </div>
                <div className="colum33">
                    <CardProfile
                        name="Professor2"
                        profileImageUrl={Step}
                        bio="Professor2 geral" />
                </div>
                <div className="colum33">
                    <CardProfile
                        name="Professor3"
                        profileImageUrl={Step}
                        bio="Professor2 geral" />
                </div>
                <div className="colum33" style={{}}>
                    <CardProfile
                        name="Professor2"
                        profileImageUrl={Step}
                        bio="Professor2 geral" />
                </div>
                <div className="colum33">
                    <CardProfile
                        name="Professor2"
                        profileImageUrl={Step}
                        bio="Professor2 geral" />
                </div>
                <div className="colum33">
                    <CardProfile
                        name="Professor3"
                        profileImageUrl={Step}
                        bio="Professor2 geral" />
                </div>
                <div className="colum33">
                    <CardProfile
                        name="Professor3"
                        profileImageUrl={Step}
                        bio="Professor2 geral" />
                </div>
                


            </div>
            <h2 style={{ textAlign: 'center' }}><strong>Bolsistas</strong></h2>
            <div className="containerCardProfile">
                
            <div className="colum33">
                    <CardProfile
                        name="Professor2"
                        profileImageUrl={Step}
                        bio="Professor2 geral" />
                </div>
                <div className="colum33">
                    <CardProfile
                        name="Professor3"
                        profileImageUrl={Step}
                        bio="Professor2 geral" />
                </div>
                <div className="colum33">
                    <CardProfile
                        name="Professor3"
                        profileImageUrl={Step}
                        bio="Professor2 geral" />
                </div>
                
            </div>
        </div>
    );

}
export default ProfessoresEbolsistas;