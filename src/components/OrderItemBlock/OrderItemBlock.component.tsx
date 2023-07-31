import React, { FC, useEffect, useMemo } from "react";
import classNames from "classnames";
import styles from "./styles.module.css";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { IIngredient, Order } from "../../types/types";
import { fetchData } from "../../services/reducers/listIngredientsSlice";
import { useAppDispatch, useAppSelector } from "../../services/store/store";

interface IOrder {
  order?: Order;
  ingredients?: IIngredient[];
}

export const OrderItemBlock: FC<IOrder> = ({ order, ingredients }) => {
  const dispatch = useAppDispatch();

  const priceOrder = order?.ingredients.reduce((item) => {
    return 0;
  }, 0);

  return (
    <div>
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
        </div>
        <div className={classNames(styles.ingredAndPrice, "mb-6")}>
          <div className={classNames(styles.ingredBlock)}>
            {/*начало блока*/}
            <div className={classNames(styles.imgItemOne)}>
              <div className={styles.imageStyle}>
                <img
                  className={styles.imgStyle}
                  src={
                    "https://code.s3.yandex.net/react/code/bun-02-mobile.png"
                  }
                ></img>
              </div>
            </div>
            <div className={classNames(styles.imgItemTwo)}>
              <div className={styles.imageStyle}>
                <img
                  className={styles.imgStyle}
                  src={
                    "https://code.s3.yandex.net/react/code/bun-02-mobile.png"
                  }
                ></img>
              </div>
            </div>
            <div className={classNames(styles.imgItemThree)}>
              <div className={styles.imageStyle}>
                <img
                  className={styles.imgStyle}
                  src={
                    "https://code.s3.yandex.net/react/code/bun-02-mobile.png"
                  }
                ></img>
              </div>
            </div>
            <div className={classNames(styles.imgItemFour)}>
              <div className={styles.imageStyle}>
                <img
                  className={styles.imgStyle}
                  src={
                    "https://code.s3.yandex.net/react/code/bun-02-mobile.png"
                  }
                ></img>
              </div>
            </div>
            <div className={classNames(styles.imgItemFive)}>
              <div className={styles.imageStyle}>
                <img
                  className={styles.imgStyle}
                  src={
                    "https://code.s3.yandex.net/react/code/bun-02-mobile.png"
                  }
                ></img>
              </div>
            </div>
            {true && (
              <div className={classNames(styles.imgItemSix)}>
                <div className={styles.imageStyle}>
                  <img
                    className={styles.imgStyle}
                    src={
                      "https://code.s3.yandex.net/react/code/bun-02-mobile.png"
                    }
                  ></img>
                </div>
              </div>
            )}
            {true && (
              <div className={classNames(styles.imgItemSix)}>
                <div className={styles.imageStyle}>
                  <img
                    className={styles.imgStyleWithNumbers}
                    src={
                      "https://code.s3.yandex.net/react/code/bun-02-mobile.png"
                    }
                  ></img>
                  <div
                    className={classNames(
                      styles.withNumbers,
                      "text text_type_digits-default"
                    )}
                  >
                    {"+3"}
                  </div>
                </div>
              </div>
            )}

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
              12342
            </div>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </div>
  );
};
