import { FC, LegacyRef, useRef } from "react";

import classNames from "classnames";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {
  changeIndex,
  deleteIngredientInConstructor,
} from "../../services/reducers/listIngredientsConstructorSlice";
import { useAppDispatch, useAppSelector } from "../../services/store/store";
import styles from "./styles.module.css";
import { useDrag, useDrop } from "react-dnd";

interface IConstructorElementComponent {
  idGen?: string;
  name: string;
  price: number;
  image_large: string;
  index: number;
}

export const ConstructorElementComponent: FC<IConstructorElementComponent> = ({
  idGen,
  name,
  price,
  image_large,
  index,
}) => {
  const dispatch = useAppDispatch();
  const array = useAppSelector(
    (state) => state.listIngredientsConstructorSlice.ingredientsConstructor
  );
  const ref = useRef<HTMLDivElement>(null);
  const [_, dropTarget2] = useDrop({
    accept: "ingred2",
    drop(item: any) {
      console.log("Сработал второй дроп item", item);
      const dragIndex = item.index;
      const hoverIndex = index;
      console.log("dragIndex", array[dragIndex].idGen);
      console.log("hoverIndex", array[hoverIndex].idGen);
      dispatch(changeIndex({ a: dragIndex, b: hoverIndex }));
    },
  });

  const [, dragRef2] = useDrag({
    type: "ingred2",
    item: { index },
    collect: (monitor) => ({ isDrag: monitor.isDragging() }),
  });

  dragRef2(dropTarget2(ref));
  return (
    <div
      ref={ref}
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
  );
};
