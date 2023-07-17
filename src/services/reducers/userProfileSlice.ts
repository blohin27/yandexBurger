import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  AUTH_GET_USER_URL,
  AUTH_LOGIN_USER_URL,
  AUTH_PATCH_USER_URL,
  CREATE_USER_URL,
  LOGOUT_URL,
  PASSWORD_RESET_RESET_URL,
  PASSWORD_RESET_URL,
  UPDATE_TOKEN_URL,
} from "../../const/const";
import { bodyUserProfileReset } from "../../common/helper";

import {
  IResponseCreateUser,
  IResponseRefreshToken,
  IResponseUpdateUser,
  IUserProfile,
} from "../../types/types";
import { Store } from "react-notifications-component";

const initialState: IUserProfile = {
  email: undefined,
  name: undefined,
  accessToken: undefined,
  accessResetPasswordStepTwo: 0,
  success: false,
};

export const logoutApp = createAsyncThunk(
  "userProfileSlice/logoutApp",
  async (param: string | undefined, { rejectWithValue }) => {
    try {
      const response = await fetch(LOGOUT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: localStorage.getItem("refreshToken") }),
      });
      if (response.status === 200) {
      } else {
        throw new Error();
      }
    } catch (e) {
      return rejectWithValue("Ошибка сработал rejectWithValue ");
    }
  }
);
export const forgotPassword = createAsyncThunk(
  "userProfileSlice/forgotPassword",
  async (param: { email: string }, { rejectWithValue }) => {
    const bodyRequest = bodyUserProfileReset(param.email);
    try {
      const response = await fetch(PASSWORD_RESET_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyRequest),
      });
      if (response.status === 200) {
      } else {
        throw new Error();
      }
    } catch (e) {
      return rejectWithValue("Ошибка сработал rejectWithValue ");
    }
  }
);

export const editUser = createAsyncThunk(
  "userProfileSlice/editUser",
  async (
    params: {
      name?: string;
      email?: string;
      password?: string;
      accessToken?: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const objReq = { ...params };
      delete objReq.accessToken;
      const response = await fetch(AUTH_GET_USER_URL, {
        method: "PATCH",
        headers: {
          Authorization: params.accessToken ?? "",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(objReq),
      });
      if (response.status === 200) {
        const data: IResponseUpdateUser = await response.json();
        return data;
      } else {
        throw new Error();
      }
    } catch (e) {
      return rejectWithValue("Ошибка сработал rejectWithValue ");
    }
  }
);

export const getUser = createAsyncThunk(
  "userProfileSlice/getUser",
  async (param: string | undefined, { rejectWithValue }) => {
    try {
      const response = await fetch(AUTH_PATCH_USER_URL, {
        method: "GET",
        headers: {
          Authorization: param ?? "",
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        const data: IResponseUpdateUser = await response.json();
        return data;
      } else {
        throw new Error();
      }
    } catch (e) {
      return rejectWithValue("Ошибка сработал rejectWithValue ");
    }
  }
);

export const refreshToken = createAsyncThunk(
  "userProfileSlice/refreshToken",
  async (_param: string | undefined, { rejectWithValue }) => {
    try {
      const response = await fetch(UPDATE_TOKEN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: localStorage.getItem("refreshToken") }),
      });
      if (response.status === 200) {
        const data: IResponseRefreshToken = await response.json();
        return data;
      } else {
        throw new Error();
      }
    } catch (e) {
      return rejectWithValue("Ошибка сработал rejectWithValue ");
    }
  }
);

export const forgotPasswordReset = createAsyncThunk(
  "userProfileSlice/forgotPasswordReset",
  async (param: { password: string; token: string }, { rejectWithValue }) => {
    try {
      const response = await fetch(PASSWORD_RESET_RESET_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(param),
      });

      if (response.status === 200) {
        const data: { success: string; message: string } =
          await response.json();
        return data;
      } else {
        throw new Error();
      }
    } catch (e) {
      return rejectWithValue("Ошибка сработал rejectWithValue ");
    }
  }
);

export const createUser = createAsyncThunk(
  "userProfileSlice/createUser",
  async (
    param: { email: string; password: string; name: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch(CREATE_USER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(param),
      });
      if (response.status === 200) {
        const data: IResponseCreateUser = await response.json();
        return data;
      } else {
        throw new Error();
      }
    } catch (e) {
      return rejectWithValue("Ошибка сработал rejectWithValue ");
    }
  }
);

