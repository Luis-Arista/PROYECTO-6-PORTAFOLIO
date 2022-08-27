import React , { useContext } from 'react'
import './BotonMenu.css'
import { MenuContext } from '../../Context/MenuContext'


const BotonMenu = () => {


    const {   setTituloUno } = useContext( MenuContext )
    const {   setTituloDos } = useContext( MenuContext )
    const {   setTituloTres } = useContext( MenuContext )
    const {   setTituloCuatro } = useContext( MenuContext )
    const {   flag , setFlag } = useContext( MenuContext )
  
    const manejarClick = () => {
      setFlag( !flag ? true : false )
      
      if(!flag){
        setTituloUno('Sobre mi')
        setTituloDos('Mi trabajo')
        setTituloTres('Habilidades')
        setTituloCuatro('Contacto')
      }else{
        setTituloUno('Luis')
        setTituloDos('Diseño')
        setTituloTres('Desarrollo')
        setTituloCuatro('Web')
      }

    }

  return (
    <div onClick={() => manejarClick()} className="contenedor_boton">
        <span className={ !flag ? 'barra' : 'barra barra_arriba' }></span>
        <span className={ !flag ? 'barra' : 'barra barra_medio' }></span>
        <span className={ !flag ? 'barra' : 'barra barra_abajo' }></span>
    </div>
  )
}

export default BotonMenu