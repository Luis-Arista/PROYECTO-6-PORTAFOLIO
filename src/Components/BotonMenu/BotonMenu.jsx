import React , { useState } from 'react'
import './BotonMenu.css'

const BotonMenu = () => {

    const [ flag , setFlag ] = useState(false)


  return (
    <div onClick={() => setFlag( !flag ? true : false )} className="contenedor_boton">
        <span className={ !flag ? 'barra' : 'barra barra_arriba' }></span>
        <span className={ !flag ? 'barra' : 'barra barra_medio' }></span>
        <span className={ !flag ? 'barra' : 'barra barra_abajo' }></span>
    </div>
  )
}

export default BotonMenu