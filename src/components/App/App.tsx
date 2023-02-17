import React, { useCallback, useEffect, useState } from "react";

import { AppHeader } from "../AppHeader/AppHeader";
import { BurgerIngredient } from "../BurgerIngredients/BurgerIngredient";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";
import styles from "./styles.module.css";
import { Modal } from "../Modal/Modal";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails";
import { Order } from "../Order/Order";
import { fetchData } from "../../services/reducers/listIngredientsSlice";
import { useAppDispatch, useAppSelector } from "../../services/store/store";
import { setIngredientDetails } from "../../services/reducers/currentIngredientDetailsSlice";

import {
  clearOrder,
  createdOrderRequest,
  setOpenOrder,
} from "../../services/reducers/createdOrderSlice";

export const App = () => {
  const data = useAppSelector(
    (state) => state.listIngredientsSlice.ingredients
  );
  const arrayIngredientsForCreatedOrder = useAppSelector(
    (state) => state.listIngredientsConstructorSlice
  );
  const ingredientDetails = useAppSelector(
    (state) => state.currentIngredientDetailsSlice.currentIngredient
  );
  const orderDetails = useAppSelector((state) => state.createdOrderSlice);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    //dispatch(setIngredientsAll(data ? data : null));
  }, [data, dispatch]);

  const clearDetails = useCallback(() => {
    dispatch(setIngredientDetails(null));
  }, [dispatch]);

  const onCloseOrder = useCallback(() => {
    dispatch(setOpenOrder(false));
    dispatch(clearOrder());
  }, [dispatch]);

  const onOpenOrder = useCallback(() => {
    // @ts-ignore
    console.log("data.lenght", data);
    if (data && data.length > 0) {
      dispatch(setOpenOrder(true));

      dispatch(createdOrderRequest(arrayIngredientsForCreatedOrder));
    }
  }, [arrayIngredientsForCreatedOrder, data, dispatch]);

  return (
    <div className={styles.app}>
      <AppHeader />

      <div className={styles.appContent}>
        <BurgerIngredient items={data ? data : undefined} />
        <BurgerConstructor
          selectedItems={data ?? undefined}
          openOrder={onOpenOrder}
        />
      </div>

      <Modal open={orderDetails.openOrder} onClose={onCloseOrder}>
        <Order />
      </Modal>

      <Modal
        open={!!ingredientDetails}
        title={"Детали ингредиента"}
        onClose={clearDetails}
      >
        <IngredientDetails item={ingredientDetails!} />
      </Modal>
    </div>
  );
};
