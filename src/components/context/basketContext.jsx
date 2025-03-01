import { createContext, useState} from "react"
import { toast } from "react-toastify"

const BasketContext = createContext()
const BasketProvider = ({children}) => {
    const [basket,setBasket] = useState([])
    // sepete ürün eklemek / miktarı arttırmak için bir fonksiyon yazın
const addToBasket = (product) => {
    // sepette ürün var mı kontrol et
   const found =  basket.find((item) => item.id === product.id) 

    if(!found){ // sepette ürün yoksa 
        setBasket(basket.concat({...product, amount:1  }))
    
        toast.success("product added to basket")
    } else { // sepette ürün varsa miktarı arttır
       const updated = { ...found,amount: found.amount + 1  }

    // sepetteki ürünleri güncelle
       const newBasket = basket.map((item) => (updated.id === item.id? updated : item))

    // sepeti güncelle
    setBasket(newBasket)
    toast.info(`Product quantity updated. ${updated.amount}`)
    }
    
}


    // sepetten eleman kaldırmak için bir fonksiyon yazın
    const removeFromBasket = (delete_id) => {
    // idsi ile eşleşen ürünü sepetten kaldır
  const filtred =  basket.filter((item) => item.id !== delete_id) 
//   sepeti güncelle
  setBasket(filtred)
  toast.error("Product removed from basket")
    }
    // ürün miktarını azaltmak için bir fonksiyon yazın
    const decreaseAmount = (delete_id) => {
    // miktarı azaltılacak ürünü sepetten bul
   const found = basket.find((item) => item.id === delete_id)

//    eğer ürünün miktarı 1den fazlaysa

    if(found.amount > 1){
        // miktarı güncelle
 const updated = {...found, amount: found.amount - 1  }
        // güncel değeri diziye aktar
      const newBasket =  basket.map((item) => (updated.id == updated.id? updated : item))

       // sepeti güncelle
       setBasket(newBasket)
    } else {
        // ürünün miktarı 1 ise sepetten kaldır
        removeFromBasket(delete_id)
    }

    }

  return (
  <BasketContext.Provider value={{basket, addToBasket, removeFromBasket , decreaseAmount}} >
    {children}
  </BasketContext.Provider>
  )
}

export {BasketProvider, BasketContext}
