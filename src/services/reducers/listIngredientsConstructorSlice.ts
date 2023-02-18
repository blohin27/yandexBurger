import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IIngredient,
  IStateListIngredientsConstructor,
} from "../../types/types";
import { searchTotalPrice } from "../../common/helper";

const initialState: IStateListIngredientsConstructor = {
  ingredientsConstructor: [],
  ingredientsBun: [],
  totalPrice: 0,
};

const listIngredientsConstructorSlice = createSlice({
  name: "listIngredientsConstructor",
  initialState,
  reducers: {
    totalPriceFunc: (state) => {
      const sumIngredientsWithoutBun = searchTotalPrice(state.ingredientsBun);
      const sumOnlyBun = searchTotalPrice(state.ingredientsConstructor);

      state.totalPrice = sumIngredientsWithoutBun + sumOnlyBun;
    },
    addIngredientInConstructor: (
      state: IStateListIngredientsConstructor,
      action: PayloadAction<IIngredient>
    ) => {
      if (action.payload.type === "bun" && state.ingredientsBun?.length === 0) {
        state.ingredientsBun.push(action.payload);

        state.ingredientsBun.push(action.payload);
      } else if (
        action.payload.type === "bun" &&
        state.ingredientsBun?.length !== 0
      ) {
        state.ingredientsBun = [];

        state.ingredientsBun.push(action.payload);

        state.ingredientsBun.push(action.payload);
      }
      if (action.payload.type !== "bun") {
        state.ingredientsConstructor.push(action.payload);
      }
    },
    deleteIngredientInConstructor: (
      state: IStateListIngredientsConstructor,
      action: PayloadAction<string | undefined>
    ) => {
      console.log("Удаление в ред", action.payload);
      const newState = state.ingredientsConstructor.filter(
        (item) => item.idGen !== action.payload
      );
      console.log(newState);

      state.ingredientsConstructor = [...newState];
    },
    clearListIngredietnConstructor: (
      state: IStateListIngredientsConstructor,
      action: PayloadAction<string | undefined>
    ) => {
      state.ingredientsConstructor = [];
    },
    changeIndex: (
      state: IStateListIngredientsConstructor,
      action: PayloadAction<{ a: number; b: number }>
    ) => {
      const itemA = state.ingredientsConstructor[action.payload.a];
      const itemB = state.ingredientsConstructor[action.payload.b];
      state.ingredientsConstructor.splice(action.payload.a, 1, itemB);
      state.ingredientsConstructor.splice(action.payload.b, 1, itemA);
    },
  },
});

export const {
  totalPriceFunc,
  addIngredientInConstructor,
  deleteIngredientInConstructor,
  changeIndex,
  clearListIngredietnConstructor,
} = listIngredientsConstructorSlice.actions;
export default listIngredientsConstructorSlice.reducer;
