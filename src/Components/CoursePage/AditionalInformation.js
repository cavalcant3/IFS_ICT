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
                        <td>Híbrida</td>

                    </tr>



                    <tr>
                        <td className='TitleTable'><strong>Turno</strong></td>
                        <td>Sábado(Presencial) e Quinta(Remoto): Manhã</td>
                    </tr>
                    <tr>
                        <td className='TitleTable'><strong>Horários</strong></td>
                        <td>Sábado: 8h-11h, Quinta: 8h-10h</td>
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
                        <td>Moock Exam com pontuação acima de 700 pontos e conclusão
                            de curso preparatório fornecido pelo Instituto<br /> Federal de Sergipe.</td>
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