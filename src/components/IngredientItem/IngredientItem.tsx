import classNames from "classnames";
import styles from "./styles.module.css";
import {Counter, CurrencyIcon,} from "@ya.praktikum/react-developer-burger-ui-components";
import {FC, useCallback} from "react";
import {IIngredient} from "../../types/types";

interface IIngredientItemComponent {
  item: IIngredient;
  setIngredientDetails: (e: IIngredient) => void;
}

export const IngredientItem: FC<IIngredientItemComponent> = (
  {setIngredientDetails, item}
) => {

  const onClick = useCallback(() => {
    setIngredientDetails(item);
  }, []);

  return (
    <div className={classNames(styles.wrap)}>
      <div
        className={classNames(styles.item)}
        onClick={onClick}
      >
        <div
          className={"ml-4 pl-4 mr-3 pr-4 "}
          style={{position: "relative"}}
        >
          <img
            width={"240px"}
            height={"120px"}
            src={item.image}
            className={classNames("mt-2")}
          />
          <div style={{position: "absolute", top: "0px", right: "0px"}}>
            <Counter count={1} size="default" extraClass="m-1" />
          </div>
        </div>
        <div style={{display: "flex"}}>
          <div className={"mb-1 mr-2"}>
            <p className="text text_type_digits-default"> {item.price}</p>
          </div>
          <CurrencyIcon type="primary" />
        </div>
        <div
          style={{textAlign: "center"}}
          className={classNames("mt-2", styles.name)}
        >
          <p className="text text_type_main-default">{item.name}</p>
        </div>
      </div>
    </div>
  );
};
