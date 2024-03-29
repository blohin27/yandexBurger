import styles from "./styles.module.css";
import classNames from "classnames";
import { IngredientItem } from "../IngredientItem/IngredientItem";
import { FC } from "react";
import { IIngredient } from "../../types/types";

export interface IIngredientTypes {
  id: string;
  data: IIngredient[];
  text: string;
}

export const IngredientTypes: FC<IIngredientTypes> = ({
  text,
  data = [],
  id,
}) => {
  return (
    <div
      id={id}
      className={classNames(
        styles.wrap,
        text === "Булки" ? "" : "mt-10",
        "mb-6"
      )}
    >
      <p className="text text_type_main-medium mb-6 ">{text} </p>
      <div className={classNames(styles.items, "pl-4 pr-4")}>
        {data.map((item) => (
          <IngredientItem key={`IngredientItem${item._id}`} item={item} />
        ))}
      </div>
    </div>
  );
};
