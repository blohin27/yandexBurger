import React, { FC, memo } from "react";
import styles from "./styles.module.css";
import classNames from "classnames";
import done from "../../images/done.png";
import { useAppSelector } from "../../services/store/store";
import { MoonLoader } from "react-spinners";

export const Order: React.FC = memo(() => {
  const orderDetails = useAppSelector(
    (state) => state.createdOrderSlice.OrderDetails
  );
  const isFetchError = useAppSelector(
    (state) => state.createdOrderSlice.isFetchError
  );

  return (
    <div className={styles.wrap}>
      {orderDetails?.success ? (
        <>
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
      ) : !isFetchError ? (
        <MoonLoader
          color={"#505aff"}
          loading={true}
          speedMultiplier={1}
          size={200}
        />
      ) : (
        <p className="text text_type_main-large  m-25">
          ОШИБКА создания заказа
        </p>
      )}
    </div>
  );
});
