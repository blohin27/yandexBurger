import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IStateAppBehavior } from "../../types/types";

const initialState: IStateAppBehavior = {
  headerActive: "",
};

const stateAppBehaviorSlice = createSlice({
  name: "stateAppBehaviorSlice",
  initialState,
  reducers: {
    setHeaderActive: (
      state: IStateAppBehavior,
      action: PayloadAction<string>
    ) => {
      state.headerActive = action.payload;
    },
  },
});

export const { setHeaderActive } = stateAppBehaviorSlice.actions;
export default stateAppBehaviorSlice.reducer;
