import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IIngredient } from "../../types/types";

interface ICurrentIngrendient {
  currentIngredient: IIngredient | null;
}

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
