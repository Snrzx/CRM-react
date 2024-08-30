import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layaout from './layout/Layout'
import Index from './pages'
import NewClient from './pages/newClient'
import EditClient from './pages/editClient'
import ViewClient from './pages/viewClient'
function App() {

  return (
    <>
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Navigate to="/clientes" replace />} />    
        <Route path='/clientes' element={<Layaout />} >
          <Route index element={<Index />} />
          <Route path='nuevo' element={<NewClient />} />
          <Route path='editar/:id' element={<EditClient />} />
          <Route path=':id' element={<ViewClient />} />

        </Route>

      </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
