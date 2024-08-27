import { Formik, Form, Field } from "formik"
import * as yup from 'yup'
import Error from "./Error"

function Formulario(){
    const newClientSchema = yup.object().shape({
        nombre: yup.string()
        .min(3, 'El nombre escrito es muy corto')
        .max(20, 'El nombre escrito es muy largo')
        .required('Es Obligatorio el nombre del Cliente'),

        empresa: yup.string().required('Es Obligatorio el nombre de la empresa'),

        email: yup.string()
        .email('Email no válido')
        .required('Es obligatorio la dirección de correo electronico'),
        
        telefono: yup.number()
        .positive('El número no es válido')
        .integer('El número no es válido')
        .typeError('El número no es válido')
    })

    const handleSubmit=(values)=>{

    }

    return(
        <div>
            <div className="bg-white text-gray-500 font-bold shadow-lg rounded-lg mt-10 border border-gray-300 p-5 lg:w-1/2 mx-auto">
                <h1 className="text-2xl mb-10 text-center">Agregar Cliente</h1>

                <Formik initialValues={{
                    nombre: '',
                    empresa: '',
                    email: '',
                    telefono: '',
                    notas: ''
                }} onSubmit={(values)=>{handleSubmit(values)}}
                    validationSchema={newClientSchema}
                >
                     
                {({errors, touched})=>{ return(
                    <Form>
                        <div>
                            <label htmlFor="nombre">Nombre</label>
                            <Field className="campoForm" id="nombre" type="text" name="nombre" placeholder='Nombre del Cliente' />
                            {errors.nombre && touched.nombre ? <Error>{errors.nombre}</Error> : null}
                        </div>
                        <div>
                            <label htmlFor="empresa">Empresa</label>
                            <Field className="campoForm" id="empresa" type="text" name="empresa" placeholder='Nombre de la Empresa' />
                            {errors.empresa && touched.empresa ? <Error>{errors.empresa}</Error> : null}
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <Field className="campoForm" id="email" type="email" name="email" placeholder='Dirección de correo electronico' />
                            {errors.email && touched.email ? <Error>{errors.email}</Error> : null}
                        </div>
                        <div>
                            <label htmlFor="telefono">Teléfono</label>
                            <Field className="campoForm" id="telefono" type="tel" name="telefono" placeholder='Número de teléfono' />
                            {errors.telefono && touched.telefono ? <Error>{errors.telefono}</Error> : null}
                        </div>
                        <div>
                            <label htmlFor="notas">Notas</label>
                            <Field className="campoForm" id="notas" type="text" name="notas" as="textarea" placeholder='Notas' />
                            {errors.notas && touched.notas ? <Error>{errors.notas}</Error> : null}
                        </div>
                        <input type="submit" value="Agregar Cliente" className="boton bg-indigo-600 hover:bg-indigo-800"/>
                    </Form>
                    )
                }}
                </Formik>
            </div>
        </div>
    )
}

export default Formulario