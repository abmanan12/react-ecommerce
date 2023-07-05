const ProductReducer = (state, action) => {

    switch (action.type) {

        case 'LOAD_PRODUCTS':

            let priceArr = action.payload?.map(curElem => curElem.price)

            let initialValue = 0
            let maxPrice = priceArr?.reduce(
                (accum, curValue) => Math.max(accum, curValue),
                initialValue)

            return {
                ...state,
                allProducts: [...action.payload],
                filterProducts: [...action.payload],
                filters: {
                    ...state.filters, maxPrice, price: maxPrice
                }
            }


        case 'Get_SORT_PRODUCTS':
            return {
                ...state,
                sortingValue: action.payload
            }


        case 'SORT_PRODUCTS':

            let { filterProducts, sortingValue } = state
            let tempSortProducts = [...filterProducts]

            let newSortProducts = tempSortProducts.sort((a, b) => {

                if (sortingValue === 'lowest') {
                    return a.price - b.price
                }

                if (sortingValue === 'highest') {
                    return b.price - a.price
                }

            })

            return {
                ...state,
                filterProducts: newSortProducts
            }


        case 'Get_Filter_PRODUCTS':

            let { filterName, filterValue } = action.payload

            return {
                ...state,
                filters: {
                    ...state.filters, [filterName]: filterValue
                }
            }


        case 'FILTER_PRODUCTS':

            let { allProducts } = state
            let tempFilterProducts = [...allProducts]

            const { type, size, color, price, time } = state.filters

            if (type !== 'all') {
                tempFilterProducts = tempFilterProducts.filter(curElem => {
                    return curElem.category === type
                })
            }

            if (size !== 'all') {
                tempFilterProducts = tempFilterProducts.filter(curElem => {
                    return curElem.size === size
                })
            }

            if (color !== 'all') {
                tempFilterProducts = tempFilterProducts.filter(curElem => {
                    return curElem.color === color
                })
            }

            if (price) {
                tempFilterProducts = tempFilterProducts.filter(curElem => {
                    return curElem.price <= parseInt(price) + 1
                })
            }

            if (time !== 'all') {
                tempFilterProducts = tempFilterProducts.filter(curElem => {
                    return curElem.time === time
                })
            }

            return {
                ...state,
                filterProducts: tempFilterProducts
            }


        case 'CLEAR_FILTER':

            return {
                ...state,
                filters: {
                    ...state.filters,
                    type: 'all',
                    size: 'all',
                    color: 'all',
                    price: state.filters.maxPrice,
                    maxPrice: state.filters.maxPrice,
                    minPrice: 0,
                    time: 'all'
                },
            }


        default:
            return state;
    }

}

export default ProductReducer;