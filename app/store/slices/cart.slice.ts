import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
    cartList: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action: PayloadAction<any>) => {
            const cart = action.payload;
            state.cartList.push(cart);
        },
        removeCart: (state, action: PayloadAction<any>) => {
            const cartId = action.payload;
            state.cartList = state.cartList.filter((item: ICart) => item.id != cartId)
        }
    }
})

export const {
    addCart
} = cartSlice.actions;

export default cartSlice.reducer;