import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CREATED_ORDER_URL, INGREDIENTS_URL } from "../../const/const";
import { bodyRequestForOrder } from "../../common/helper";

import { IIngredient } from "../../types/types";
import { Order } from "../../components";
import { Order as IOrder } from "../../types/types";

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
  currentOrder: GetOrder | undefined;
}

export interface GetOrder {
  success: boolean;
  orders: IOrder[];
}

export interface IStateListIngredientsConstructorWithAcessToken {
  ingredientsConstructor: IIngredient[];
  totalPrice: number;
  ingredientsBun: IIngredient[];
  accessToken?: string;
}

const initialState: ICreatedOrder = {
  OrderDetails: null,
  openOrder: false,
  isFetchError: false,
  currentOrder: undefined,
};

export const createdOrderRequest = createAsyncThunk(
  "createdOrderSlice/createdOrderRequest",
  async (
    param: IStateListIngredientsConstructorWithAcessToken,
    { rejectWithValue }
  ) => {
    const { accessToken, ...rest } = param;
    const bodyRequest = bodyRequestForOrder(rest);
    try {
      const response = await fetch(CREATED_ORDER_URL, {
        method: "POST",
        headers: {
          Authorization: accessToken ?? "",
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

export const getOrder = createAsyncThunk(
  "createdOrderSlice/getOrder",
  async (params: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`${CREATED_ORDER_URL}/${params}`);
      if (response.status === 200) {
        const data: GetOrder = await response.json();
        return data;
      } else {
        throw new Error();
      }
    } catch (e) {
      return rejectWithValue("Ошибка получения данныз");
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
    [getOrder.fulfilled.toString()]: (
      state: ICreatedOrder,
      action: PayloadAction<GetOrder>
    ) => {
      state.currentOrder = action.payload;
    },
  },
});

export const { setOpenOrder, clearOrder } = createdOrderSlice.actions;
export default createdOrderSlice.reducer;
