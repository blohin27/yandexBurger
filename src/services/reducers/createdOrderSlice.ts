import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IIngredient, IResponse } from "../../types/types";
import { CREATED_ORDER_URL, INGREDIENTS_URL } from "../../const/const";
import { bodyRequestForOrder } from "../../common/helper";
import { IStateListIngredients } from "./listIngredientsConstructorSlice";

type TypeOrder = { number: number };
type TypeOrderDetails = {
  name: string;
  order: TypeOrder;
  success: boolean;
};
interface ICreatedOrder {
  OrderDetails: TypeOrderDetails | null;
  openOrder: boolean;
}

const initialState: ICreatedOrder = {
  OrderDetails: null,
  openOrder: false,
};

export const createdOrderRequest = createAsyncThunk(
  "createdOrderSlice/createdOrderRequest",
  async (param: IStateListIngredients) => {
    console.log("param", param);
    const bodyRequest = bodyRequestForOrder(param);
    const response = await fetch(CREATED_ORDER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyRequest),
    });
    const data: TypeOrderDetails = await response.json();
    return data;
  }
);

const createdOrderSlice = createSlice({
  name: "createdOrderSlice",
  initialState,
  reducers: {
    setOpenOrder: (state: ICreatedOrder, action: PayloadAction<boolean>) => {
      state.openOrder = action.payload;
    },
    clearOrder: (state: ICreatedOrder) => {
      state.OrderDetails = null;
    },
  },
  extraReducers: {
    // @ts-ignore
    [createdOrderRequest.pending]: () => {},
    // @ts-ignore
    [createdOrderRequest.fulfilled]: (
      state: ICreatedOrder,
      action: PayloadAction<TypeOrderDetails>
    ) => {
      state.OrderDetails = action.payload;
    },
    // @ts-ignore
    [createdOrderRequest.rejected]: () => {},
  },
});

export const { setOpenOrder, clearOrder } = createdOrderSlice.actions;
export default createdOrderSlice.reducer;
