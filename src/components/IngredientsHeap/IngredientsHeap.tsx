import { IngredientTypes } from "../IngredientTypes/IngredientTypes";
import React, { forwardRef, useCallback } from "react";
import styles from "./styles.module.css";
import { IIngredient, IIngredientsHeap } from "../../types/types";
import { useIngredientsCategories } from "../../common/IngredientsHelper";

export const IngredientsHeap = forwardRef<HTMLDivElement, IIngredientsHeap>(
  ({ items, setCurrentTab, currentTab }, ref) => {
    const { arrayBun, arraySauce, arrayMain } = useIngredientsCategories(items);
    const onScroll = useCallback(
      (event: React.UIEvent<HTMLDivElement>) => {
        const sauceTOp =
          (document.getElementById("ingredient-sauce")?.getBoundingClientRect()
            .top || 0) - event.currentTarget.offsetTop;
        const mainTOp =
          (document.getElementById("ingredient-main")?.getBoundingClientRect()
            .top || 0) - event.currentTarget.offsetTop;
        if (mainTOp < 0 && currentTab !== "main") {
          setCurrentTab("main");
        }
        if (mainTOp > 0 && sauceTOp < 0 && currentTab !== "sauce") {
          console.log("соусы");
          setCurrentTab("sauce");
        }
        if (sauceTOp > 0 && currentTab !== "bun") {
          setCurrentTab("bun");
        }
      },
      [currentTab, setCurrentTab]
    );
    return (
      <div className={styles.ingredients} ref={ref} onScroll={onScroll}>
        {arrayBun && (
          <IngredientTypes
            id={"ingredient-bun"}
            key={"ingredient-bun"}
            data={arrayBun}
            text={"Булки"}
          />
        )}
        {arraySauce && (
          <IngredientTypes
            id={"ingredient-sauce"}
            key={"ingredient-sauce"}
            data={arraySauce}
            text={"Соусы"}
          />
        )}
        {arrayMain && (
          <IngredientTypes
            id={"ingredient-main"}
            key={"ingredient-main"}
            data={arrayMain}
            text={"Начинки"}
          />
        )}
      </div>
    );
  }
);
