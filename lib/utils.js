import { getItems } from "../services/itemService";

export async function getPathsFromIds(){
    console.log('in');
    const items = await getItems()
    const  ids  =  items.map(el=>  ({ params: { id: `${el.id}` } }) ).slice(0,7)
    console.log("🚀 ~ file: utils.js ~ line 7 ~ getPathsFromIds ~ ids", ids)
    
    return ids
}


export async function getItemData(id){
    const item = await getItems()

    const  product = item.find(el=> el.id.toString() == id)
    console.log("🚀 ~ file: utils.js ~ line 14 ~ getItemData ~ product", product)

    return {
        id:id,
        data:product,
    }
}