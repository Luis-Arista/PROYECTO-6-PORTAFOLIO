import React from 'react'
import './Footer.css'
import { BsFacebook } from 'react-icons/bs'
import { BsDribbble } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <div className="footer_contenedor">
            <div className="redes_sociales">
                <a href="/#"><BsFacebook className='footer_icon'/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://dribbble.com/Luis_Arista"><BsDribbble className='footer_icon'/></a>
                <a href="/#"><BsGithub className='footer_icon'/></a>
                <a href="/#"><BsLinkedin className='footer_icon'/></a>
            </div>
            <div className="footer_texto">
                <p>© Luis Arista</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer