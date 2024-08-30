import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Spin from "../components/spin"

function ViewClient(){
    const [cliente, setCliente]=useState({})
    const [loading, setLoading]= useState(true)
    const {id} = useParams()

    const {nombre, empresa, telefono, email, notas}= cliente

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
            {loading ? <Spin /> : Object.keys(cliente).length === 0 ?
            <div className="m-10">
                <h1 className="titulo">Sin Clientes</h1>
                <p className="font-bold text-lg">No existen clientes en esta lista</p>
            </div>
            :
            (<div className="m-10">
                <h1 className="titulo">Ver clientes</h1>
                <p className="font-bold text-lg">Aquí tendrás la información detallada de todos los clientes</p>
                <div className="componente w-4/5 text-black text-start">
                    <h1 className="text-3xl mb-5 text-white bg-indigo-700 text-center font-black p-2 rounded-lg">Detalles del Cliente</h1>
                    <div className="m-5">
                    {nombre && (
                        <><span className="text-2xl">Cliente</span><p className="text-gray-600 my-3">{nombre}</p></>
                    )}    
                    {empresa && (
                        <><span className="text-2xl">Empresa</span><p className="text-gray-600 my-3">{empresa}</p></>
                    )}
                    {email && (
                        <><span className="text-2xl">Email</span><p className="text-gray-600 my-3">{email}</p></>
                    )}
                    {telefono && (
                        <><span className="text-2xl">Teléfono</span><p className="text-gray-600 my-3">{telefono}</p></>
                    )}
                    {notas && (
                        <><span className="text-2xl">Notas</span><p className="text-gray-600 my-3">{notas}</p></>
                    )}
                    </div>
                </div>
            </div>)}
        </div>
    )
}

export default ViewClient