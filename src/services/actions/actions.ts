import { createAction } from "@reduxjs/toolkit";
import { LiveTable, OrderFeed } from "../reducers/orderWsReducer";

export enum LiveTableActionType {
  DATA = "data",
}

export type Data = {
  type: LiveTableActionType.DATA;
  data: LiveTable;
};

export type LiveTableAction = Data;

export type LiveTableActions = Array<LiveTableAction>;

export const connect = createAction<string, "LIVE_TABLE_CONNECT">(
  "LIVE_TABLE_CONNECT"
);
export const disconnect = createAction("LIVE_TABLE_DISCONNECT");
export const wsConnecting = createAction("LIVE_TABLE_WS_CONNECTING");
export const wsOpen = createAction("LIVE_TABLE_WS_OPEN");
export const wsClose = createAction("LIVE_TABLE_WS_CLOSE");
export const wsMessage = createAction<OrderFeed, "LIVE_TABLE_WS_MESSAGE">(
  "LIVE_TABLE_WS_MESSAGE"
);
export const wsError = createAction<string, "LIVE_TABLE_WS_ERROR">(
  "LIVE_TABLE_WS_ERROR"
);

export type TLiveTableActions =
  | ReturnType<typeof connect>
  | ReturnType<typeof disconnect>
  | ReturnType<typeof wsConnecting>
  | ReturnType<typeof wsOpen>
  | ReturnType<typeof wsClose>
  | ReturnType<typeof wsMessage>
  | ReturnType<typeof wsError>;
