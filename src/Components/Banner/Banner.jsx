import React , { useState } from 'react'
import './Banner.css'

const Banner = () => {

  const [ tituloUno , setTituloUno ] = useState('Luis')
  const [ tituloDos , setTituloDos ] = useState('Diseño')
  const [ tituloTres , setTituloTres ] = useState('Desarrollo')
  const [ tituloCuatro , setTituloCuatro ] = useState('Web')

  return (
    <section className='seccion_banner'>
        <div className="contenedor_banner">
          <div className="titulo">
              <h2 onMouseEnter={() => setTituloUno('Sobre mi')} onMouseLeave={() => setTituloUno('Luis')} >{tituloUno}</h2>
              <h2 onMouseEnter={() => setTituloDos('Mi trabajo')} onMouseLeave={() => setTituloDos('Diseño')} >{tituloDos}</h2>
              <h2 onMouseEnter={() => setTituloTres('Habilidades')} onMouseLeave={() => setTituloTres('Desarrollo')} >{tituloTres}</h2>
              <h2 onMouseEnter={() => setTituloCuatro('Contacto')} onMouseLeave={() => setTituloCuatro('Web')} >{tituloCuatro}</h2>
          </div>
        </div>
    </section>
  )
}

export default Banner