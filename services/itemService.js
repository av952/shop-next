/* Encargado de extraer la información  de la url*/

export async function getItems(){
    const request  = await fetch('https://jsonplaceholder.typicode.com/photos/')
    const items  = await request.json()

    return items
}

export async function getLatestItems(){
    const items = await getItems()

    return items.slice(0,3)
}
