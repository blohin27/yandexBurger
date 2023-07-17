export interface IResponse {
  success: boolean;
  data: IIngredient[];
}
export type DragItemType = { index: number };

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

export interface IIngredientsCategories {
  arrayMain: IIngredient[];
  arrayBun: IIngredient[];
  arraySauce: IIngredient[];
}
export interface IConstructorElementComponent {
  idGen?: string;
  name: string;
  price: number;
  image_large: string;
  index: number;
}
export interface IOrderDetails {
  openOrder: () => void;
  price: number;
}

export interface IBurgerConstructor {
  selectedItems?: IIngredient[];
  openOrder: () => void;
}

export interface IBurgerIngredient {
  items?: IIngredient[];
}
export interface IModal {
  open: boolean;
  onClose: () => void;
  title?: string;
}

export interface IIngredientTypes {
  id: string;
  data: IIngredient[];
  text: string;
}

export interface IIngredientDetailsComponent {
  item?: IIngredient;
}

export interface IStateListIngredients {
  ingredients: IIngredient[] | null;
  isFetchError?: boolean;
}

export interface IIngredientItemComponent {
  item: IIngredient;
}

export interface IIngredientsHeap {
  items: IIngredient[];
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

export interface IModalOverlay {
  onClick?: () => void;
}

export interface INavItem {
  text: string;
  icon: JSX.Element;
  isActive: boolean;
}

export type TypeOrder = { number: number };
export type TypeOrderDetails = {
  name: string;
  order: TypeOrder;
  success: boolean;
};
export interface ICreatedOrder {
  OrderDetails: TypeOrderDetails | null;
  openOrder: boolean;
  isFetchError?: boolean;
}

export interface IStateAppBehavior {
  headerActive?: string;
}

export interface IUserProfile {
  email?: string;
  name?: string;
  password?: string;
  accessToken?: string;
  success?: boolean;
  accessResetPasswordStepTwo?: 0 | 1 | 2;
  isLoading?: "pending" | "fulfilled" | "reject";
}

export interface IResponseCreateUser {
  success: boolean;
  user: IUserProfile;
  accessToken: string;
  refreshToken: string;
}
export interface IResponseRefreshToken {
  success: boolean;
  accessToken: string;
  refreshToken: string;
}
export interface IResponseUpdateUser {
  success: boolean;
  user: IUserProfile;
}

export interface ICurrentIngrendient {
  currentIngredient: IIngredient | null;
}

export interface IStateListIngredientsConstructor {
  ingredientsConstructor: IIngredient[];
  totalPrice: number;
  ingredientsBun: IIngredient[];
}
