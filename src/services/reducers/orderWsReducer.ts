import { createReducer } from "@reduxjs/toolkit";
import {
  wsOpen,
  wsClose,
  wsMessage,
  wsError,
  wsConnecting,
} from "../actions/actions";
import { Order } from "../../types/types";

export enum WebsocketStatus {
  CONNECTING = "CONNECTING...",
  ONLINE = "ONLINE",
  OFFLINE = "OFFLINE",
}
export interface TableRow {
  id: number;
  text: string;
}

export interface OrderFeed {
  orders: Order[];
  success: boolean;
  total: number;
  totalToday: number;
}

export type LiveTable = Array<TableRow>;

export type OrderFeedStore = {
  status: WebsocketStatus;
  connectionError: string;
  ordersObject: Partial<OrderFeed>;
};

const initialState: OrderFeedStore = {
  status: WebsocketStatus.OFFLINE,
  connectionError: "",
  ordersObject: {},
};

export const OrderFeedReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(wsConnecting, (state) => {
      state.status = WebsocketStatus.CONNECTING;
      console.log("в орде редюсер");
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
      console.log("addCase", action.payload.orders);
      state.ordersObject = action.payload;
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
