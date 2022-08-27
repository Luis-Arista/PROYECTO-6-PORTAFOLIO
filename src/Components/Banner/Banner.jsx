import React , { useContext } from 'react'
import './Banner.css'
import { BsCodeSlash } from 'react-icons/bs'
import { Link } from "react-scroll";
import { MenuContext } from '../../Context/MenuContext'

const Banner = () => {

  const {  tituloUno , setTituloUno } = useContext( MenuContext )
  const {  tituloDos , setTituloDos } = useContext( MenuContext )
  const {  tituloTres , setTituloTres } = useContext( MenuContext )
  const {  tituloCuatro , setTituloCuatro } = useContext( MenuContext )
  const {  setFlag } = useContext( MenuContext )


  const manejarClick = () => {
    setTituloUno('Luis')
    setTituloDos('Diseño')
    setTituloTres('Desarrollo')
    setTituloCuatro('Web')
    setFlag(false)
  }


  return (
    <section className='seccion_banner'>
        <div className="contenedor_banner">
          <div className="banner_titulo">
            <Link onClick={() => manejarClick() } smooth={true} to="Sobre_Mi" onMouseEnter={() => setTituloUno('Sobre mi')} onMouseLeave={() => setTituloUno('Luis')} >{tituloUno}</Link> 
            <Link onClick={() => manejarClick() } smooth={true} to="Mi_Trabajo" onMouseEnter={() => setTituloDos('Mi trabajo')} onMouseLeave={() => setTituloDos('Diseño')} >{tituloDos}</Link> 
            <Link onClick={() => manejarClick() } smooth={true} to="Habilidades" onMouseEnter={() => setTituloTres('Habilidades')} onMouseLeave={() => setTituloTres('Desarrollo')} >{tituloTres}</Link> 
            <Link onClick={() => manejarClick() } smooth={true} to="Contacto" onMouseEnter={() => setTituloCuatro('Contacto')} onMouseLeave={() => setTituloCuatro('Web')} >{tituloCuatro}</Link> 
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