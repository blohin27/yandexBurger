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

const OrderFeedMiddleware = socketMiddleware(wsActions);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(OrderFeedMiddleware);
  },
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
