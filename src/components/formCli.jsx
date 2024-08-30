import { useNavigate } from "react-router-dom"

function FormCli({clientes, handleEliminar}){

    const navigate= useNavigate()

    const {nombre, empresa, email, telefono, id} = clientes

    return(
        <>
        <div className="flex flex-col componente">
            <div className="flex bg-gray-100">
                <div className="bg-indigo-600 text-white grid gap-4 content-evenly px-5">
                    <p>Nombre</p>
                    <p>Empresa</p>
                    <p>Contacto</p>
                    
                </div>
                <div className="w-10/12 grid gap-4 p-5">
                    <p>{nombre}</p>
                    <span>{empresa}<p>{email}</p></span>
                    <p>{telefono}</p>
                </div>
            </div>
            <div className="flex bg-slate-300">
                <button onClick={()=>navigate(`/clientes/${id}`)} className="boton bg-purple-500 hover:bg-purple-900 rounded-b-lg p-2" type="button">ver</button>
                <button className="boton bg-indigo-500 hover:bg-indigo-900 rounded-b-lg" type="button" onClick={()=> navigate(`/clientes/editar/${id}`)}>editar</button>
                <button className="boton bg-red-500 hover:bg-red-900 rounded-b-lg" type="button" onClick={()=> handleEliminar(id)}>eliminar</button>
            </div>
        </div>

        </>
    )
}
export default FormCli