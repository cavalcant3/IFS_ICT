import CardProfile from "./CardProfile";
import Step from './imagens/Step.jpg'
function Coordination(params) {
    return (
        <div id="background" style={{ paddingTop: '70px', paddingBottom: '70px' }}>
            <h2 style={{ textAlign: 'center' }}><strong>Coordenação</strong></h2>
            <div style={{ display: "flex", justifyContent: 'center', paddingTop: '20px' }}>

                {/*centralizar a foto ou acima ou na esquerda do card */}
                <CardProfile
                    name="Stephany Kamarry"
                    profileImageUrl={Step}
                    bio="Coordenadora geral" />

            </div>
        </div>
    );
}
export default Coordination;