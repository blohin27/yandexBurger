import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INGREDIENTS_URL } from "../../const/const";
import { IIngredient, IResponse } from "../../types/types";

interface IStateListIngredients {
  ingredients: IIngredient[] | null;
}
const initialState: IStateListIngredients = {
  ingredients: [],
};

export const fetchData = createAsyncThunk(
  "listIngredients/fetchData",
  async () => {
    const response = await fetch(INGREDIENTS_URL);
    const data: IResponse = await response.json();
    return data.data;
  }
);

const listIngredients = createSlice({
  name: "listIngredients",
  initialState,
  reducers: {},

  extraReducers: {
    // @ts-ignore
    [fetchData.fulfilled]: (
      state: IStateListIngredients,
      action: PayloadAction<IIngredient[] | null>
    ) => {
      console.log("Ингред зацетились");
      state.ingredients = action.payload;
    },
    // @ts-ignore
    [fetchData.pending]: (
      state: IStateListIngredients,
      action: PayloadAction<IIngredient[] | null>
    ) => {},
    // @ts-ignore
    [fetchData.rejected]: (
      state: IStateListIngredients,
      action: PayloadAction<IIngredient[] | null>
    ) => {},
  },
});

export const {} = listIngredients.actions;
export default listIngredients.reducer;
