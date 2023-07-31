export interface IIngredient {
  _id: string;
  type: string;
  proteins: number;
  price: number;
  name: string;
  image_large: string;
  image: string;
  image_mobile: string;
  fat: number;
  carbohydrates: number;
  calories: number;
  idGen?: string;
}

export interface IStateListIngredientsConstructor {
  ingredientsConstructor: IIngredient[];
  totalPrice: number;
  ingredientsBun: IIngredient[];
}

export interface Order {
  createdAt: string;
  ingredients: string[];
  name: string;
  number: number;
  status: string;
  updateAt: string;
  _id: string;
}
