import './AditionalINformation.css'

function AditionalInformation() {
    return (

        <div className='containerrr'>
            <p style={{fontSize:'20px'}}><strong>Informação adicional</strong></p>
            <table>
                <tr>
                    
                    <td className='TitleTable'><strong>Modalidade</strong></td>
                    <td>100% Online</td>

                </tr>
                
            <tr>
                <td className='TitleTable'><strong>Turno</strong></td>
                <td>Segunda a Sexta - Noite</td>
            </tr>
            <tr>
                <td className='TitleTable'><strong>Horários</strong></td>
                <td>Webconferência (via Google Meet) das 19:00 - 20:30 (presença online obrigatória)</td>
            </tr>
            <tr>
                <td className='TitleTable'><strong>Pré-Requisitos</strong></td>
                <td>Inglês básico e Conhecimento prévio em programação(não obrigatório)</td>
            </tr>
            <tr>
                <td className='TitleTable'><strong>Prova de certificação</strong></td>
                <td>Forma remota</td>
            </tr>
            <tr>
                <td className='TitleTable'><strong>Requisitos para <br />Voucher</strong></td>
                <td>Mooc Exam com pontuação acima de 700 pontos e conclusão
                    de curso preparatório fornecido pelo Instituto<br /> Federal de Sergipe.</td>
            </tr>
            <tr>
                <td className='TitleTable'><strong>Certificação <br />internacional</strong></td>
                <td>Validade 3 anos após prova de certificação.</td>
            </tr>
        </table>
        </div >
    );

}
export default AditionalInformation;