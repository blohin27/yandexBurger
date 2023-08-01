import { combineReducers } from "redux";
import listIngredientsSlice from "./listIngredientsSlice";
import currentIngredientDetailsSlice from "./currentIngredientDetailsSlice";
import listIngredientsConstructorSlice from "./listIngredientsConstructorSlice";
import createdOrderSlice from "./createdOrderSlice";
import userProfile from "./userProfileSlice";
import stateAppBehaviorSlice from "./stateAppBehavior";
import { OrderFeedReducer } from "./orderWsReducer";
import { MyOrderFeedReducer } from "./myOrderWsReducer";

const rootReducer = combineReducers({
  listIngredientsSlice,
  currentIngredientDetailsSlice,
  listIngredientsConstructorSlice,
  createdOrderSlice,
  userProfile,
  stateAppBehaviorSlice,
  OrderFeedReducer,
  MyOrderFeedReducer,
});

export default rootReducer;
