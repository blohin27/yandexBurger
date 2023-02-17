import { IngredientTypes } from "../IngredientTypes/IngredientTypes";
import { forwardRef } from "react";
import styles from "./styles.module.css";
import { IIngredient } from "../../types/types";
import { useIngredientsCategories } from "../../common/IngredientsHelper";

interface IIngredientsHeap {
  items: IIngredient[];
}

export const IngredientsHeap = forwardRef<HTMLInputElement, IIngredientsHeap>(
  ({ items }, ref) => {
    const { arrayBun, arraySauce, arrayMain } = useIngredientsCategories(items);

    return (
      <div className={styles.ingredients} ref={ref}>
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
