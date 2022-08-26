import React from 'react'
import FormularioContacto from '../FormularioContacto/FormularioContacto'
import './SectionContacto.css'
import { GoMail } from 'react-icons/go'
import { BsWhatsapp } from 'react-icons/bs'
import { BsTelephone } from 'react-icons/bs'

const SectionContacto = () => {
  return (
    <section>
        <div className="contacto_contenedor">
            <div className="formulario">
                <FormularioContacto />
            </div>
            <div className="info_contacto">
                <a className='contacto_tarjeta' href="mailto:larista93@hotmail.com">
                    <div className="info_contacto_email">
                        <div className="info_contacto_icon">
                            <GoMail className='contacto_icono'/>
                        </div>
                        <div className="info_contacto_texto">
                            <h4>E-mail</h4>
                            <p>larista93@hotmail.com</p>
                        </div>
                    </div>
                </a>
                <a target={'_blank'} rel='noreferrer noopener' className='contacto_tarjeta' href="https://api.whatsapp.com/send?phone=5215528825522&text=Hola%20tengo%20un%20proyecto%20en%20mente">
                    <div className="info_contacto_whatsapp">
                        <div className="info_contacto_icon">
                            <BsWhatsapp className='contacto_icono'/>
                        </div>
                        <div className="info_contacto_texto">
                            <h4>Whatsapp</h4>
                            <p>55 2882 5522</p>
                        </div>
                    </div>
                </a>
                <a className='contacto_tarjeta' href="tel:+5528825522">
                    <div className="info_contacto_telefono">
                        <div className="info_contacto_icon">
                            <BsTelephone className='contacto_icono'/>
                        </div>
                        <div className="info_contacto_texto">
                            <h4>Telefono</h4>
                            <p>55 2882 5522</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>
  )
}

export default SectionContacto