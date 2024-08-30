import { useEffect, useState } from "react"
import Formulario from "../components/formulario"
import { useParams } from "react-router-dom" 
import Spin from "../components/spin"

function EditClient(){

    const [cliente, setCliente] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    useEffect(()=>{

        const obtenerCliente=async()=>{
            try {
                const url= `${import.meta.env.VITE_API_URL}/${id}`
                const respuesta= await fetch(url)
                const resultado= await respuesta.json()

                setCliente(resultado)

            } catch (error) {
                console.log(error)
            }
            setLoading(!loading)
        }
        obtenerCliente()

    },[])

    return(
        <div>
            <div className="m-10">
                
                {loading ? <Spin /> : Object.keys(cliente).length === 0 ? (
                <>
                    <h1 className="text-3xl font-black text-indigo-800 my-2">No existe el Cliente</h1>
                    <p>El ID del cliente no es válido.</p>
                </>
                ):
                <>
                    <h1 className="text-3xl font-black text-indigo-800 my-2">Editar Cliente</h1>
                    <p>Llena los siguientes campos para editar el cliente.</p>

                    <Formulario 
                    cliente={cliente}
                    loading={loading}
                    />
                </>
            }
            </div>
        </div>
    )
}

export default EditClient