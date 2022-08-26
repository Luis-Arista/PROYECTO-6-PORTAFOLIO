import React , { useState } from 'react'
import './Banner.css'
import { BsCodeSlash } from 'react-icons/bs'
import { Link } from "react-scroll";

const Banner = () => {

  const [ tituloUno , setTituloUno ] = useState('Luis')
  const [ tituloDos , setTituloDos ] = useState('Diseño')
  const [ tituloTres , setTituloTres ] = useState('Desarrollo')
  const [ tituloCuatro , setTituloCuatro ] = useState('Web')


  return (
    <section className='seccion_banner'>
        <div className="contenedor_banner">
          <div className="banner_titulo">
            <Link smooth={true} to="Sobre_Mi" onMouseEnter={() => setTituloUno('Sobre mi')} onMouseLeave={() => setTituloUno('Luis')} >{tituloUno}</Link> 
            <Link smooth={true} to="Mi_Trabajo" onMouseEnter={() => setTituloDos('Mi trabajo')} onMouseLeave={() => setTituloDos('Diseño')} >{tituloDos}</Link> 
            <Link smooth={true} to="Habilidades" onMouseEnter={() => setTituloTres('Habilidades')} onMouseLeave={() => setTituloTres('Desarrollo')} >{tituloTres}</Link> 
            <Link smooth={true} to="Contacto" onMouseEnter={() => setTituloCuatro('Contacto')} onMouseLeave={() => setTituloCuatro('Web')} >{tituloCuatro}</Link> 
          </div>
          <div className="banner_img">
            <div className="banner_img_contenedor">
              <BsCodeSlash className='banner_img_contenedor_icono' />
            </div>
          </div>
        </div>
    </section>
  )
}

export default Banner