# Página web sencilla utilizando Nextjs


### Anotaciones importantes


* Es posible tener una carpeta dentro la carpeta **pages** para hacer una re dirección a la misma usando por ejemplo '/store'.

* Es posible combinar static generation con server side rendering


### Data fetching

#### static generation

Nextjs va  a hacer todas las solicitudes para obtener datos al momento de crear nuestra compilación, esto se va a transformar en html css y js. hace las solicitudes antes de. nos e modifica la información.


#### Server side rendering

Cada vez que el usuario haga una solicitud se harán las solicitudes necesarias, el html se va a construir cada vez que el usuario mande a llamar la página.


