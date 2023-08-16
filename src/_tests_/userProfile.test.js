import {
  logoutApp,
  forgotPassword,
  forgotPasswordReset,
  createUser,
  authLogin,
  refreshToken,
  getUser,
  editUser,
} from "../services/reducers/userProfileSlice"; // замените на путь к вашему редьюсеру
import { initialState } from "../services/reducers/userProfileSlice";
import useProfileReducer from "../services/reducers/userProfileSlice";

jest.mock("react-notifications-component", () => ({
  Store: {
    addNotification: jest.fn(),
  },
}));

describe("userProfile reducer", () => {
  it("should handle logout.fulfilled", () => {
    const action = {
      type: logoutApp.fulfilled.toString(),
    };
    const newState = useProfileReducer(initialState, action);

    expect(newState.email).toBe(undefined);
    expect(newState.name).toBe(undefined);
    expect(newState.accessToken).toBe(undefined);
    expect(newState.accessResetPasswordStepTwo).toBe(0);
  });

  it("should handle logout.pending", () => {
    const action = {
      type: logoutApp.pending.toString(),
      payload: null,
    };
    const initialStateForPending = {
      email: "qwertt@mail.ru",
      name: "Petr",
      accessToken: "Token",
      success: false,
    };

    const newState = useProfileReducer(initialStateForPending, action);

    expect(newState.email).not.toBe(undefined);
    expect(newState.name).not.toBe(undefined);
    expect(newState.accessToken).not.toBe(undefined);
  });

  it("should handle logout.rejected", () => {
    const action = {
      type: logoutApp.rejected.toString(),
      payload: null,
    };
    const initialStateForPending = {
      email: "qwertt@mail.ru",
      name: "Petr",
      accessToken: "Token",
      success: false,
    };
    const newState = useProfileReducer(initialStateForPending, action);
    expect(newState.email).not.toBe(undefined);
    expect(newState.name).not.toBe(undefined);
    expect(newState.accessToken).not.toBe(undefined);
  });

  it("should return initialState if state is undefined", () => {
    const newState = useProfileReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });
  ///
  it("should handle forgotPassword.fulfilled", () => {
    const action = {
      type: forgotPassword.fulfilled.toString(),
    };
    const newState = useProfileReducer(initialState, action);
    expect(newState.accessResetPasswordStepTwo).toBe(1);
  });

  it("should handle forgotPassword.pending", () => {
    const action = {
      type: forgotPassword.pending.toString(),
      payload: null,
    };
    const newState = useProfileReducer(initialState, action);
    expect(newState.accessResetPasswordStepTwo).not.toBe(1);
  });

  it("should handle forgotPassword.rejected", () => {
    const action = {
      type: forgotPassword.pending.toString(),
      payload: null,
    };
    const newState = useProfileReducer(initialState, action);
    expect(newState).toEqual(initialState);
  });

  it("should forgotReset fulfilled", function () {
    const action = {
      type: forgotPasswordReset.fulfilled.toString(),
      payload: null,
    };

    const newState = useProfileReducer(initialState, action);

    expect(newState).toEqual({
      ...initialState,
      accessResetPasswordStepTwo: 2,
      isLoading: "fulfilled",
      success: true,
    });
  });
  it("should forgotReset Pending", function () {
    const action = {
      type: forgotPasswordReset.pending.toString(),
      payload: null,
    };

    const newState = useProfileReducer(initialState, action);

    expect(newState).toEqual({
      ...initialState,
      isLoading: "pending",
    });
  });

  it("should forgotReset reject", function () {
    const action = {
      type: forgotPasswordReset.rejected.toString(),
      payload: null,
    };

    const newState = useProfileReducer(initialState, action);

    expect(newState).toEqual({
      ...initialState,
      isLoading: "reject",
      success: false,
    });
  });

  it("should createUser fulfilled", function () {
    const action = {
      type: createUser.fulfilled.toString(),
      payload: {
        user: { name: "Petr", email: "23j@mail.ru" },
        accessToken: "accessToken",
        refreshToken: "refreshToken",
      },
    };

    const newState = useProfileReducer(initialState, action);

    expect(newState.name).not.toBeUndefined();
    expect(newState.accessToken).not.toBeUndefined();
    expect(localStorage.getItem("refreshToken")).not.toBeUndefined();
  });

  it("should createUser reject", function () {
    const action = {
      type: createUser.rejected.toString(),
      payload: null,
    };

    const newState = useProfileReducer(initialState, action);
    expect(newState).toEqual(initialState);
  });

  it("should authLogin fulfilled", function () {
    const action = {
      type: authLogin.fulfilled.toString(),
      payload: {
        user: { name: "Petr", email: "23j@mail.ru" },
        accessToken: "accessToken",
        refreshToken: "refreshToken",
      },
    };

    const newState = useProfileReducer(initialState, action);

    expect(newState.name).not.toBeUndefined();
    expect(newState.accessToken).not.toBeUndefined();
    expect(localStorage.getItem("refreshToken")).not.toBeUndefined();
  });

  it("should authLogin reject", function () {
    const action = {
      type: authLogin.rejected.toString(),
      payload: null,
    };
    const newState = useProfileReducer(initialState, action);
    expect(newState).toEqual(initialState);
  });

  it("should refreshToken fulfilled", function () {
    const action = {
      type: refreshToken.fulfilled.toString(),
      payload: {
        accessToken: "accessToken",
      },
    };

    const newState = useProfileReducer(initialState, action);
    expect(newState.accessToken).not.toBeUndefined();
    expect(localStorage.getItem("refreshToken")).not.toBeUndefined();
  });

  it("should refreshToken reject", function () {
    const action = {
      type: refreshToken.rejected.toString(),
      payload: null,
    };

    const newState = useProfileReducer(initialState, action);

    expect(localStorage.getItem("refreshToken")).toBeNull();
  });

  it("should getuser fulfilled", function () {
    const action = {
      type: getUser.fulfilled.toString(),
      payload: {
        user: { name: "Petr", email: "iri4j4@mail.ru" },
      },
    };

    const newState = useProfileReducer(initialState, action);
    expect(newState.name).not.toBeUndefined();
    expect(newState.email).not.toBeUndefined();
  });

  it("should getuser reject", function () {
    const action = {
      type: getUser.rejected.toString(),
      payload: null,
    };

    const newState = useProfileReducer(initialState, action);
    expect(newState.accessToken).toBeUndefined();
  });

  it("should editUser fulfilled", function () {
    const action = {
      type: editUser.fulfilled.toString(),
      payload: {
        user: { name: "Petr", email: "iri4j4@mail.ru" },
      },
    };

    const newState = useProfileReducer(initialState, action);
    expect(newState.name).not.toBeUndefined();
    expect(newState.email).not.toBeUndefined();
  });
  it("should return forgotPassword initialState if state is undefined", () => {
    const newState = useProfileReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });
});
