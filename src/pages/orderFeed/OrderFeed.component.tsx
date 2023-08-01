import styles from "./styles.module.css";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../services/store/store";
import { setHeaderActive } from "../../services/reducers/stateAppBehavior";
import classNames from "classnames";
import { Order as IOrder } from "../../types/types";

import { Outlet, useLocation, useParams } from "react-router";
import {
  IngredientDetails,
  Modal,
  Order,
  OrderItemBlock,
} from "../../components";
import { DetailsOrder } from "../detailsOrder";
import {
  connect,
  disconnect,
  wsClose,
  wsConnecting,
  wsError,
  wsMessage,
  wsModalOrderFeed,
  wsOpen,
} from "../../services/actions/actions";
import { fetchData } from "../../services/reducers/listIngredientsSlice";

export const OrderFeed = () => {
  const ordersArray = useAppSelector(
    (state) => state.OrderFeedReducer.ordersObject.orders
  );
  const totalToday = useAppSelector(
    (state) => state.OrderFeedReducer.ordersObject.totalToday
  );
  const totalOrder = useAppSelector(
    (state) => state.OrderFeedReducer.ordersObject.total
  );
  const listIngredients = useAppSelector(
    (state) => state.listIngredientsSlice.ingredients
  );
  const modalOrder = useAppSelector(
    (state) => state.OrderFeedReducer.modalOrderFeed
  );
  const [modalState, setModalState] = useState<{
    open: boolean;
    order: IOrder | undefined;
  }>({ open: false, order: undefined });

  const dispatch = useAppDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(connect("wss://norma.nomoreparties.space/orders/all"));
    return () => {
      dispatch(disconnect());
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(setHeaderActive("OrderFeed"));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const orderArrayReady = ordersArray?.filter((item) => item.status === "done");

  const orderArrayNotReady = ordersArray?.filter(
    (item) => item.status !== "done"
  );

  return (
    <>
      {true && !params.id && (
        <div className={styles.appContent}>
          <div
            className={classNames(
              styles.bandTitle,
              "text text_type_main-large",
              "mt-10",
              "mb-5"
            )}
          >
            <p className="text text_type_main-large">{`Лента заказов  `}</p>
          </div>
          <div className={styles.content}>
            <div className={styles.band}>
              <div className={"pr-2"}>
                {ordersArray?.map((item) => {
                  return (
                    <OrderItemBlock
                      key={item._id}
                      order={item}
                      link={"feed"}
                      listIngredients={listIngredients}
                    />
                  );
                })}
              </div>
            </div>
            <div className={styles.statusBand}>
              <div className={classNames(styles.numbersOrders)}>
                <div className={classNames(styles.numbersReady)}>
                  <div
                    className={classNames(
                      styles.title,
                      "text text_type_main-medium mb-5"
                    )}
                  >
                    Готовы:
                  </div>
                  <div className={classNames(styles.numbersArrayOrders)}>
                    <div
                      className={classNames(
                        styles.columnOne,
                        "text text_type_digits-default "
                      )}
                    >
                      {orderArrayReady?.slice(0, 10).map((item, index) => {
                        return <div>{`${item.number}`}</div>;
                      })}
                    </div>
                    <div
                      className={classNames(
                        styles.columnOne,
                        "text text_type_digits-default"
                      )}
                    >
                      {orderArrayReady?.slice(10, 20).map((item, index) => {
                        return <div>{`${item.number}`}</div>;
                      })}
                    </div>
                  </div>
                </div>
                <div className={classNames(styles.numbersInProgress)}>
                  <div
                    className={classNames(
                      styles.title,
                      "text text_type_main-medium mb-5"
                    )}
                  >
                    В работе:
                  </div>
                  <div className={classNames(styles.numbersArrayOrders)}>
                    <div
                      className={classNames(
                        styles.columnOne,
                        "text text_type_digits-default "
                      )}
                    >
                      {orderArrayNotReady?.slice(0, 10).map((item, index) => {
                        return <div>{`${item.number}`}</div>;
                      })}
                    </div>
                    <div
                      className={classNames(
                        styles.columnOne,
                        "text text_type_digits-default"
                      )}
                    >
                      {orderArrayNotReady?.slice(10, 20).map((item, index) => {
                        return <div>{`${item.number}`}</div>;
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className={classNames(styles.totalOrders, "mt-15")}>
                <div
                  className={classNames(
                    styles.titleOrders,
                    "text text_type_main-medium mb-5"
                  )}
                >
                  Выполнено за все время:
                </div>
                <div
                  className={classNames(
                    styles.numbersTotalOrders,
                    "text text_type_digits-large"
                  )}
                >
                  {`${totalOrder}`}
                </div>
              </div>
              <div className={classNames(styles.totalOrders, "mt-15")}>
                <div
                  className={classNames(
                    styles.titleOrders,
                    "text text_type_main-medium mb-5"
                  )}
                >
                  Выполнено за сегодня
                </div>
                <div
                  className={classNames(
                    styles.numbersTotalOrders,
                    "text text_type_digits-large"
                  )}
                >
                  {`${totalToday}`}
                </div>
              </div>
            </div>
          </div>
          <Modal
            open={!!modalOrder}
            onClose={() => {
              dispatch(wsModalOrderFeed(undefined));
              window.history.replaceState(null, "", `/feed`);
            }}
            title={`#${modalOrder?.number}`}
          >
            <DetailsOrder modal order={modalOrder} />
          </Modal>
        </div>
      )}
      <Outlet />
    </>
  );
};
