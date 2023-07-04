import React, { createContext, useContext } from 'react'

const ProductContext = createContext()

export default function ProductContextProvider({ children }) {
    return (
        <>

            <ProductContext.Provider>
                {children}
            </ProductContext.Provider>

        </>
    )
}

export const useProductContext = () => {
    return useContext(ProductContext)
}
