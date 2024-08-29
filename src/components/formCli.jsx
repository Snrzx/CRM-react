function FormCli({clientes}){

    const {nombre, empresa, email, telefono, id} = clientes

    return(
        <tr  className="border border-gray-300 hover:bg-gray-300 transition-all">
            <td>{nombre}</td>
            <td>
                <p>Email:<span>{email}</span></p>
                <p>Tel<span>{telefono}</span></p>
            </td>
            <td>{empresa}</td>
            <td>
                <button className="boton bg-purple-500 hover:bg-purple-900 my-2 w-3/4 p-1" type="button">ver</button>
                <button className="boton bg-indigo-500 hover:bg-indigo-900 my-2 w-3/4 p-1" type="button">editar</button>
                <button className="boton bg-red-500 hover:bg-red-900 my-2 mb-4 w-3/4 p-1" type="button">eliminar</button>
            </td>
        </tr>
    )
}
export default FormCli