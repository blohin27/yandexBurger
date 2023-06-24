import styles from "../designBurger/styles.module.css";
import { AppHeader, isActiveEnum } from "../../components/AppHeader/AppHeader";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../services/store/store";
import { setHeaderActive } from "../../services/reducers/stateAppBehavior";

export const OrderFeed = () => {
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setHeaderActive("OrderFeed"));
  }, []);
  return (
    <>
      <div className={styles.appContent}></div>
    </>
  );
};
