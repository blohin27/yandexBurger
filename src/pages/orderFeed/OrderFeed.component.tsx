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

export const OrderFeed = () => {
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const params = useParams();
  const orderTest = {
    createdAt: "2023-07-30T03:49:52.406Z",
    ingredients: [
      "631bc04d360a19001101b7f6",
      "631bc04d360a19001101b801",
      "631bc04d360a19001101b7f6",
    ],
    0: "631bc04d360a19001101b7f6",
    1: "631bc04d360a19001101b801",
    2: "631bc04d360a19001101b7f6",
    name: "Краторный фалленианский бургер",
    number: 918,
    status: "done",
    updatedAt: "2023-07-30T03:49:52.462Z",
    _id: "64c5dde0ead69d0011d4f34a",
  };

  useEffect(() => {
    dispatch(setHeaderActive("OrderFeed"));
  }, [dispatch]);
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
            <p className="text text_type_main-large">Лента заказов</p>
          </div>
          <div className={styles.content}>
            <div className={styles.band}>
              <div className={"pr-2"}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(() => {
                  return <OrderItemBlock />;
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
