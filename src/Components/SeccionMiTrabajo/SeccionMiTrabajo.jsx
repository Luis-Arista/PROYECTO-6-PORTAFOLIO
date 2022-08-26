import React from 'react'
import './SeccionMiTrabajo.css'
import landing from '../assets/img/landing.jpeg'
import CRUD from '../assets/img/CRUD.jpeg'
import DASHBOARD from '../assets/img/DASBOARD.jpeg'
import RESTAURANTE from '../assets/img/RESTAURANTE.jpeg'
import TIENDA from '../assets/img/TIENDA.jpeg'

const SeccionMiTrabajo = () => {
  return (
    <section id='mi_trabajo'>
       <div className="mi_trabajo_contenedor">
            <div className=" trabajos_izquierda mi_trabajo_uno">
                <div className="trabajos_izquierda_imagen">
                    <img src={landing} alt="" />
                </div>
                <div className="trabajos_izquierda_info">
                    <h3>Landing Pages</h3>
                    <p>
                        Las "Landing Pages" son paginas cuyo objetivo es destacar algo en especial, ya sea un producto
                        o alguna novedad o promoción de un producto. Generalmente tiene un diseño más sencillo.
                    </p>
                    <a target='_blank' rel="noopener noreferrer"  href="https://luis-arista.github.io/PROYECTO-1-Landing-de-Negocio/">Ver Demo</a>
                </div>
            </div>
            <div className=" trabajos_derecha mi_trabajo_dos">
                <div className="trabajos_derecha_imagen">
                    <img src={CRUD} alt="" />
                </div>
                <div className="trabajos_derecha_info">
                    <h3>Aplicaciones CRUD</h3>
                    <p>
                        "CRUD" es el acrónimo de "Crear, Leer, Actualizar y Borrar".
                    </p>
                    <a target='_blank' rel="noopener noreferrer"   href="https://luis-arista.github.io/PROYECTO-2-app-CRUD/">Ver Demo</a>
                </div>
            </div>
            <div className=" trabajos_izquierda mi_trabajo_uno">
                <div className="trabajos_izquierda_imagen">
                    <img src={DASHBOARD} alt="" />
                </div>
                <div className="trabajos_izquierda_info">
                    <h3>Dashboard</h3>
                    <p>
                       Los "Dashboard" son una herramienta de gestión de la información que monitoriza, analiza y muestra de manera visual los datos requeridos.
                    </p>
                    <a target={'_blank'} rel="noopener noreferrer"  href="https://luis-arista.github.io/PROYECTO-3-Dashboard-pokemon/">Ver Demo</a>
                </div>
            </div>
            <div className=" trabajos_derecha mi_trabajo_dos">
                <div className="trabajos_derecha_imagen">
                    <img src={RESTAURANTE} alt="" />
                </div>
                <div className="trabajos_derecha_info">
                    <h3>Applicaciones WEB</h3>
                    <p>
                        Aplicaciones web que se ajusten a la necesidad de su negocio.
                    </p>
                    <a target={'_blank'} rel="noopener noreferrer"  href="https://silver-kelpie-8a3afd.netlify.app">Ver Demo</a>
                </div>
            </div>
            <div className=" trabajos_izquierda mi_trabajo_uno">
                <div className="trabajos_izquierda_imagen">
                    <img src={TIENDA} alt="" />
                </div>
                <div className="trabajos_izquierda_info">
                    <h3>E-commers</h3>
                    <p>
                        El e-commerce  o aplicacion de comercio electronico se puede definir 
                        como la venta, compra y distribución de suministro de 
                        algún producto, servicio o información a través de internet.
                    </p>
                    <a target={'_blank'} rel="noopener noreferrer"  href="https://magical-haupia-f0d8e1.netlify.app">Ver Demo</a>
                </div>
            </div>
       </div>
    </section>
  )
}

export default SeccionMiTrabajo