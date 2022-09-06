# Página web sencilla utilizando Nextjs


### Anotaciones importantes


* Es posible tener una carpeta dentro la carpeta **pages** para hacer una re dirección a la misma usando por ejemplo '/store'.

* Es posible combinar static generation con server side rendering

* Función para static generation es **getStaticProps**

* Función para server side rendering **getServerSideProps**


### Data fetching

#### static generation

Nextjs va  a hacer todas las solicitudes para obtener datos al momento de crear nuestra compilación, esto se va a transformar en html css y js. hace las solicitudes antes de. nos e modifica la información.


#### Server side rendering

Cada vez que el usuario haga una solicitud se harán las solicitudes necesarias, el html se va a construir cada vez que el usuario mande a llamar la página.


### Rutas dinámicas

Para poder generar rutas dinámicas hacemos uso de la función 

    getStaticPaths


```javascript

import { getItems } from "../services/itemService";

export async function getPathsFromIds(){
    const items = await getItems()


    const ids = items.map(el=>{
        return{
            params:{
                id: el.id
            }
        }
    })


    return ids
}


export  async function getStaticPath(){
    const path = await  getPathsFromIds()


    return{
        paths:path,
        fallback:false // si una ruta no existe nos manda a 404 por defecto

    }

}

```

### Función para definir el contexto


```javascript

import { createContext } from "react"

const AppContext = createContext({
    isOpen:false,
    openCart:()=>{}
})

export default function StateWrapper({children}){
    const [isOpen,setisOpen] = useState(false)

        function handleOpenCart(){
        setisOpen(!isOpen)
    }



    return <diAppContext.Provider  isOpen, openCart:handleOpenCart >{children}</diAppContext.Provider>
}


export function useAppConext(){
    return useContext(AppContext)
}

```

* Forma de uso dentro del archivo que necesitemos hacer la invocación de los métodos y funciones

```javascript
import { useAppConext } from "./StateWrapper";

export default function Menu() {
  const cart = useAppConext();

  return  <div>cart.id<div/>

}

```
