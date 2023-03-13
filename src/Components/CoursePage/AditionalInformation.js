import './AditionalINformation.css'

function AditionalInformation() {
    return (

        <div className='containerrr'>
            {/**           <div>
           <p style={{ fontSize: '20px' }}><strong>Informação adicional</strong></p>
           </div> */}
            <div className='padding' style={{ paddingTop: '30px' }}></div>
            <center>

                <table>
                    <tr>

                        <td className='TitleTable'><strong>Modalidade</strong></td>
                        <td>Remota</td>

                    </tr>



                    <tr>
                        <td className='TitleTable'><strong>Turno</strong></td>
                        <td>Sábado(Remoto), Terça(Remoto) Quinta(Remoto)</td>
                    </tr>
                    <tr>
                        <td className='TitleTable'><strong>Horários</strong></td>
                        <td>Sábado: 8:00 AM - 12:00 PM, Terça 19:00 PM - 20:00 PM, Quinta: 8:00 AM - 10:00 AM</td>
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
                        <td>Serão selecionados os alunos com as melhores pontuações.<br /></td>
                    </tr>
                    <tr>
                        <td className='TitleTable'><strong>Certificação <br />internacional</strong></td>
                        <td>Validade 3 anos após prova de certificação.</td>
                    </tr>
                </table>
            </center>
        </div >

    );

}
export default AditionalInformation;