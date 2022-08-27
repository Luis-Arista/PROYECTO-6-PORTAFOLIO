import axios from 'axios'
import React , { useState } from 'react'
import './FormularioContacto.css'
import { FaAddressCard } from 'react-icons/fa'
import { BsAt } from 'react-icons/bs'
import { BsFillChatRightTextFill } from 'react-icons/bs'


const FormularioContacto = () => {

    const [ nombre , setNombre ] = useState('')
    const [ email , setEmail ] = useState('')
    const [ mensaje , setMensaje ] = useState('')
    const [ regularMail , setRegularMail ] = useState(false)

    const enviar = async( e ) => {
        e.preventDefault()
        if( nombre !== '' && email !== '' && mensaje !== '' ) {
            if( regularMail ){
                let url = 'https://back-end-portafolio.herokuapp.com/contacto'
                let info = {
                    nombre,
                    email,
                    mensaje
                }
                await axios.post(url , info)
                .then((res) => console.log(res.data))
                reiniciarCampos(e)
            }else{
                alert('por favor revise su correo')
            }
        }else{
            alert('Por favor llena todos los campos')
        }

    }

    const reiniciarCampos = (e) => {
        e.preventDefault()
        setNombre('')
        setEmail('')
        setMensaje('')
        setRegularMail(false)
    }

    //probando expresiones regulares

    const expresiones = {
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    }

    const validacionCorreo = (e) => {
        if(expresiones.correo.test(e)){
            setRegularMail(true)
        }else {
            setRegularMail(false)
        }
    }

  return (
    <form onSubmit={(e) => enviar(e)}>
        <div className="formulario_nombre_mail">
            <div className="formulario_nombre">
                <label >NOMBRE</label>
                <div className="nombre_campo">
                    <input value={nombre} onChange={(e) => setNombre( e.target.value )} type="text" name='nombre' id="nombre" />
                    <FaAddressCard className='nombre_campo_icon' />
                </div>
            </div>
            <div className="formulario_email">
                <label >EMAIL</label>
                <div className="email_campo">
                    <input style={ regularMail ? { border: '2px solid green'} : {}} onKeyUp={(e) => validacionCorreo(e.target.value)}  value={email} onChange={(e) => setEmail( e.target.value )}  type="email" name='email' id="email" autoComplete='email'  />
                    <BsAt className='email_campo_icon'  />
                </div>
            </div>
        </div>
        <div className="formulario_mensaje">
            <div className="mensaje">
                <label >CUENTAME SOBRE TU PROYECTO</label>
                <div className="mensaje_campo">
                    <textarea value={mensaje} onChange={(e) => setMensaje( e.target.value )} name="mensaje" id="mensaje" cols="30" rows="10"></textarea>
                    <BsFillChatRightTextFill className='mensaje_campo_icon' />
                </div>
            </div>
        </div>
        <div className="formulario_botones">
            <button className='enviar' type='submit' >ENVIAR MENSAJE</button>
            <button className='borrar' onClick={(e) => reiniciarCampos(e)} >BORRAR</button>
        </div>
    </form>
  )
}

export default FormularioContacto