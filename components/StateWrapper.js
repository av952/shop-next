import { createContext, useContext, useState } from "react"
import Product from "./Products";

const AppContext = createContext({
    isOpen:false,
    items:[0],
    openCart: ()=>{},
    addItemCart: (item)=>{},
    getNumberofItems:()=>{},
    deletef:(item)=>{},
    addMinus:(item,operacion)=>{}
})

export default function StateWrapper({children}){
    const [isOpen,setisOpen] = useState(false)
    const [items,setItems] = useState([])

    function handleOpenCart(){
        setisOpen(!isOpen)
    }

    /**Si el objeto no se encuentra vamos a crearlo y si s solo se actualiza la propiedad de cantidad  */
    function handleAddItemToCart(item=[]){
        console.log("🚀 ~ file: StateWrapper.js ~ line 21 ~ handleAddItemToCart ~ item", item)
        
        /**Se guardatemporalmentre la información de items que esta en el useState */
        const temp = [...items];
        const found = temp.find(el=>  el.id == item.id)

        if(found){
            found.qty++
        }else{
            item.qty = 1
            temp.push(item)
        }

        setItems([...temp])
    }

    /**Sumar el númerod e elementos que tenga el carrito */
    function handleNumberOfItems(){
        const total  = items.reduce((acc,item)=>acc+item.qty,0)

        return total
    }

    /**Elimina un elemento de la lista de shopping cart */
    function handleDelete(item){
        const res  = items.filter(el=> el.id != item.id )
        console.log("🚀 ~ file: StateWrapper.js ~ line 50 ~ handleDelete ~ res", res)
        
        setItems(()=>[...res])
        
    }
    console.log(items);


    /**disminuye la cantidad de elementos comprado */
    function handleMinusAdd(item,operacion){
        const temp = [...items];
        const found =  temp.find(el=>  el.id == item.id)

        console.log(111,found.qty);
        switch(operacion){
            case '-':
                
                if(found.qty <= 1){

                    handleDelete(item)
                    return
                }
                found.qty--
                setItems([...temp])
                break
            case '+':
                found.qty++
                setItems([...temp])
                break

        }

        
    }
    

    return <AppContext.Provider value={{
        isOpen,
        items,
        openCart:handleOpenCart,
        addItemCart:handleAddItemToCart,
        getNumberofItems:handleNumberOfItems,
        deletef:handleDelete,
        addMinus:handleMinusAdd
    }}>
        {children}
        
        </AppContext.Provider>
}

export function useAppConext(){
    return useContext(AppContext)
}