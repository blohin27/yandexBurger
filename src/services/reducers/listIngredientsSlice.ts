import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INGREDIENTS_URL } from "../../const/const";
import { IIngredient } from "../../types/types";

interface IResponse {
  success: boolean;
  data: IIngredient[];
}

interface IStateListIngredients {
  ingredients: IIngredient[] | null;
  isFetchError?: boolean;
}

const initialState: IStateListIngredients = {
  ingredients: [],
  isFetchError: false,
};

export const fetchData = createAsyncThunk(
  "listIngredients/fetchData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(INGREDIENTS_URL);
      if (response.status === 200) {
        const data: IResponse = await response.json();
        return data.data;
      } else {
        throw new Error();
      }
    } catch (e) {
      return rejectWithValue("Ошибка получения данныз");
    }
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
    },
  },
});

export const {} = listIngredients.actions;
export default listIngredients.reducer;
