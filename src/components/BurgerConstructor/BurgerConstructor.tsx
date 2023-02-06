import {ConstructorElement, DragIcon,} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./styles.module.css";
import classNames from "classnames";
import {OrderDetails} from "../OrderDetails/OrderDetails";
import {FC, useMemo} from "react";
import {IIngredient} from "../../types/types";
import {useIngredientsCategories} from "../../common/IngredientsHelper";

interface IBurgerConstructor {
  selectedItems?: IIngredient[];
  openOrder: () => void;
}

export const BurgerConstructor: FC<IBurgerConstructor> = ({selectedItems = [], openOrder}) => {

  const {arrayBun, arraySauce, arrayMain} = useIngredientsCategories(selectedItems);

  const ingredients = useMemo(() => [...arraySauce, ...arrayMain], [arrayBun, arraySauce, arrayMain])

  return (
    <div className={styles.wrap}>
      <div className={classNames(styles.selectedIngredientsWrap)}>
        <div className={styles.selectedIngredients}>
          <div className={styles.selectedIngredient}>
            <div className={styles.dragonAndDropItem}></div>
            <ConstructorElement
              type={"top"}
              extraClass={styles.backgroundItem}
              isLocked={true}
              text={arrayBun[0]?.name + " (верх)"}
              price={arrayBun[0]?.price}
              thumbnail={arrayBun[0]?.image_large}
            />
          </div>

          <div className={styles.scrollPart}>
            {ingredients.map(({_id, name, price, image_large}) => <div
              key={_id}
              className={classNames(
                styles.selectedIngredient,
                styles["selectedIngredient-mb"]
              )}
            >
              <div className={styles.dragonAndDropItem}>
                <DragIcon type="primary" />
              </div>
              <ConstructorElement
                extraClass={styles.backgroundItem}
                isLocked={true}
                text={name}
                price={price}
                thumbnail={image_large}
              />
            </div>)}
          </div>

          <div className={styles.selectedIngredient}>
            <div className={styles.dragonAndDropItem}></div>
            <ConstructorElement
              type={"bottom"}
              extraClass={styles.backgroundItem}
              isLocked={true}
              text={arrayBun[0]?.name + " (низ)"}
              price={arrayBun[0]?.price}
              thumbnail={arrayBun[0]?.image_large}
            />
          </div>
        </div>
        <OrderDetails
          openOrder={openOrder}
          price={500}
        />
      </div>
    </div>
  );
};
