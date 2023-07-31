import styles from "./styles.module.css";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../services/store/store";
import { setHeaderActive } from "../../services/reducers/stateAppBehavior";
import classNames from "classnames";

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
  wsClose,
  wsConnecting,
  wsError,
  wsMessage,
  wsOpen,
} from "../../services/actions/actions";
import { fetchData } from "../../services/reducers/listIngredientsSlice";

export const OrderFeed = () => {
  const ordersArray = useAppSelector(
    (state) => state.OrderFeedReducer.ordersObject.orders
  );
  const listIngredients = useAppSelector(
    (state) => state.listIngredientsSlice.ingredients
  );

  const dispatch = useAppDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(connect("wss://norma.nomoreparties.space/orders/all"));
  }, [dispatch]);

  useEffect(() => {
    dispatch(setHeaderActive("OrderFeed"));
  }, [dispatch]);

  useEffect(() => {
    if (!listIngredients) {
      dispatch(fetchData());
    }
  }, []);

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
                      order={item}
                      ingredients={listIngredients ?? undefined}
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
                      {[
                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                        17,
                      ]
                        .slice(0, 10)
                        .map((item, index) => {
                          return <div>{item}</div>;
                        })}
                    </div>
                    <div
                      className={classNames(
                        styles.columnOne,
                        "text text_type_digits-default"
                      )}
                    >
                      {[
                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                        17,
                      ]
                        .slice(10, 20)
                        .map((item, index) => {
                          return <div>{item}</div>;
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
                      {[
                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                        17,
                      ]
                        .slice(0, 10)
                        .map((item, index) => {
                          return <div>{item}</div>;
                        })}
                    </div>
                    <div
                      className={classNames(
                        styles.columnOne,
                        "text text_type_digits-default"
                      )}
                    >
                      {[
                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                        17,
                      ]
                        .slice(10, 20)
                        .map((item, index) => {
                          return <div>{item}</div>;
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
                  398
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
                  2
                </div>
              </div>
            </div>
          </div>
          <Modal open={false} onClose={() => {}} title={"#0111"}>
            <DetailsOrder modal />
          </Modal>
        </div>
      )}
      <Outlet />
    </>
  );
};
