import { useState } from "react";
import { MenuContext } from "./MenuContext";

export const MenuProvider = ( { children } ) => {
    const [ tituloUno , setTituloUno ] = useState('Luis')
    const [ tituloDos , setTituloDos ] = useState('Diseño')
    const [ tituloTres , setTituloTres ] = useState('Desarrollo')
    const [ tituloCuatro , setTituloCuatro ] = useState('Web')
    const [ flag , setFlag ] = useState(false)

  
    return(
        <MenuContext.Provider value = { { tituloUno , setTituloUno , tituloDos , setTituloDos , tituloTres , setTituloTres , tituloCuatro , setTituloCuatro , flag , setFlag  } }>
            { children }
        </MenuContext.Provider>
    )
}