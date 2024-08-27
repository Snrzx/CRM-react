import { Link, Outlet, useLocation } from "react-router-dom"

function Layaout(){
    const location = useLocation()
    const urlActual= location.pathname

    return(
        <div className="md:flex md:min-h-screen">
            <div className="md:w-1/4 bg-indigo-800 rounded-md py-10 text-white">
            {/* {Crear un Dashboard que se pueda desplegar con un botón} */}

                <h2 className="text-2xl font-bold text-center">CRM CLIENTES</h2>
                <div className="grid text-lg m-2 mx-4">
                    <Link to="/clientes" className={`${urlActual === '/clientes' ? 'text-indigo-300' : ''} hover:text-indigo-300 transition-all`}>
                        Clientes
                    </Link>
                    <Link to="/clientes/nuevo" className={`${urlActual === '/clientes/nuevo' ? 'text-indigo-300' : ''} hover:text-indigo-300 transition-all`}>
                    Nuevo Cliente
                    </Link>
                </div>
            </div>
            <div className="md:w-3/4 md:h-screen overflow-scroll">
                <Outlet />
            </div>
        </div>
    )
}

export default Layaout