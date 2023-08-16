import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INGREDIENTS_URL } from "../../const/const";
import { IIngredient } from "../../types/types";
import { checkResponse } from "../../common/helper";
import { Store } from "react-notifications-component";

interface IResponse {
  success: boolean;
  data: IIngredient[];
}

interface IStateListIngredients {
  ingredients: IIngredient[] | null;
  isFetchError?: boolean;
}

export const initialState: IStateListIngredients = {
  ingredients: [],
  isFetchError: false,
};

export const fetchData = createAsyncThunk(
  "listIngredients/fetchData",
  async (_, { rejectWithValue }) => {
    const response = await fetch(INGREDIENTS_URL);

    const data = await checkResponse<IResponse>(response);
    return data.data;
  }
);

const listIngredients = createSlice({
  name: "listIngredients",
  initialState,
  reducers: {},

  extraReducers: {
    [fetchData.fulfilled.toString()]: (
      state: IStateListIngredients,
      action: PayloadAction<IIngredient[] | null>
    ) => {
      state.ingredients = action.payload;
    },

    [fetchData.pending.toString()]: (
      state: IStateListIngredients,
      action: PayloadAction<IIngredient[] | null>
    ) => {},

    [fetchData.rejected.toString()]: (
      state: IStateListIngredients,
      action: PayloadAction<IIngredient[] | null>
    ) => {
      state.isFetchError = true;
      Store.addNotification({
        title: "Ошибка в получении ингредиентов",
        message: "",
        type: "warning",
        insert: "top",
        container: "bottom-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: false,
        },
      });
    },
  },
});

export const {} = listIngredients.actions;
export default listIngredients.reducer;
