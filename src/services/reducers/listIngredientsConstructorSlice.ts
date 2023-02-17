import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IIngredient } from "../../types/types";

export interface IStateListIngredients {
  ingredientsConstructor: IIngredient[] | [];
  totalPrice: number;
  ingredientsBun: [];
}
const initialState: IStateListIngredients = {
  ingredientsConstructor: [],
  ingredientsBun: [],
  totalPrice: 0,
};

const listIngredientsConstructorSlice = createSlice({
  name: "listIngredientsConstructor",
  initialState,
  reducers: {
    setIngredientsAll: (
      state: IStateListIngredients,
      action: PayloadAction<IIngredient[] | null>
    ) => {},
    totalPriceFunc: (state) => {
      // @ts-ignore
      const sum = state.ingredientsConstructor.reduce(
        (accumulator: number, currentValue: IIngredient) =>
          accumulator + currentValue.price,
        0
      );
      const sumBUl = state.ingredientsBun.reduce(
        (accumulator: number, currentValue: IIngredient) =>
          accumulator + currentValue.price,
        0
      );

      state.totalPrice = sum + sumBUl;
    },
    addIngredientInConstructor: (
      state: IStateListIngredients,
      action: PayloadAction<IIngredient>
    ) => {
      if (action.payload.type === "bun" && state.ingredientsBun?.length === 0) {
        // @ts-ignore
        state.ingredientsBun.push(action.payload);
        // @ts-ignore
        state.ingredientsBun.push(action.payload);
      } else if (
        action.payload.type === "bun" &&
        state.ingredientsBun?.length !== 0
      ) {
        state.ingredientsBun = [];
        // @ts-ignore
        state.ingredientsBun.push(action.payload);
        // @ts-ignore
        state.ingredientsBun.push(action.payload);
      }
      if (action.payload.type !== "bun") {
        // @ts-ignore
        state.ingredientsConstructor.push(action.payload);
      }
    },
    deleteIngredientInConstructor: (
      state: IStateListIngredients,
      action: PayloadAction<string | undefined>
    ) => {
      console.log("Удаление в ред", action.payload);
      const newState = state.ingredientsConstructor.filter(
        (item) => item.idGen !== action.payload
      );
      console.log(newState);

      state.ingredientsConstructor = [...newState];
    },
  },
});

export const {
  setIngredientsAll,
  totalPriceFunc,
  addIngredientInConstructor,
  deleteIngredientInConstructor,
} = listIngredientsConstructorSlice.actions;
export default listIngredientsConstructorSlice.reducer;
