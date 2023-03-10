import React, { useCallback } from "react";

import { AppHeader } from "../AppHeader/AppHeader";
import { BurgerIngredient } from "../BurgerIngredients/BurgerIngredient";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";
import styles from "./styles.module.css";
import { Modal } from "../Modal/Modal";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails";
import { Order } from "../Order/Order";
import { useAppDispatch, useAppSelector } from "../../services/store/store";
import { setIngredientDetails } from "../../services/reducers/currentIngredientDetailsSlice";
import {
  clearOrder,
  createdOrderRequest,
  setOpenOrder,
} from "../../services/reducers/createdOrderSlice";
import { clearListIngredietnConstructor } from "../../services/reducers/listIngredientsConstructorSlice";

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

  const clearDetails = useCallback(() => {
    dispatch(setIngredientDetails(null));
  }, [dispatch]);

  const onCloseOrder = useCallback(() => {
    dispatch(setOpenOrder(false));
    dispatch(clearOrder());
    dispatch(clearListIngredietnConstructor());
  }, [dispatch]);

  const onOpenOrder = useCallback(() => {
    if (data && data.length > 0) {
      dispatch(setOpenOrder(true));

      dispatch(createdOrderRequest(arrayIngredientsForCreatedOrder));
    }
  }, [arrayIngredientsForCreatedOrder, data, dispatch]);

  return (
    <div className={styles.app}>
      <AppHeader />

      <div className={styles.appContent}>
        <BurgerIngredient items={data ?? undefined} />
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
        title={"???????????? ??????????????????????"}
        onClose={clearDetails}
      >
        <IngredientDetails item={ingredientDetails!} />
      </Modal>
    </div>
  );
};
