import { setHeaderActive } from "../services/reducers/stateAppBehavior"; // замените на путь к вашему редьюсеру
import { initialState } from "../services/reducers/stateAppBehavior";
import stateAppBehaviorReducer from "../services/reducers/stateAppBehavior";

jest.mock("react-notifications-component", () => ({
  Store: {
    addNotification: jest.fn(),
  },
}));

describe("stateAppBehaviorReducer reducer", () => {
  it("should handle stateAppBehaviorReducer", () => {
    const action = {
      type: setHeaderActive,
      payload: "main",
    };

    const newState = stateAppBehaviorReducer(initialState, action);

    expect(newState).toStrictEqual({
      ...initialState,
      headerActive: "main",
    });
  });

  it("should return initialState if state is undefined", () => {
    const newState = stateAppBehaviorReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });
});
