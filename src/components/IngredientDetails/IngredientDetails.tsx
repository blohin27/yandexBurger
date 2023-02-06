import styles from "./styles.module.css";
import classNames from "classnames";
import { FC } from "react";
import { IIngredient } from "../../types/types";

interface IIngredientDetailsComponent {
  item: IIngredient;
}

export const IngredientDetails: FC<IIngredientDetailsComponent> = ({
  item,
}) => {

  return (
        <div className={styles.wrap}>
          <div className={styles.icon}>
            <img src={item.image_large}></img>
          </div>
          <div
            className={classNames(styles.name, "text text_type_main-medium")}
          >
            {item.name}
          </div>
          <div className={styles.structureIngredients}>
            <div
              className={classNames(
                styles.structureItem,
                "text text_color_inactive text_type_main-default"
              )}
            >
              <div className={classNames(styles.structureItemText)}>
                Каллории,&nbsp; ккал
              </div>
              <div className={styles.structureItemValue}> {item.calories}</div>
            </div>
            <div
              className={classNames(
                styles.structureItem,
                "text text_type_main-default text_color_inactive"
              )}
            >
              <div className={styles.structureItemText}>
                {" "}
                Протеины,&nbsp; белки
              </div>
              <div className={styles.structureItemValue}> {item.proteins}</div>
            </div>
            <div
              className={classNames(
                styles.structureItem,
                "text text_type_main-default text_color_inactive"
              )}
            >
              <div className={styles.structureItemText}> Жиры,&nbsp; г</div>
              <div className={styles.structureItemValue}> {item.fat}</div>
            </div>
            <div
              className={classNames(
                styles.structureItem,
                "text text_type_main-default text_color_inactive"
              )}
            >
              <div className={styles.structureItemText}> Углеводы, &nbsp;г</div>
              <div className={styles.structureItemValue}>
                {item.carbohydrates}
              </div>
            </div>
          </div>
        </div>
  );
};
