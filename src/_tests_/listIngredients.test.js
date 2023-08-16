import { fetchData } from "../services/reducers/listIngredientsSlice"; // замените на путь к вашему редьюсеру
import { initialState } from "../services/reducers/listIngredientsSlice";
import listIngredientsReducer from "../services/reducers/listIngredientsSlice";

jest.mock("react-notifications-component", () => ({
  Store: {
    addNotification: jest.fn(),
  },
}));

describe("listIngredients reducer", () => {
  it("should handle fetchData.fulfilled", () => {
    const ingredients = [
      {
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
      },
      {
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
        _id: "643d69a5c3f7b9001cfa094c",
      },
      {
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
        _id: "643d69a5c3f7b9001cfa094c",
      },
      {
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
        _id: "643d69a5c3f7b9001cfa094c",
      },
    ];
    const action = {
      type: fetchData.fulfilled.toString(),
      payload: ingredients,
    };

    const newState = listIngredientsReducer(initialState, action);

    expect(newState.ingredients.length).not.toBe(0);
    expect(newState.isFetchError).not.toBe(true);
  });

  it("should handle fetchData.pending", () => {
    const action = {
      type: fetchData.pending.toString(),
      payload: null,
    };

    const newState = listIngredientsReducer(initialState, action);

    expect(newState).toEqual(initialState);
  });

  it("should handle fetchData.rejected", () => {
    const action = {
      type: fetchData.rejected.toString(),
      payload: null,
    };
    const newState = listIngredientsReducer(initialState, action);
    expect(newState.isFetchError).toBe(true);
    expect(newState.ingredients.length).toBe(0);
  });

  it("should return initialState if state is undefined", () => {
    const newState = listIngredientsReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });
});
