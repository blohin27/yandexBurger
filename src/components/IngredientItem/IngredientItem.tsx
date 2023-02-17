import classNames from "classnames";
import styles from "./styles.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { FC, useCallback, useMemo } from "react";
import { IIngredient } from "../../types/types";
import { setIngredientDetails } from "../../services/reducers/currentIngredientDetailsSlice";
import { useAppDispatch, useAppSelector } from "../../services/store/store";
import { useDrag } from "react-dnd";
import nextId from "react-id-generator";
import { counterIngredients } from "../../common/helper";

interface IIngredientItemComponent {
  item: IIngredient;
}

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
        <div
          className={"ml-4 pl-4 mr-3 pr-4 "}
          style={{ position: "relative" }}
        >
          <img
            width={"240px"}
            height={"120px"}
            src={item.image}
            className={classNames("mt-2")}
          />
          <div style={{ position: "absolute", top: "0px", right: "0px" }}>
            {counterIngredients(ingredientsConstructor, item) !== 0 && (
              <Counter
                count={counterIngredients(ingredientsConstructor, item)}
                size="default"
                extraClass="m-1"
              />
            )}
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div className={"mb-1 mr-2"}>
            <p className="text text_type_digits-default"> {item.price}</p>
          </div>
          <CurrencyIcon type="primary" />
        </div>
        <div
          style={{ textAlign: "center" }}
          className={classNames("mt-2", styles.name)}
        >
          <p className="text text_type_main-default">{item.name}</p>
        </div>
      </div>
    </div>
  );
};
