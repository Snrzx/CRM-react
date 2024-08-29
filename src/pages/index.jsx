import { useEffect, useState } from "react"
import FormCli from "../components/formCli"

function Index(){

    const [clientes, setClientes]= useState([])

    useEffect(()=>{
        const obtenerClientes= async()=>{
            try {
                const url= 'http://localhost:3000/clientes'
                const respuesta= await fetch(url)
                const resultado= await respuesta.json()

                setClientes(resultado)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerClientes()
    },[])

    return(
        <div>
            <div>
            <div className="m-10">
                <h1 className="text-3xl font-black text-indigo-800 my-2">Clientes</h1>
                <p>Administra tus clientes</p>

                <table className="componente w-full">
                    <thead className="bg-indigo-600 text-white">
                        <tr>
                            <th className="p-2">Nombre</th>
                            <th className="p-2">Contacto</th>
                            <th className="p-2">Empresa</th>
                            <th className="p-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map(clientes=>(<FormCli 
                            key={clientes.id}
                            clientes={clientes}
                        />))}
                    </tbody>

                </table>
            </div>
            </div>
        </div>
    )
}

export default Index