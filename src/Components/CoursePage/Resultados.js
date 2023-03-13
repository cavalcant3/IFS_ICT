import '../CoursePage/Resultados.css'


function Resultados() {
    return (
        <div className="containerResultados">

            <div className='containerrr'>
                {/**           <div>
           <p style={{ fontSize: '20px' }}><strong>Informação adicional</strong></p>
           </div> */}
            <div className='padding' style={{ paddingTop: '100px'}}></div>

                <center>
                    <h3>Editais:</h3>


                    <table>
                        <thead align="center">
                            <tr>
                                {/**<th scope="col">Id</th> */}
                                <th scope="col">Data</th>
                                <th scope="col">Turma</th>
                                <th scope="col">Resultados</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {/** <th scope="row">1</th> */}
                                <td>31/01/2023</td>
                                <td>001</td>
                                <td><a class="btn btn-danger" href="">ACESSE O EDITAL</a></td>
                            </tr>

                        </tbody>
                        <tbody>
                            <tr>
                                {/** <th scope="row">1</th> */}
                                <td>13/03/2023</td>
                                <td>002</td>
                                <td><a class="btn btn-danger" href="https://drive.google.com/file/d/1HkiLlPoKDkl4cHEK2PBmUDv1N5KAzJfz/view?usp=sharing">ACESSE O EDITAL</a></td>
                            </tr>

                        </tbody>
                        <tbody>
                            <tr>
                                {/** <th scope="row">1</th> */}
                                <td>13/03/2023</td>
                                <td>003</td>
                                <td><a class="btn btn-danger" href="https://drive.google.com/file/d/1HkiLlPoKDkl4cHEK2PBmUDv1N5KAzJfz/view?usp=sharing">ACESSE O EDITAL</a></td>
                            </tr>

                        </tbody>
                        <tbody>
                            <tr>
                                {/** <th scope="row">1</th> */}
                                <td>13/03/2023</td>
                                <td>004</td>
                                <td><a class="btn btn-danger" href="https://drive.google.com/file/d/1HkiLlPoKDkl4cHEK2PBmUDv1N5KAzJfz/view?usp=sharing">ACESSE O EDITAL</a></td>
                            </tr>

                        </tbody>
                        
                        <div className='padding' style={{ paddingTop: '100px' }}></div>

                    </table>

                </center>
            </div >



        </div>


    );
}

export default Resultados;  