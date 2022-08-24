import React , { useState } from 'react'
import './Banner.css'
import { BsCodeSlash } from 'react-icons/bs'

const Banner = () => {

  const [ tituloUno , setTituloUno ] = useState('Luis')
  const [ tituloDos , setTituloDos ] = useState('Diseño')
  const [ tituloTres , setTituloTres ] = useState('Desarrollo')
  const [ tituloCuatro , setTituloCuatro ] = useState('Web')

  return (
    <section className='seccion_banner'>
        <div className="contenedor_banner">
          <div className="banner_titulo">
              <a href='/#' onMouseEnter={() => setTituloUno('Sobre mi')} onMouseLeave={() => setTituloUno('Luis')} >{tituloUno}</a>
              <a href='/#' onMouseEnter={() => setTituloDos('Mi trabajo')} onMouseLeave={() => setTituloDos('Diseño')} >{tituloDos}</a>
              <a href='/#' onMouseEnter={() => setTituloTres('Habilidades')} onMouseLeave={() => setTituloTres('Desarrollo')} >{tituloTres}</a>
              <a href='/#' onMouseEnter={() => setTituloCuatro('Contacto')} onMouseLeave={() => setTituloCuatro('Web')} >{tituloCuatro}</a>
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