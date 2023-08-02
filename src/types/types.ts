import { WebsocketStatus } from "../services/reducers/myOrderWsReducer";

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
export interface IStateListIngredientsConstructorWithAccessToken {
  ingredientsConstructor: IIngredient[];
  totalPrice: number;
  ingredientsBun: IIngredient[];
  accessToken: string;
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

export interface OrderFeed {
  orders: Order[];
  success: boolean;
  total: number;
  totalToday: number;
}

export type OrderFeedStore = {
  status: WebsocketStatus;
  connectionError: string;
  ordersObject: Partial<OrderFeed>;
  modalOrderFeed: Order | undefined;
};
