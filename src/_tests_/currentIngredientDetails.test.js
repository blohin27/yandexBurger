import { setIngredientDetails } from "../services/reducers/currentIngredientDetailsSlice"; // замените на путь к вашему редьюсеру
import { initialState } from "../services/reducers/currentIngredientDetailsSlice";
import currentIngredientReducer from "../services/reducers/currentIngredientDetailsSlice";

jest.mock("react-notifications-component", () => ({
  Store: {
    addNotification: jest.fn(),
  },
}));

describe("createdOrderRequest reducer", () => {
  it("should handle createdOrderRequest.fulfilled", () => {
    const ingredient = {
      calories: 420,
      carbohydrates: 53,
      fat: 24,
      image: "https://code.s3.yandex.net/react/code/bun-02.png",
      image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
      image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
      name: "Краторная булка N-200i",
      price: 1255,
      proteins: 80,
      type: "bun",
      _id: "643d69a5c3f7b9001cfa093c",
    };
    const action = {
      type: setIngredientDetails,
      payload: ingredient,
    };

    const newState = currentIngredientReducer(initialState, action);

    expect(newState).toStrictEqual({ currentIngredient: { ...ingredient } });
  });

  it("should return initialState if state is undefined", () => {
    const newState = currentIngredientReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });
});
