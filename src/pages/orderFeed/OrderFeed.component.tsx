import styles from "../designBurger/styles.module.css";
import { AppHeader, isActiveEnum } from "../../components/AppHeader/AppHeader";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../services/store/store";

export const OrderFeed = () => {
  const state = useAppSelector((state) => state);
  return (
    <>
      <AppHeader isActive={isActiveEnum.OrderFeed} />

      <div className={styles.appContent}></div>
    </>
  );
};
