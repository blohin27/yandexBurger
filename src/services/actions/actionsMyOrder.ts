import { createAction } from "@reduxjs/toolkit";
import { OrderFeed } from "../../types/types";
import { Order } from "../../types/types";

export const connect = createAction<string, "WS_MY_ORDER_CONNECT">(
  "WS_MY_ORDER_CONNECT"
);
export const disconnect = createAction("WS_MY_ORDER_DISCONNECT");
export const wsConnecting = createAction("WS_MY_ORDER_ONNECTING");
export const wsOpen = createAction("WS_MY_ORDER_OPEN");
export const wsClose = createAction("WS_MY_ORDER_CLOSE");
export const wsModalOrderFeed = createAction<
  Order | undefined,
  "WS_MY_ORDER_FEED"
>("WS_MY_ORDER_FEED");
export const wsMessage = createAction<OrderFeed, "WS_MY_ORDER_MESSAGE">(
  "WS_MY_ORDER_MESSAGE"
);
export const wsError = createAction<string, "WS_MY_ORDER_ERROR">(
  "WS_MY_ORDER_ERROR"
);
