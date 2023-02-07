export interface IResponse {
  success: boolean;
  data: IIngredient[];
}

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
}

export interface IIngredientsCategories {
  arrayMain: IIngredient[],
  arrayBun: IIngredient[],
  arraySauce: IIngredient[],
}
