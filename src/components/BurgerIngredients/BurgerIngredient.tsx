import styles from "./styles.module.css";
import classNames from "classnames";
import { Tabs } from "../Tabs/Tabs";
import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { IngredientsHeap } from "../IngredientsHeap/IngredientsHeap";
import { IBurgerIngredient, IIngredient } from "../../types/types";
import { fetchData } from "../../services/reducers/listIngredientsSlice";
import { useAppDispatch, useAppSelector } from "../../services/store/store";

export const BurgerIngredient: FC<IBurgerIngredient> = ({ items = [] }) => {
  const dispatch = useAppDispatch();
  const isFetchError = useAppSelector(
    (state) => state.listIngredientsSlice.isFetchError
  );
  const ref = useRef<HTMLDivElement>(null);
  const [currentTab, setCurrentTab] = useState("bun");

  const scrollToActiveTab = useCallback((y: number) => {
    ref.current?.scroll(0, y);
  }, []);

  const onSetCurrentTab = useCallback(
    (tab: string) => {
      const block = document.getElementById(`ingredient-${tab}`);
      const topToScrollHeight = ref.current?.getBoundingClientRect()?.top || 0;
      const scrollTo = (block?.offsetTop || 0) - topToScrollHeight;
      setCurrentTab(tab);

      scrollToActiveTab(scrollTo);
    },
    [scrollToActiveTab]
  );
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div className={styles.wrap}>
      <div className={classNames(styles.content)}>
        <p className="text text_type_main-large mt-10 mb-5">Соберите бургер</p>

        <Tabs setCurrentTab={onSetCurrentTab} currentTab={currentTab} />
        {!isFetchError ? (
          <IngredientsHeap
            setCurrentTab={setCurrentTab}
            currentTab={currentTab}
            ref={ref}
            items={items}
          />
        ) : (
          <div
            className="text text_type_main-large mt-10 mb-5"
            style={{ color: "red" }}
          >
            Ошибка при получении ингредиентов
          </div>
        )}
      </div>
    </div>
  );
};
