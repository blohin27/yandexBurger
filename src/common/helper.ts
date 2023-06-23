import { IIngredient, IStateListIngredientsConstructor } from "../types/types";

export const bodyRequestForOrder = (data: IStateListIngredientsConstructor) => {
  const arrayIngredients = [
    data.ingredientsBun[0],
    ...data.ingredientsConstructor,
    data.ingredientsBun[1],
  ];

  const arrayRezult = arrayIngredients.map((item: IIngredient) => item._id);

  return {
    ingredients: arrayRezult,
  };
};

export const bodyUserProfileReset = (data: string) => {
  return { email: data };
};

export const counterIngredients = (
  data: IStateListIngredientsConstructor,
  item: IIngredient
) => {
  const arrayIngredientsAll = [
    ...data.ingredientsBun,
    ...data.ingredientsConstructor,
  ];

  const counter = [];
  for (let current of arrayIngredientsAll) {
    if (current._id === item._id) {
      counter.push(item);
    }
  }

  return counter.length;
};
export function searchTotalPrice(array: IIngredient[]) {
  const result = array.reduce(
    (accumulator: number, currentValue: IIngredient) =>
      accumulator + currentValue.price,
    0
  );

  return result;
}
