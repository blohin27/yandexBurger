import {
  totalPriceFunc,
  addIngredientInConstructor,
  deleteIngredientInConstructor,
  clearListIngredietnConstructor,
  changeIndex,
} from "../services/reducers/listIngredientsConstructorSlice"; // замените на путь к вашему редьюсеру
import { initialState } from "../services/reducers/listIngredientsConstructorSlice";
import ingredientConstructorReducer from "../services/reducers/listIngredientsConstructorSlice";
import useProfileReducer from "../services/reducers/userProfileSlice";

jest.mock("react-notifications-component", () => ({
  Store: {
    addNotification: jest.fn(),
  },
}));

describe("ingredientConstructorReducer reducer", () => {
  it("should handle bun", () => {
    const action = {
      type: totalPriceFunc,
    };

    const modifyState = {
      ...initialState,
      ingredientsConstructor: [
        {
          calories: 420,
          carbohydrates: 53,
          fat: 24,
          image: "https://code.s3.yandex.net/react/code/bun-02.png",
          image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
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
          image_mobile:
            "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
          name: "Краторная булка N-200i",
          price: 1255,
          proteins: 80,
          type: "bun",
          _id: "643d69a5c3f7b9001cfa093c",
        },
      ],
    };
    const newState = ingredientConstructorReducer(modifyState, action);

    expect(newState.totalPrice).not.toBe(0);
  });

  it("should handle addIngredientInConstructor", () => {
    const action = {
      type: addIngredientInConstructor,
      payload: {
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
    };

    const newState = ingredientConstructorReducer(initialState, action);

    expect(newState).toStrictEqual({
      ...initialState,
      ingredientsBun: [
        {
          calories: 420,
          carbohydrates: 53,
          fat: 24,
          image: "https://code.s3.yandex.net/react/code/bun-02.png",
          image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
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
          image_mobile:
            "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
          name: "Краторная булка N-200i",
          price: 1255,
          proteins: 80,
          type: "bun",
          _id: "643d69a5c3f7b9001cfa093c",
        },
      ],
    });
  });
  it("should handle addIngredientInConstructorSauce", () => {
    const action = {
      type: addIngredientInConstructor,
      payload: {
        calories: 420,
        carbohydrates: 53,
        fat: 24,
        image: "https://code.s3.yandex.net/react/code/bun-02.png",
        image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
        image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        name: "Краторная булка N-200i",
        price: 1255,
        proteins: 80,
        type: "sauce",
        _id: "643d69a5c3f7b9001cfa093c",
      },
    };

    const newState = ingredientConstructorReducer(initialState, action);

    expect(newState).toStrictEqual({
      ...initialState,
      ingredientsConstructor: [
        {
          calories: 420,
          carbohydrates: 53,
          fat: 24,
          image: "https://code.s3.yandex.net/react/code/bun-02.png",
          image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
          name: "Краторная булка N-200i",
          price: 1255,
          proteins: 80,
          type: "sauce",
          _id: "643d69a5c3f7b9001cfa093c",
        },
      ],
    });
  });

  it("should handle deleteIngredientInConstructor", () => {
    const action = {
      type: deleteIngredientInConstructor,
      payload: "keyForDelete",
    };

    const initialStateForDelete = {
      ...initialState,
      ingredientsConstructor: [
        {
          calories: 420,
          carbohydrates: 53,
          fat: 24,
          image: "https://code.s3.yandex.net/react/code/bun-02.png",
          image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
          name: "Краторная булка N-200i",
          price: 1255,
          proteins: 80,
          type: "sauce",
          _id: "643d69a5c3f7b9001cfa093c",
          idGen: "keyForDelete",
        },
      ],
    };

    const newState = ingredientConstructorReducer(
      initialStateForDelete,
      action
    );

    expect(newState).toStrictEqual({
      ...initialState,
      ingredientsConstructor: initialState.ingredientsConstructor.filter(
        (item) => item.idGen !== "keyForDelete"
      ),
    });
  });

  it("should handle clearListIngredietnConstructor", () => {
    const action = {
      type: clearListIngredietnConstructor,
      payload: null,
    };

    const initialStateForDelete = {
      ...initialState,
      ingredientsConstructor: [
        {
          calories: 420,
          carbohydrates: 53,
          fat: 24,
          image: "https://code.s3.yandex.net/react/code/bun-02.png",
          image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
          name: "Краторная булка N-200i",
          price: 1255,
          proteins: 80,
          type: "sauce",
          _id: "643d69a5c3f7b9001cfa093c",
          idGen: "keyForDelete",
        },
      ],
    };

    const newState = ingredientConstructorReducer(
      initialStateForDelete,
      action
    );

    expect(newState).toStrictEqual({
      ...initialState,
    });
  });

  it("should return  initialState if state is undefined", () => {
    const newState = ingredientConstructorReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });
});
