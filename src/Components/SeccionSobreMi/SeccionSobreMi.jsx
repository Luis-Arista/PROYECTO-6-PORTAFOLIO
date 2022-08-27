import React , { useState , useEffect } from 'react'
import './SeccionSobreMi.css'
import about from '../assets/img/about.jpeg'

const SeccionSobreMi = () => {

  let [ scroll , setScroll ] = useState('')
  let [ alto , setAlto ] = useState(window.innerHeight)
  const [ flag , setFlag ] = useState(false)
  

    let scrollParallax = () => {
        setScroll(window.document.documentElement.scrollTop)


    }

    window.addEventListener('scroll' , scrollParallax)

    useEffect( () => {
      if(scroll > (alto - 350) ){
        setFlag(true)
      }else{
        setFlag(false)
      }
    },[scroll , alto])

    if (window.innerHeight !== alto) {
      setAlto(window.innerHeight)
    }


  return (
    <section id='sobre_mi'>
        <div className="sobre_mi_contenedor">
          <div style={ flag ? {  transform: 'translateY(0px)' } :  {  transform: 'translateY(700px)' } }   className="sobre_mi_imagen">
            <img src={about} alt="foto" />
          </div>
          <div className="sobre_mi_info">
              <div className="Sobre_mi_titulo">
                <h1>Sobre mi</h1>
                <h2>Hola soy Luis</h2>
              </div>
              <div className="sobre_mi_descripcion">
                <p>Soy desarrollador web full-stack independiente desde 2019 y me gusta incursionar en las nuevas tecnologías para el desarrollo web. </p>
                <p>Cuando conoci el desarrollo me inspiro a crear y crecer en este nuevo campo y poder indagar en las nuevas tecnologías y tendencias, logrando así convertirlo en mi pasión.</p>
                <p>Me encanta crear diseños web intuitivos, dinámicos y prácticos captando la atención del usuario. Todos mis diseños son adaptables a cualquier dispositivo.</p>
              </div>
          </div>
        </div> 
    </section>
  )
}

export default SeccionSobreMi