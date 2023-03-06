import './SelecaoResultado.css'

{/**PÁGINA DE LISTAR RESULTADOS */}
function SelecaoResultado() {
    return (
        <div className="containerSelecaoResultado">

            <div className='containerrr'>
                {/**           <div>
       <p style={{ fontSize: '20px' }}><strong>Informação adicional</strong></p>
       </div> */}
                <div className='padding' style={{ paddingTop: '30px' }}></div>

                <center>
                    <h3>Resultados</h3>


                    <table className='tabelaSelecaoResultado'>
                        <thead className='tabelaSelecaoResultado' align="center">
                            <tr>
                               {/** <th scope="col">Id</th> */}
                                <th scope="col">Data</th>
                                <th scope="col">Turma</th>
                                <th scope="col">Resultados</th>
                            </tr>
                        </thead>
                        <tbody align="center">
                            <tr>
                                {/**<th scope="row">1</th> */}
                                <td>05/03/2021</td>
                                <td>001</td>
                                <td><a class="btn btn-danger" href='https://drive.google.com/file/d/1opPxxSewyXHssOvjO8Q6ZBm3O0WsoFj6/view?usp=sharing'>LISTA DE RESULTADOS</a></td>
                            </tr>

                            {/**<tr>
                            <th scope="row">2</th>
                            <td>06/03/2021</td>
                            <td>002</td>
                            <td><a class="btn btn-danger" href="resultados/ResultadoTURMA02SITE-HCIAIA.pdf">LISTA DE RESULTADOS</a></td>
                        </tr>

                        <tr>
                            <th scope="row">3</th>
                            <td>16/04/2021</td>
                            <td>003</td>
                            <td><a class="btn btn-danger" href="resultados/Resultado IA - Turma 3.pdf">LISTA DE RESULTADOS</a></td>
                        </tr>

                        <tr>
                            <th scope="row">4</th>
                            <td>16/05/2021</td>
                            <td>004</td>
                            <td><a class="btn btn-danger" href="resultados/Resultado IA - turma 4.pdf">LISTA DE RESULTADOS</a></td>
                        </tr>


                        <tr>
                            <th scope="row">5</th>
                            <td>16/05/2021</td>
                            <td>004 - R</td>
                            <td><a class="btn btn-danger" href="resultados/Resultado IA - turma 4 - remanescentes - todos.pdf">LISTA DE RESULTADOS</a></td>
                        </tr>


 */}


                        </tbody>
                        <div className='padding' style={{ paddingTop: '30px', paddingBottom:'60px' }}></div>

                    </table>
                    {/**       <h3>Turmas Reservas</h3>
                <table>
                    <thead align="center">

                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Data</th>
                            <th scope="col">Turma</th>
                            <th scope="col">Resultados</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>08/02/2021</td>
                            <td>001</td>
                            <td><a class="btn btn-danger" href="resultados/ResultadoTURMA01HCIAIA.pdf">LISTA DE RESULTADOS</a></td>
                        </tr>




                    </tbody>
                </table> */}
                </center>
            </div >



        </div>



    );
}

export default SelecaoResultado;  