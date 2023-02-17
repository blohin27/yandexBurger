import React, { FC, memo, useState } from "react";
import styles from "./styles.module.css";
import classNames from "classnames";
import done from "../../images/done.png";
import { useAppSelector } from "../../services/store/store";
import {
  BeatLoader,
  MoonLoader,
  PacmanLoader,
  ScaleLoader,
} from "react-spinners";

export const Order: FC = memo(() => {
  const orderDetails = useAppSelector(
    (state) => state.createdOrderSlice.OrderDetails
  );

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  return (
    <div className={styles.wrap}>
      {orderDetails?.success ? (
        <>
          {" "}
          <p
            className={classNames(
              styles.number,
              "text text_type_digits-large mt-4"
            )}
          >
            {orderDetails?.order.number}
          </p>
          <p className="text text_type_main-medium mt-8">
            идентификатор заказа
          </p>
          <div className={classNames("mt-15", styles.flexCenter)}>
            <img src={done} alt={"done"} />
          </div>
          <p className="text text_type_main-default mt-15">
            Ваш заказ начали готовить
          </p>
          <p className="text text_type_main-default text_color_inactive mt-2">
            Дождитесь готовности на орбитальной станции
          </p>
        </>
      ) : (
        <MoonLoader
          color={"#505aff"}
          loading={true}
          speedMultiplier={1}
          size={200}
        />
      )}
    </div>
  );
});
