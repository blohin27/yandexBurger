import {
  wsConnecting,
  wsOpen,
  wsClose,
  wsModalOrderFeed,
  wsMessage,
  wsError,
} from "../services/actions/actions"; // замените на путь к вашему редьюсеру
import {
  initialState,
  WebsocketStatus,
} from "../services/reducers/orderWsReducer";
import { OrderFeedReducer } from "../services/reducers/orderWsReducer";

jest.mock("react-notifications-component", () => ({
  Store: {
    addNotification: jest.fn(),
  },
}));

describe("MyOrderFeedReducer reducer", () => {
  it("should handle wsOpen", () => {
    const action = {
      type: wsConnecting,
      payload: null,
    };

    const newState = OrderFeedReducer(initialState, action);

    expect(newState).toStrictEqual({
      ...initialState,
      status: WebsocketStatus.CONNECTING,
    });
  });

  it("should handle disconnect", () => {
    const action = {
      type: wsOpen,
      payload: null,
    };

    const newState = OrderFeedReducer(initialState, action);

    expect(newState).toStrictEqual({
      ...initialState,
      status: WebsocketStatus.ONLINE,
    });
  });

  it("should handle wsClose", () => {
    const action = {
      type: wsClose,
      payload: null,
    };

    const newState = OrderFeedReducer(initialState, action);

    expect(newState).toStrictEqual({
      ...initialState,
      status: WebsocketStatus.OFFLINE,
    });
  });

  it("should handle wsModalOrderFeed", () => {
    const action = {
      type: wsModalOrderFeed,
      payload: {
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

    const newState = OrderFeedReducer(initialState, action);

    expect(newState).toStrictEqual({
      ...initialState,
      modalOrderFeed: {
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
    });
  });

  it("should handle wsMessage", () => {
    const action = {
      type: wsMessage,
      payload: {
        success: true,
        total: 100,
        totalToday: 200,
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
      },
    };

    const newState = OrderFeedReducer(initialState, action);

    expect(newState).toStrictEqual({
      ...initialState,
      ordersObject: {
        success: true,
        total: 100,
        totalToday: 200,
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
      },
    });
  });

  it("should handle wsError", () => {
    const action = {
      type: wsError,
      payload: "OtherError",
    };

    const newState = OrderFeedReducer(initialState, action);

    expect(newState).toStrictEqual({
      ...initialState,
      connectionError: "OtherError",
    });
  });

  it("should return initialState if state is undefined", () => {
    const newState = OrderFeedReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });
});
