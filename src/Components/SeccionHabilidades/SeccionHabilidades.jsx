import React from 'react'
import './SeccionHabilidades.css'
import { ImHtmlFive } from 'react-icons/im'
import { ImCss3 } from 'react-icons/im'
import { SiJavascript } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'
import { SiReact } from 'react-icons/si'
import { SiNodedotjs } from 'react-icons/si'
import { FaNpm } from 'react-icons/fa'
import { SiVisualstudiocode } from 'react-icons/si'


const SeccionHabilidades = () => {
  return (
     <section id='Habilidades'>
        <div className="habilidades_contenedor">
            <div className="Habilidades_letras_contenedor">
               <div className="letras">
                  <p>{"<h1>Hola</h1>"}</p>
               </div>
               <div className="letras">
                  <p>{"npm start"}</p>
               </div>
               <div className="letras">
                  <p>{"const js = ( ) =>console.log('Hola')"}</p>
               </div>
               <div className="letras">
                  <p>{"background-color: #fff"}</p>
               </div>
               <div className="letras">
                  <p>{"import { useState } from 'react"}</p>
               </div>
               <div className="letras">
                  <p>{"Axios.get( )"}</p>
               </div>
               <div className="letras">
                  <p>{"<section></section>"}</p>
               </div>
               <div className="letras">
                  <p>{"display: flex"}</p>
               </div>
               <div className="letras">
                  <p>{"let saludo = 'Hola'"}</p>
               </div>
               <div className="letras">
                  <p>{"npm run dev"}</p>
               </div>
               <div className="letras">
                  <p>{"Axios.post( )"}</p>
               </div>
               <div className="letras">
                  <p>{"express.Router( )"}</p>
               </div>
            </div>
            <div className="habilidades_card">
               <div className="habilidad">
                  <div className="habilidad_icon">
                     <ImHtmlFive className='icon'/>
                  </div>
                  <div className="habilidad_texto">
                     <h3>HTML</h3>
                  </div>
               </div>
               <div className="habilidad">
                  <div className="habilidad_icon">
                     <ImCss3 className='icon'/>
                  </div>
                  <div className="habilidad_texto">
                     <h3>CSS</h3>
                  </div>
               </div>
               <div className="habilidad">
                  <div className="habilidad_icon">
                     <SiJavascript className='icon'/>
                  </div>
                  <div className="habilidad_texto">
                     <h3>Javascript</h3>
                  </div>
               </div>
               <div className="habilidad">
                  <div className="habilidad_icon">
                     <SiMongodb className='icon'/>
                  </div>
                  <div className="habilidad_texto">
                     <h3>Mongo DB</h3>
                  </div>
               </div>
               <div className="habilidad">
                  <div className="habilidad_icon">
                     <h1 className='icono_express'>EX</h1>
                  </div>
                  <div className="habilidad_texto">
                     <h3>Express</h3>
                  </div>
               </div>
               <div className="habilidad">
                  <div className="habilidad_icon">
                     <SiReact className='icon'/>
                  </div>
                  <div className="habilidad_texto">
                     <h3>React</h3>
                  </div>
               </div>
               <div className="habilidad">
                  <div className="habilidad_icon">
                     <SiNodedotjs className='icon'/>
                  </div>
                  <div className="habilidad_texto">
                     <h3>Node.js</h3>
                  </div>
               </div>
               <div className="habilidad">
                  <div className="habilidad_icon">
                     <FaNpm className='icon'/>
                  </div>
                  <div className="habilidad_texto">
                     <h3>npm</h3>
                  </div>
               </div>
               <div className="habilidad">
                  <div className="habilidad_icon">
                     <SiVisualstudiocode className='icon'/>
                  </div>
                  <div className="habilidad_texto">
                     <h3>VS code</h3>
                  </div>
               </div>
            </div>
        </div>
     </section>
  )
}

export default SeccionHabilidades