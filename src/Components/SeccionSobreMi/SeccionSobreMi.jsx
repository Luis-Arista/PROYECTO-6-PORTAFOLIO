import React , { useState , useEffect } from 'react'
import './SeccionSobreMi.css'
import about from '../assets/img/about.jpeg'

const SeccionSobreMi = () => {

  let [ scroll , setScroll ] = useState('')
  let [ alto ] = useState(window.innerHeight)
  const [ flag , setFlag ] = useState(false)
  

    let scrollParallax = () => {
        setScroll(window.document.documentElement.scrollTop)


    }

    window.addEventListener('scroll' , scrollParallax)

    useEffect( () => {
      if(scroll > (alto - 550) ){
        setFlag(true)
        console.log(scroll , ',' , alto);
      }else{
        setFlag(false)
      }
    },[scroll , alto])

  return (
    <section id='sobre_mi'>
        <div className="sobre_mi_contenedor">
          <div style={ flag ? {  transform: 'translateY(0px)' } :  {  transform: 'translateY(700px)' } }   className="sobre_mi_imagen">
            <img src={about} alt="foto" />
          </div>
          <div className="sobre_mi_info">
              <div className="Sobre_mi_titulo">
                <h1>Sobre mi</h1>
                <h2>Hola me llamo Luis</h2>
              </div>
              <div className="sobre_mi_descripcion">
                <p>Soy desarrollador web full-stack independiente desde 2019 y me considero como una persona con un lado tanto creativo como logico.</p>
                <p>Cuando conoci el dessarrollo web me di cuenta de qu </p>
              </div>
          </div>
        </div> 
    </section>
  )
}

export default SeccionSobreMi