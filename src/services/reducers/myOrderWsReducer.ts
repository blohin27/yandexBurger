import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import {
  wsOpen,
  wsClose,
  wsMessage,
  wsError,
  wsConnecting,
  wsModalOrderFeed,
} from "../actions/actionsMyOrder";
import { OrderFeedStore } from "../../types/types";

export enum WebsocketStatus {
  CONNECTING = "CONNECTING...",
  ONLINE = "ONLINE",
  OFFLINE = "OFFLINE",
}

const initialState: OrderFeedStore = {
  status: WebsocketStatus.OFFLINE,
  connectionError: "",
  ordersObject: {},
  modalOrderFeed: undefined,
};

export const MyOrderFeedReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(wsConnecting, (state) => {
      state.status = WebsocketStatus.CONNECTING;
    })
    .addCase(wsOpen, (state) => {
      state.status = WebsocketStatus.ONLINE;
      state.connectionError = "";
    })
    .addCase(wsClose, (state) => {
      state.status = WebsocketStatus.OFFLINE;
    })
    .addCase(wsError, (state, action) => {
      state.connectionError = action.payload;
    })
    .addCase(wsMessage, (state, action) => {
      state.ordersObject = action.payload;
    })
    .addCase(wsModalOrderFeed, (state, action) => {
      state.modalOrderFeed = action.payload;
    });
});

/*
Если будет вопрос можно расскажать, что createSlice не выводит
экшены с type литерального типа и совсем строгую типизацию так не получить

const liveTableSlice = createSlice({
  name: "live-table",
  initialState,
  reducers: {
    wsOpen: (state) => {
      state.status = WebsocketStatus.ONLINE;
      state.connectionError = null;
    },
    wsClose: (state) => {
      state.status = WebsocketStatus.OFFLINE;
    },
    wsMessage: (state, action: PayloadAction<LiveTableActions>) => {
      state.table = liveTableUpdate(state.table, action.payload)
    },
    wsError: (state, action: PayloadAction<Event>) => {
      state.status = WebsocketStatus.ONLINE;
      state.connectionError = null;
    }
  }
})
export const liveTableReducer = liveTableSlice.reducer;
export const actions = liveTableSlice.actions
*/
