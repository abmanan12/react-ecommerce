import React, { createContext, useContext, useEffect, useReducer } from 'react'

import reducer from '../reducers/ProductReducer'
import { furniture } from '../data/furniture'

const ProductContext = createContext()

const initialState = {
    allProducts: [],
    filterProducts: [],
    sortingValue: 'lowest',
    filters: {
        type: 'all',
        size: 'all',
        color: 'all',
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        time: 'all'
    },
}


export default function ProductContextProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState)


    const sorting = e => {
        let sortValue = e.target.value
        dispatch({ type: 'Get_SORT_PRODUCTS', payload: sortValue })
    }


    const updateFilter = e => {
        let filterName = e.target.name
        let filterValue = e.target.value
        dispatch({ type: 'Get_Filter_PRODUCTS', payload: { filterName, filterValue } })
    }


    const clearFilter = e => {
        e.preventDefault()
        dispatch({ type: 'CLEAR_FILTER' })
    }


    useEffect(() => {
        dispatch({ type: 'FILTER_PRODUCTS' })
        dispatch({ type: 'SORT_PRODUCTS' })
    }, [furniture, state.sortingValue, state.filters])


    useEffect(() => {
        dispatch({ type: 'LOAD_PRODUCTS', payload: furniture })
    }, [])

    // console.log(state);

    return (
        <>

            <ProductContext.Provider value={{ ...state, sorting, updateFilter, clearFilter }}>
                {children}
            </ProductContext.Provider>

        </>
    )
}

export const useProductContext = () => {
    return useContext(ProductContext)
}
