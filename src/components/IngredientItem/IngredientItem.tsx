import classNames from "classnames";
import styles from "./styles.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { FC, useCallback } from "react";
import { IIngredientItemComponent } from "../../types/types";
import { setIngredientDetails } from "../../services/reducers/currentIngredientDetailsSlice";
import { useAppDispatch, useAppSelector } from "../../services/store/store";
import { useDrag } from "react-dnd";
import nextId from "react-id-generator";
import { counterIngredients } from "../../common/helper";

export const IngredientItem: FC<IIngredientItemComponent> = ({ item }) => {
  const dispatch = useAppDispatch();
  const onClick = useCallback(() => {
    dispatch(setIngredientDetails(item));
  }, [dispatch, item]);

  const [, dragRef] = useDrag({
    type: "ingred",
    item: { ...item, idGen: nextId() },
    collect: (monitor) => ({ isDrag: monitor.isDragging() }),
  });

  const ingredientsConstructor = useAppSelector(
    (state) => state.listIngredientsConstructorSlice
  );

  return (
    <div ref={dragRef} className={classNames(styles.wrap)}>
      <div className={classNames(styles.item)} onClick={onClick}>
        <div className={classNames("ml-4 pl-4 mr-3 pr-4 ", styles.main)}>
          <img
            width={"240px"}
            height={"120px"}
            src={item.image}
            className={classNames("mt-2")}
          />
          <div>
            {counterIngredients(ingredientsConstructor, item) !== 0 && (
              <Counter
                count={counterIngredients(ingredientsConstructor, item)}
                size="default"
                extraClass="m-1"
              />
            )}
          </div>
        </div>
        <div className={styles.priceBlock}>
          <div className={"mb-1 mr-2"}>
            <p className="text text_type_digits-default"> {item.price}</p>
          </div>
          <CurrencyIcon type="primary" />
        </div>
        <div className={classNames("mt-2", styles.name, styles.text)}>
          <p className="text text_type_main-default">{item.name}</p>
        </div>
      </div>
    </div>
  );
};
