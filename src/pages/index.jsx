import { useEffect, useState } from "react"
import FormCli from "../components/formCli"
import Spin from "../components/spin"

function Index(){

    const [clientes, setClientes]= useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const obtenerClientes= async()=>{
            try {
                const url= import.meta.env.VITE_API_URL
                const respuesta= await fetch(url)
                const resultado= await respuesta.json()

                setClientes(resultado)
            } catch (error) {
                console.log(error)
            }
            setLoading(!loading)
        }
        obtenerClientes()
    },[])

    const handleEliminar= async id=>{
        const confirmar = confirm('¿Estás seguro que quieres eliminar este cliente?')

        if (confirmar){
            try {
                const url= `${import.meta.env.VITE_API_URL}/${id}`
                const respuesta= await fetch(url, {
                    method: 'DELETE'
                })
                await respuesta.json()
                const arrayClientes = clientes.filter(cliente=> cliente.id !== id)
                setClientes(arrayClientes)
            } catch (error) {
                
            }
        }
    }

    return(
        <>
            {loading ? <Spin /> : 
            (<div className="mt-10 m-2">
                <h1 className="titulo max-md:text-center md:mx-8">Clientes</h1>
                <p className="font-bold text-lg max-md:text-center md:mx-8">Administra tus clientes</p>
                    <div>
                        {clientes.map(clientes=>(
                            <FormCli 
                            key={clientes.id}
                            clientes={clientes}
                            handleEliminar={handleEliminar}
                        />))}
                    </div>
                </div>)}

        </>
    )
}

export default Index