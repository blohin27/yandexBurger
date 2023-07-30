import React, { FC } from "react";
import styles from "./styles.module.css";
import { OrderItemBlock } from "../../components";

export const OrderProfile: FC = () => {
  return (
    <div>
      <div className={styles.band}>
        <div>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(() => {
            return <OrderItemBlock />;
          })}
        </div>
      </div>
    </div>
  );
};
