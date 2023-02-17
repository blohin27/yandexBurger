import { IIngredient } from "../types/types";
import { IStateListIngredients } from "../services/reducers/listIngredientsConstructorSlice";

export const bodyRequestForOrder = (data: IStateListIngredients) => {
  const arrayIngredients = [
    // @ts-ignore
    data.ingredientsBun[0],
    // @ts-ignore
    ...data.ingredientsConstructor,
    // @ts-ignore
    data.ingredientsBun[1],
  ];
  // @ts-ignore
  const arrayRezult = arrayIngredients.map((item: IIngredient) => item._id);

  return {
    ingredients: arrayRezult,
  };
};

export const counterIngredients = (
  data: IStateListIngredients,
  item: IIngredient
) => {
  const arrayIngredientsAll = [
    ...data.ingredientsBun,
    ...data.ingredientsConstructor,
  ];
  // @ts-ignore

  const counter = [];
  for (let current of arrayIngredientsAll) {
    if (current._id === item._id) {
      counter.push(item);
    }
  }

  return counter.length;
};
