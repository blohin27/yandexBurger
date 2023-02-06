import {useMemo} from "react";
import {IIngredient, IIngredientsCategories} from "../types/types";

export const useIngredientsCategories = (items: IIngredient[]) => {
  return useMemo(() => items.reduce<IIngredientsCategories>((acc, item) => {
    if (item.type === "main") {
      acc.arrayMain.push(item)
    }
    if (item.type === "bun") {
      acc.arrayBun.push(item)
    }
    if (item.type === "sauce") {
      acc.arraySauce.push(item)
    }

    return acc;
  }, {
    arrayMain: [],
    arrayBun: [],
    arraySauce: [],
  }), [items])
};