export const authLogin = createAsyncThunk(
  "userProfileSlice/authLogin",
  async (
    param: { email: string; password: string; setEmptyFieldLogin?: () => void },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch(AUTH_LOGIN_USER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(param),
      });

      if (response.status === 200) {
        const data: IResponseCreateUser = await response.json();
        return data;
      } else {
        param?.setEmptyFieldLogin?.();
        Store.addNotification({
          title: "Ошибка авторизации",
          message: "",
          type: "danger",
          insert: "top",
          container: "top-center",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 2000,
            onScreen: false,
          },
        });
        throw new Error();
      }
    } catch (e) {
      return rejectWithValue("Ошибка сработал rejectWithValue ");
    }
  }
);
const userProfileSlice = createSlice({
  name: "userProfileSlice",
  initialState,
  reducers: {
    accessResetPasswordStepTwo: (state) => {
      state.accessResetPasswordStepTwo = 2;
    },
    accesStepResetZero: (state) => {
      state.accessResetPasswordStepTwo = 0;
    },
  },
  extraReducers: {
    [createUser.fulfilled.toString()]: (
      state: IUserProfile,
      action: PayloadAction<IResponseCreateUser>
    ) => {
      state.name = action.payload.user.name;
      state.email = action.payload.user.email;
      localStorage.setItem("refreshToken", action.payload.refreshToken);
      state.accessToken = action.payload.accessToken;
      Store.addNotification({
        title: "Пользователь успешно создан",
        message: "",
        type: "success",
        insert: "top",
        container: "bottom-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: false,
        },
      });
    },
    [createUser.rejected.toString()]: (
      state: IUserProfile,
      action: PayloadAction<IResponseCreateUser>
    ) => {},
    [forgotPassword.fulfilled.toString()]: (state: IUserProfile) => {
      state.accessResetPasswordStepTwo = 1;
    },
    [forgotPasswordReset.pending.toString()]: (
      state: IUserProfile,
      action: PayloadAction<any>
    ) => {
      state.isLoading = "pending";
    },
    [forgotPasswordReset.fulfilled.toString()]: (state: IUserProfile) => {
      state.accessResetPasswordStepTwo = 2;

      state.isLoading = "fulfilled";
      state.success = true;
    },
    [forgotPasswordReset.rejected.toString()]: (state: IUserProfile) => {
      state.isLoading = "reject";
      state.success = false;
      Store.addNotification({
        title: "Ошибка сброса пароля",
        message: "",
        type: "danger",
        insert: "top",
        container: "bottom-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: false,
        },
      });
    },
    [authLogin.fulfilled.toString()]: (
      state: IUserProfile,
      action: PayloadAction<IResponseCreateUser>
    ) => {
      state.name = action.payload.user.name;
      state.email = action.payload.user.email;
      state.accessToken = action.payload.accessToken;
      localStorage.setItem("refreshToken", action.payload.refreshToken);
    },
    [getUser.fulfilled.toString()]: (
      state: IUserProfile,
      action: PayloadAction<IResponseUpdateUser>
    ) => {
      state.name = action.payload.user.name;
      state.email = action.payload.user.email;
    },
    [getUser.rejected.toString()]: (state: IUserProfile) => {
      state.accessToken = undefined;
    },
    [editUser.fulfilled.toString()]: (
      state: IUserProfile,
      action: PayloadAction<IResponseUpdateUser>
    ) => {
      state.name = action.payload.user.name;
      state.email = action.payload.user.email;
    },
    [refreshToken.fulfilled.toString()]: (
      state: IUserProfile,
      action: PayloadAction<IResponseCreateUser>
    ) => {
      state.accessToken = action.payload.accessToken;
      localStorage.setItem("refreshToken", action.payload.refreshToken);
    },
    [refreshToken.rejected.toString()]: (state: IUserProfile) => {
      localStorage.removeItem("refreshToken");
    },
    [logoutApp.fulfilled.toString()]: (state: IUserProfile) => {
      state.accessToken = undefined;
      state.email = undefined;
      state.name = undefined;
      localStorage.removeItem("refreshToken");
    },
  },
});

export const { accessResetPasswordStepTwo, accesStepResetZero } =
  userProfileSlice.actions;
export default userProfileSlice.reducer;
