import React, {FC, memo, useState} from "react";
import styles from "./styles.module.css";
import classNames from "classnames";
import done from "../../images/done.png";

export const Order: FC = memo(
  () => {
    const [] = useState();

    return <div className={styles.wrap}>
      <p className={classNames(styles.number, 'text text_type_digits-large mt-4')}>
        034536
      </p>
      <p className="text text_type_main-medium mt-8">
        идентификатор заказа
      </p>
      <div className={classNames("mt-15", styles.flexCenter)}>
        <img src={done} alt={'done'} />
      </div>
      <p className="text text_type_main-default mt-15">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive mt-2">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>;
  },
);
