import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./styles.module.css";
import classNames from "classnames";
import { OrderDetails } from "../OrderDetails/OrderDetails";
import { FC, useEffect, useMemo } from "react";
import { IIngredient } from "../../types/types";
import { useIngredientsCategories } from "../../common/IngredientsHelper";
import { useAppDispatch, useAppSelector } from "../../services/store/store";
import {
  addIngredientInConstructor,
  deleteIngredientInConstructor,
  totalPriceFunc,
} from "../../services/reducers/listIngredientsConstructorSlice";
import { useDrop } from "react-dnd";
import nextId from "react-id-generator";

interface IBurgerConstructor {
  selectedItems?: IIngredient[];
  openOrder: () => void;
}

export const BurgerConstructor: FC<IBurgerConstructor> = ({
  selectedItems = [],
  openOrder,
}) => {
  const dispatch = useAppDispatch();
  const { arrayBun, arraySauce, arrayMain } =
    useIngredientsCategories(selectedItems);

  useEffect(() => {
    arrayBun[0] && dispatch(addIngredientInConstructor(arrayBun[0]));
  }, [arrayBun, dispatch]);

  const ingredients = useAppSelector(
    (state) => state.listIngredientsConstructorSlice.ingredientsConstructor
  );
  const ingredientsBun = useAppSelector(
    (state) => state.listIngredientsConstructorSlice.ingredientsBun
  );
  useEffect(() => {
    dispatch(totalPriceFunc());
  }, [dispatch, ingredients, ingredientsBun]);
  let totalPrice = useAppSelector(
    (state) => state.listIngredientsConstructorSlice.totalPrice
  );

  const [, dropTarget] = useDrop({
    accept: "ingred",
    drop(itemId: IIngredient) {
      dispatch(addIngredientInConstructor(itemId));
    },
  });

  console.log("ingredientsBun", ingredientsBun);

  return (
    <div className={styles.wrap}>
      <div className={classNames(styles.selectedIngredientsWrap)}>
        <div ref={dropTarget} className={styles.selectedIngredients}>
          <div className={styles.selectedIngredient}>
            <div className={styles.dragonAndDropItem}></div>
            {ingredientsBun.length > 0 && (
              <ConstructorElement
                type={"top"}
                extraClass={styles.backgroundItem}
                isLocked={true}
                // @ts-ignore
                text={ingredientsBun[0].name + " (верх)"}
                // @ts-ignore
                price={ingredientsBun[0].price}
                // @ts-ignore
                thumbnail={ingredientsBun[0].image_large}
              />
            )}
          </div>

          <div className={styles.scrollPart}>
            {ingredients.map(({ _id, name, price, image_large, idGen }) => (
              <div
                key={nextId()}
                className={classNames(
                  styles.selectedIngredient,
                  styles["selectedIngredient-mb"]
                )}
              >
                <div className={styles.dragonAndDropItem}>
                  <DragIcon type="primary" />
                </div>
                <ConstructorElement
                  handleClose={() => {
                    dispatch(deleteIngredientInConstructor(idGen));
                  }}
                  extraClass={styles.backgroundItem}
                  isLocked={false}
                  text={name}
                  price={price}
                  thumbnail={image_large}
                />
              </div>
            ))}
          </div>
          <div className={styles.selectedIngredient}>
            <div className={styles.dragonAndDropItem}></div>
            {ingredientsBun.length > 0 && (
              <ConstructorElement
                type={"bottom"}
                extraClass={styles.backgroundItem}
                isLocked={true}
                // @ts-ignore
                text={ingredientsBun[1].name + " (вниз)"}
                // @ts-ignore
                price={ingredientsBun[1].price}
                // @ts-ignore
                thumbnail={ingredientsBun[1].image_large}
              />
            )}
          </div>
        </div>
        <OrderDetails openOrder={openOrder} price={totalPrice} />
      </div>
    </div>
  );
};
