import React, { FC, useCallback, useEffect, useMemo } from "react";
import classNames from "classnames";
import styles from "./styles.module.css";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { IIngredient, Order } from "../../types/types";
import { useAppDispatch } from "../../services/store/store";
import { wsModalOrderFeed } from "../../services/actions/actions";
import nextId from "react-id-generator";

interface IOrder {
  order?: Order;
  listIngredients?: IIngredient[] | null;
  link?: string;
}

export const OrderItemBlock: FC<IOrder> = ({
  order,
  listIngredients,
  link,
}) => {
  const dispatch = useAppDispatch();
  let sum: number | undefined = 0;
  const orderLeght = order?.ingredients?.length ?? 0;
  const arrayStyle = [
    "imgItemOne",
    "imgItemTwo",
    "imgItemThree",
    "imgItemFour",
    "imgItemFive",
    "imgItemSix",
  ];

  if (listIngredients?.length !== 0 && order?.ingredients.length !== 0) {
    sum = order?.ingredients.reduce((previousValue, currentValue) => {
      const priceObject = listIngredients?.find(
        (item) => item._id === currentValue
      );
      const newAcc = previousValue + (priceObject?.price || 0);

      return newAcc;
    }, 0);
  }

  const arrayIngredientsImage = order?.ingredients.reduce<IIngredient[]>(
    (previousValue, currentValue) => {
      const priceObject = listIngredients?.find(
        (item) => item._id === currentValue
      );
      if (!!priceObject) {
        previousValue.push(priceObject);
      }

      return previousValue;
    },
    []
  );
  const openModal = useCallback(() => {
    if (!!order) {
      dispatch(wsModalOrderFeed(order));
      window.history.replaceState(null, "", `/${link}/${order.number}`);
    }
  }, [dispatch, order]);

  const statusTranslate = useCallback((item?: string) => {
    if (item === "done") {
      return "Выполнен";
    }
    if (item === "pending") {
      return "Готовится";
    }
    if (item === "created") {
      return "Создан";
    }

    return "Нет данных";
  }, []);

  return (
    <div onClick={openModal}>
      <div className={classNames(styles.orderCardWrap, "pt-6", "mb-5")}>
        <div className={classNames(styles.numberOfDate, "mb-6")}>
          <div
            className={classNames(
              styles.numberBlock,
              "text text_type_digits-default"
            )}
          >
            {`#${order?.number}`}
          </div>
          <div
            className={classNames(
              styles.dateBlock,
              "text text_type_main-default text_color_inactive"
            )}
          >
            <FormattedDate date={new Date(`${order?.createdAt}`)} />
          </div>
        </div>

        <div
          className={classNames(
            styles.nameBurger,
            "text text_type_main-medium",
            "mb-6"
          )}
        >
          {`${order?.name} `}
          <div
            className={classNames(
              styles.statusBurger,
              `${order?.status === "done" ? styles.statusReady : ""}`,
              "text text_type_main-small "
            )}
          >
            {statusTranslate(order?.status)}
          </div>
        </div>

        <div className={classNames(styles.ingredAndPrice, "mb-6")}>
          <div className={classNames(styles.ingredBlock)}>
            {/*начало блока*/}
            {arrayIngredientsImage?.map((item, index) => {
              if (index <= 4) {
                return (
                  <div
                    className={classNames(styles[arrayStyle[index]])}
                    key={`${item._id + index}`}
                  >
                    <div className={styles.imageStyle}>
                      <img
                        className={styles.imgStyle}
                        src={`${item.image_mobile}`}
                      ></img>
                    </div>
                  </div>
                );
              }
              if (index === 5 && orderLeght > 6) {
                return (
                  <div
                    key={`${item._id + index}`}
                    className={classNames(styles.imgItemSix)}
                  >
                    <div className={styles.imageStyle}>
                      <img
                        className={styles.imgStyleWithNumbers}
                        src={`${item.image_mobile}`}
                      ></img>
                      <div
                        className={classNames(
                          styles.withNumbers,
                          "text text_type_digits-default"
                        )}
                      >
                        {`+${
                          order?.ingredients?.length &&
                          order?.ingredients?.length - 6
                        }`}
                      </div>
                    </div>
                  </div>
                );
              }
              if (index === 5 && orderLeght === 6) {
                return (
                  <div
                    key={`${item._id + index}`}
                    className={classNames(styles[arrayStyle[index]])}
                  >
                    <div className={styles.imageStyle}>
                      <img
                        className={styles.imgStyle}
                        src={`${item.image_mobile}`}
                      ></img>
                    </div>
                  </div>
                );
              }
            })}

            {/*конец блока*/}
          </div>
          <div className={classNames(styles.priceBlock)}>
            <div
              className={classNames(
                styles.price,
                "text text_type_digits-default",
                "mr-1"
              )}
            >
              {`${sum}`}
            </div>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </div>
  );
};
