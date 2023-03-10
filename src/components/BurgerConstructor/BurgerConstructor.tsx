import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./styles.module.css";
import classNames from "classnames";
import { OrderDetails } from "../OrderDetails/OrderDetails";
import { FC, useEffect } from "react";
import { IBurgerConstructor, IIngredient } from "../../types/types";
import { useIngredientsCategories } from "../../common/IngredientsHelper";
import { useAppDispatch, useAppSelector } from "../../services/store/store";
import {
  addIngredientInConstructor,
  totalPriceFunc,
} from "../../services/reducers/listIngredientsConstructorSlice";
import { useDrop } from "react-dnd";
import nextId from "react-id-generator";
import { ConstructorElementComponent } from "../ConstructorElement/ConstructorElement";

export const BurgerConstructor: FC<IBurgerConstructor> = ({
  selectedItems = [],
  openOrder,
}) => {
  const dispatch = useAppDispatch();
  const { arrayBun } = useIngredientsCategories(selectedItems);

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
                text={ingredientsBun[0].name + " (????????)"}
                price={ingredientsBun[0].price}
                thumbnail={ingredientsBun[0].image_large}
              />
            )}
          </div>

          <div className={styles.scrollPart}>
            {ingredients.map(
              (
                { _id, name, price, image_large, idGen = nextId() },
                index: number
              ) => (
                <ConstructorElementComponent
                  key={idGen}
                  idGen={idGen}
                  price={price}
                  name={name}
                  image_large={image_large}
                  index={index}
                />
              )
            )}
          </div>
          <div className={styles.selectedIngredient}>
            <div className={styles.dragonAndDropItem}></div>
            {ingredientsBun.length > 0 && (
              <ConstructorElement
                type={"bottom"}
                extraClass={styles.backgroundItem}
                isLocked={true}
                text={ingredientsBun[1].name + " (????????)"}
                price={ingredientsBun[1].price}
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
