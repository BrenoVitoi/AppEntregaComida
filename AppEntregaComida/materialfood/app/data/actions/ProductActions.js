export const PRODUCTS_REQUEST = 'PRODUCTS_REQUEST';
export const PRODUCTS_REQUEST = 'PRODUCTS_RESPONSE';
export const PRODUCT_SELECT = 'PRODUCT_SELECT';

export const productsRequest = () => ({
    type: 'PRODUCTS_REQUEST'
})

export const productsResponse = (value) => ({
    type: 'PRODUCTS_RESPONSE',
    value
}) 

export const productSelect = (value) => ({
    type: 'PRODUCTS_SELECT',
    value
}) 

