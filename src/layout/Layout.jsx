import { Link, Outlet, useLocation } from "react-router-dom"

function Layaout(){
    const location = useLocation()
    const urlActual= location.pathname

    return(
        <div className="md:flex md:min-h-screen sticky">
            <div className="md:w-1/4 bg-indigo-800 rounded-md py-10 text-white">
                <h2 className="text-3xl font-bold sticky my-4 md:top-5 text-center">CRM CLIENTES</h2>
                <div className="grid text-lg mx-7 top-24 sticky">
                    <Link to="/clientes" className={`${urlActual === '/clientes' ? 'text-indigo-300 ' : ''} hover:text-indigo-300 transition-all font-bold text-2xl`}>
                        Clientes
                    </Link>
                    <Link to="/clientes/nuevo" className={`${urlActual === '/clientes/nuevo' ? 'text-indigo-300' : ''} hover:text-indigo-300 transition-all font-bold text-2xl`}>
                    Nuevo Cliente
                    </Link>
                </div>
            </div>
            <div className="md:w-3/4">
                <Outlet />
            </div>
        </div>
    )
}

export default Layaout