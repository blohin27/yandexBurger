import React, {useCallback, useEffect, useState} from "react";

import {AppHeader} from "../AppHeader/AppHeader";
import {BurgerIngredient} from "../BurgerIngredients/BurgerIngredient";
import {BurgerConstructor} from "../BurgerConstructor/BurgerConstructor";
import styles from "./styles.module.css";
import {Modal} from "../Modal/Modal";
import {IngredientDetails} from "../IngredientDetails/IngredientDetails";
import {IIngredient, IResponse} from "../../types/types";
import {Order} from "../Order/Order";

const INGREDIENTS_URL = "https://norma.nomoreparties.space/api/ingredients"

export const App = () => {
  const [data, setData] = useState<IResponse | null>(null);
  const [openOrder, setOpenOrder] = useState(false);
  const [ingredientDetails, setIngredientDetails] = useState<IIngredient | null>(null);

  const fetchData = useCallback(async () => {

    const data = await fetch(INGREDIENTS_URL);
    if (data.ok){
      const result: IResponse = await data.json();
      setData(result);
    } else alert("Ошибка HTTP: " + data.status);

  }, []);

  useEffect(() => {
    fetchData().catch(console.error);
  }, []);

  const clearDetails = useCallback(() => {
    setIngredientDetails(null);
  }, [])

  const onCloseOrder = useCallback(() => {
    setOpenOrder(false);
  }, [])

  const onOpenOrder = useCallback(() => {
    setOpenOrder(true);
  }, [])

  return (
    <div className={styles.app}>
      <AppHeader />

      <div className={styles.appContent}>
        <BurgerIngredient
          items={data?.data}
          setIngredientDetails={setIngredientDetails}
        />
        <BurgerConstructor
          selectedItems={data?.data}
          openOrder={onOpenOrder}
        />
      </div>

      <Modal
        open={openOrder}
        onClose={onCloseOrder}
      >
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
