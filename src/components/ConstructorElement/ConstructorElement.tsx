import { FC, useRef } from "react";

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
import { DragItemType, IConstructorElementComponent } from "../../types/types";

export const ConstructorElementComponent: FC<IConstructorElementComponent> = ({
  idGen,
  name,
  price,
  image_large,
  index,
}) => {
  const dispatch = useAppDispatch();

  const ref = useRef<HTMLDivElement>(null);
  const [_, dropTarget2] = useDrop({
    accept: "ingredients",
    drop(item: DragItemType) {
      const dragIndex = item.index;
      const hoverIndex = index;

      dispatch(changeIndex({ a: dragIndex, b: hoverIndex }));
    },
  });

  const [, dragRef2] = useDrag({
    type: "ingredients",
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
