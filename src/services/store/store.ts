import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "../reducers/rootReducers";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import {
  connect as OrderFeedWsConnect,
  disconnect as OrderFeedWsDisconnect,
  wsConnecting as OrderFeedWsConnecting,
  wsOpen as OrderFeedWsOpen,
  wsClose as OrderFeedWsClose,
  wsMessage as OrderFeedWsMessage,
  wsError as OrderFeedWsError,
} from "../actions/actions";

import {
  connect as MyOrderFeedWsConnect,
  disconnect as MyOrderFeedWsDisconnect,
  wsConnecting as MyOrderFeedWsConnecting,
  wsOpen as MyOrderFeedWsOpen,
  wsClose as MyOrderFeedWsClose,
  wsMessage as MyOrderFeedWsMessage,
  wsError as MyOrderFeedWsError,
} from "../actions/actionsMyOrder";
import { socketMiddleware } from "../middleware/socket-middleware";

const wsActions = {
  wsConnect: OrderFeedWsConnect,
  wsDisconnect: OrderFeedWsDisconnect,
  wsConnecting: OrderFeedWsConnecting,
  onOpen: OrderFeedWsOpen,
  onClose: OrderFeedWsClose,
  onError: OrderFeedWsError,
  onMessage: OrderFeedWsMessage,
};
const wsActionsMyOrder = {
  wsConnect: MyOrderFeedWsConnect,
  wsDisconnect: MyOrderFeedWsDisconnect,
  wsConnecting: MyOrderFeedWsConnecting,
  onOpen: MyOrderFeedWsOpen,
  onClose: MyOrderFeedWsClose,
  onError: MyOrderFeedWsError,
  onMessage: MyOrderFeedWsMessage,
};

const OrderFeedMiddleware = socketMiddleware(wsActions);
const MyOrderFeedMiddleware = socketMiddleware(wsActionsMyOrder);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      OrderFeedMiddleware,
      MyOrderFeedMiddleware
    );
  },
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
