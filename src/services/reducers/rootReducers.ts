import { combineReducers } from "redux";
import listIngredientsSlice from "./listIngredientsSlice";
import currentIngredientDetailsSlice from "./currentIngredientDetailsSlice";
import listIngredientsConstructorSlice from "./listIngredientsConstructorSlice";
import createdOrderSlice from "./createdOrderSlice";

const rootReducer = combineReducers({
  listIngredientsSlice,
  currentIngredientDetailsSlice,
  listIngredientsConstructorSlice,
  createdOrderSlice,
});

export default rootReducer;
