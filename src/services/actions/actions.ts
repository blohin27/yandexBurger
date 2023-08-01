import { createAction } from "@reduxjs/toolkit";
import { OrderFeed } from "../../types/types";
import { Order } from "../../types/types";

export const connect = createAction<string, "WS_ORDER_FEED_CONNECT">(
  "WS_ORDER_FEED_CONNECT"
);
export const disconnect = createAction("WS_ORDER_FEED_DISCONNECT");
export const wsConnecting = createAction("WS_ORDER_FEED_CONNECTING");
export const wsOpen = createAction("WS_ORDER_FEED_WS_OPEN");
export const wsClose = createAction("WS_ORDER_FEED_CLOSE");
export const wsModalOrderFeed = createAction<
  Order | undefined,
  "MODAL_ORDER_FEED"
>("MODAL_ORDER_FEED");
export const wsMessage = createAction<OrderFeed, "WS_ORDER_FEED_MESSAGE">(
  "WS_ORDER_FEED_MESSAGE"
);
export const wsError = createAction<string, "WS_ORDER_FEED_ERROR">(
  "WS_ORDER_FEED_ERROR"
);
