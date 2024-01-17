import { createContext, useContext, useState} from "react";

const ProductContext = createContext();

export const useProductContext = () => {
    return useContext(ProductContext)
}

export const ProductProvider = ({children}) => {
    const api = "https://fakestoreapi.com/products"
    const [all, setAll] = useState([]);
    const [eightProducts, setEightProducts] = useState([]);
    const [women, setWomen] = useState([]);
    const [electronics, setElectronicsAsync] = useState([]);

    const getAllAsync = async() => {
        const result = await fetch (`${api}`)
        setAll(await result.json())
    }

    const getElectronicsAsync = async() => {
        const result = await fetch(`${api}/category/electronics`)
        setElectronicsAsync(await result.json())
    }

    const getWomenAsync = async() => {
        const result = await fetch(`${api}/category/women's%20clothing`)
        setWomen(await result.json())
    }
    
    const getEightProductsAsync = async() => {
        const result = await fetch(`${api}?limit=8`)
        setEightProducts(await result.json())
    }

    return <ProductContext.Provider 
        value={{all, women, electronics, eightProducts, getAllAsync, getWomenAsync, getEightProductsAsync, getElectronicsAsync}}>
        {children}
    </ProductContext.Provider>
}