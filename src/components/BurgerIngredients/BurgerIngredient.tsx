import styles from "./styles.module.css";
import classNames from "classnames";
import {Tabs} from "../Tabs/Tabs";
import {FC, useCallback, useEffect, useRef, useState} from "react";
import {IngredientsHeap} from "../IngredientsHeap/IngredientsHeap";
import {IIngredient} from "../../types/types";

interface IBurgerIngredient {
  items?: IIngredient[];
  setIngredientDetails: (e: IIngredient) => void;
}

export const BurgerIngredient: FC<IBurgerIngredient> = ({
                                                          setIngredientDetails,
                                                          items = [],
                                                        }) => {
  const [currentTab, setCurrentTab] = useState("bun");
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const block = document.getElementById(`ingredient-${currentTab}`);
    const topToScrollHeight = ref.current?.getBoundingClientRect()?.top || 0;
    const scrollTo = (block?.offsetTop || 0) - topToScrollHeight;

    scrollToActiveTab(scrollTo);

  }, [currentTab])

  const scrollToActiveTab = useCallback((y: number) => {
    ref.current?.scroll(0, y);
  }, []);

  return (
    <div className={styles.wrap}>
      <div className={classNames(styles.content)}>
        <p className="text text_type_main-large mt-10 mb-5">Соберите бургер</p>

        <Tabs setCurrentTab={setCurrentTab} currentTab={currentTab} />
        <IngredientsHeap
          ref={ref}
          items={items}
          setIngredientDetails={setIngredientDetails}
        />
      </div>
    </div>
  );
};
