import Formulario from "../components/formulario"

function NewClient(){
    return(
        <div>
            <div className="m-10">
                <h1 className="text-3xl font-black text-indigo-800 my-2">Nuevo Cliente</h1>
                <p>Llena los siguientes campos para registrar un cliente.</p>
                <Formulario />
            </div>
        </div>
    )
}

export default NewClient