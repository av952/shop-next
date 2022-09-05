import { getItems } from "../services/itemService";

export async function getPathsFromIds(){
    console.log('in');
    const items = await getItems()
    const  ids  =  items.map(el=>  ({ params: { id: convertToPath(el.title)} }) ).slice(0,7)
    console.log("🚀 ~ file: utils.js ~ line 7 ~ getPathsFromIds ~ ids", ids)
    
    return ids
}


export async function getItemData(id){
    const item = await getItems()

    const  product = item.find(el=>  convertToPath(el.title)  == id)

    return {
        id:id,
        data:product,
    }
}

/**Función para mostrar en la url el string del nombre del producto */
export function convertToPath(title=''){
    return title.split(' ').join('-').toLocaleLowerCase().slice(0,3)
}