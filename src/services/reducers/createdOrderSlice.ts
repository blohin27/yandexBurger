import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CREATED_ORDER_URL } from "../../const/const";
import { bodyRequestForOrder } from "../../common/helper";

import { IStateListIngredientsConstructor } from "../../types/types";

type TypeOrder = { number: number };

type TypeOrderDetails = {
  name: string;
  order: TypeOrder;
  success: boolean;
};

interface ICreatedOrder {
  OrderDetails: TypeOrderDetails | null;
  openOrder: boolean;
  isFetchError?: boolean;
}

const initialState: ICreatedOrder = {
  OrderDetails: null,
  openOrder: false,
  isFetchError: false,
};

export const createdOrderRequest = createAsyncThunk(
  "createdOrderSlice/createdOrderRequest",
  async (param: IStateListIngredientsConstructor, { rejectWithValue }) => {
    const bodyRequest = bodyRequestForOrder(param);
    try {
      const response = await fetch(CREATED_ORDER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyRequest),
      });
      if (response.status === 200) {
        const data: TypeOrderDetails = await response.json();
        return data;
      } else {
        throw new Error();
      }
    } catch (e) {
      return rejectWithValue("Ошибка сработал rejectWithValue ");
    }
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
      state.isFetchError = false;
    },
  },
  extraReducers: {
    [createdOrderRequest.pending.toString()]: () => {},
    [createdOrderRequest.fulfilled.toString()]: (
      state: ICreatedOrder,
      action: PayloadAction<TypeOrderDetails>
    ) => {
      state.OrderDetails = action.payload;
    },
    [createdOrderRequest.rejected.toString()]: (
      state: ICreatedOrder,
      action: PayloadAction<TypeOrderDetails>
    ) => {
      state.isFetchError = true;
    },
  },
});

export const { setOpenOrder, clearOrder } = createdOrderSlice.actions;
export default createdOrderSlice.reducer;
