import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem('mycarts') || '[]');
/**
 * {
 *      "product": {},
 *      "quantity": 0
 * }
 */

export const cartSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // Kiểm tra sp đã tồn tại hay chưa?
            let isDuplicated = false;
            for (let item of state) {
                if (item.product.id === action.payload.id) {
                    item.quantity += 1;
                    isDuplicated = true;
                }
            }
            if (!isDuplicated) {
                state.push({
                    product: action.payload,
                    quantity: 1
                })
            }
            localStorage.setItem('mycarts', JSON.stringify(state) || "[]")  
        },
        deleteItemInCart: (state, action) => {
            const existingData = JSON.parse(localStorage.getItem('mycarts') || '[]');
            const newData = existingData.filter(c => c.product.id !== action.payload);
            localStorage.setItem('mycarts', JSON.stringify(newData)); 
            return state.filter(c => c.product.id !== action.payload)
        },
        updateCartQuantity: (state, action) => {
            return action.payload
        }
    }
})
export const {actions: cartAct} = cartSlice;

export default cartSlice.reducer;