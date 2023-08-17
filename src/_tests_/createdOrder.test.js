import {
  createdOrderRequest,
  getOrder,
  setOpenOrder,
  clearOrder,
} from "../services/reducers/createdOrderSlice"; // замените на путь к вашему редьюсеру
import { initialState } from "../services/reducers/createdOrderSlice";
import createdOrderReducer from "../services/reducers/createdOrderSlice";

jest.mock("react-notifications-component", () => ({
  Store: {
    addNotification: jest.fn(),
  },
}));

describe("createdOrderRequest reducer", () => {
  it("should handle createdOrderRequest.fulfilled", () => {
    const burger = {
      success: true,
      name: "бурге",
      order: {
        createdAt: '"2023-08-14T19:52:21.199Z"',
        ingredients: [
          {
            calories: 420,
            carbohydrates: 53,
            fat: 24,
            image: "https://code.s3.yandex.net/react/code/bun-02.png",
            image_large:
              "https://code.s3.yandex.net/react/code/bun-02-large.png",
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
            image_large:
              "https://code.s3.yandex.net/react/code/bun-02-large.png",
            image_mobile:
              "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
            name: "Краторная булка N-200i",
            price: 1255,
            proteins: 80,
            type: "bun",
            _id: "643d69a5c3f7b9001cfa093c",
          },
        ],
        name: "бургер",
        number: 127389,
        owner: {
          name: "qwe",
          email: "iwuehf3@mail.ru",
          createdAt: "2023-08-14T15:09:38.532Z",
          updateAt: "2023-08-14T15:09:38.532Z",
        },
        price: 2056,
        status: "done",
        _id: "64da85f582e277001bfa910b",
      },
    };
    const action = {
      type: createdOrderRequest.fulfilled.toString(),
      payload: { ...burger },
    };

    const newState = createdOrderReducer(initialState, action);

    expect(newState.OrderDetails).toStrictEqual({ ...burger });
  });

  it("should handle createdOrderRequest.reject", () => {
    const burger = {
      success: true,
      name: "бурге",
      order: {
        createdAt: '"2023-08-14T19:52:21.199Z"',
        ingredients: [
          {
            calories: 420,
            carbohydrates: 53,
            fat: 24,
            image: "https://code.s3.yandex.net/react/code/bun-02.png",
            image_large:
              "https://code.s3.yandex.net/react/code/bun-02-large.png",
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
            image_large:
              "https://code.s3.yandex.net/react/code/bun-02-large.png",
            image_mobile:
              "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
            name: "Краторная булка N-200i",
            price: 1255,
            proteins: 80,
            type: "bun",
            _id: "643d69a5c3f7b9001cfa093c",
          },
        ],
        name: "бургер",
        number: 127389,
        owner: {
          name: "qwe",
          email: "iwuehf3@mail.ru",
          createdAt: "2023-08-14T15:09:38.532Z",
          updateAt: "2023-08-14T15:09:38.532Z",
        },
        price: 2056,
        status: "done",
        _id: "64da85f582e277001bfa910b",
      },
    };
    const action = {
      type: createdOrderRequest.rejected.toString(),
      payload: null,
    };

    const newState = createdOrderReducer(initialState, action);

    expect(newState.isFetchError).toBe(true);
  });

  it("should handle getOrder.fulfilled", () => {
    const burger = {
      success: true,
      orders: [
        {
          createdAt: '"2023-08-14T19:52:21.199Z"',
          ingredients: [
            {
              calories: 420,
              carbohydrates: 53,
              fat: 24,
              image: "https://code.s3.yandex.net/react/code/bun-02.png",
              image_large:
                "https://code.s3.yandex.net/react/code/bun-02-large.png",
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
              image_large:
                "https://code.s3.yandex.net/react/code/bun-02-large.png",
              image_mobile:
                "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
              name: "Краторная булка N-200i",
              price: 1255,
              proteins: 80,
              type: "bun",
              _id: "643d69a5c3f7b9001cfa093c",
            },
          ],
          name: "бургер",
          number: 127389,
          owner: {
            name: "qwe",
            email: "iwuehf3@mail.ru",
            createdAt: "2023-08-14T15:09:38.532Z",
            updateAt: "2023-08-14T15:09:38.532Z",
          },
          price: 2056,
          status: "done",
          _id: "64da85f582e277001bfa910b",
        },
      ],
    };
    const action = {
      type: getOrder.fulfilled.toString(),
      payload: { ...burger },
    };

    const newState = createdOrderReducer(initialState, action);

    expect(newState.currentOrder).toStrictEqual({ ...burger });
  });

  it("should handle setOpen", () => {
    const burger = {
      success: true,
      orders: [
        {
          createdAt: '"2023-08-14T19:52:21.199Z"',
          ingredients: [
            {
              calories: 420,
              carbohydrates: 53,
              fat: 24,
              image: "https://code.s3.yandex.net/react/code/bun-02.png",
              image_large:
                "https://code.s3.yandex.net/react/code/bun-02-large.png",
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
              image_large:
                "https://code.s3.yandex.net/react/code/bun-02-large.png",
              image_mobile:
                "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
              name: "Краторная булка N-200i",
              price: 1255,
              proteins: 80,
              type: "bun",
              _id: "643d69a5c3f7b9001cfa093c",
            },
          ],
          name: "бургер",
          number: 127389,
          owner: {
            name: "qwe",
            email: "iwuehf3@mail.ru",
            createdAt: "2023-08-14T15:09:38.532Z",
            updateAt: "2023-08-14T15:09:38.532Z",
          },
          price: 2056,
          status: "done",
          _id: "64da85f582e277001bfa910b",
        },
      ],
    };
    const action = {
      type: setOpenOrder,
      payload: true,
    };

    const newState = createdOrderReducer(initialState, action);

    expect(newState.openOrder).toBe(true);
  });

  it("should handle clearOrder", () => {
    const action = {
      type: clearOrder,
    };

    const newState = createdOrderReducer(initialState, action);

    expect(newState.OrderDetails).toBeNull();
    expect(newState.isFetchError).toBe(false);
  });

  it("should return initialState if state is undefined", () => {
    const newState = createdOrderReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });
});
