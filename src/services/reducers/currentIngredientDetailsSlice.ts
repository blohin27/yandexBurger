import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICurrentIngrendient, IIngredient } from "../../types/types";
import { LOGOUT_URL } from "../../const/const";

const initialState: ICurrentIngrendient = {
  currentIngredient: null,
};

const currentIngredientDetailsSlice = createSlice({
  name: "currentIngredientDetailsSlice",
  initialState,
  reducers: {
    setIngredientDetails: (
      state,
      action: PayloadAction<IIngredient | null>
    ) => {
      state.currentIngredient = action.payload;
    },
  },
});

export const { setIngredientDetails } = currentIngredientDetailsSlice.actions;
export default currentIngredientDetailsSlice.reducer;
