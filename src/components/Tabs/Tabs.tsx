import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { FC } from "react";
import style from "./styles.module.css";

interface ITabComponent {
  setCurrentTab: (value: string) => void;
  currentTab: string;
}

export const Tabs: FC<ITabComponent> = ({ setCurrentTab, currentTab }) => {
  return (
    <div className={`mb-10 ${style.wrap}`}>
      <Tab value="bun" active={currentTab === "bun"} onClick={setCurrentTab}>
        Булки
      </Tab>
      <Tab
        value="sauce"
        active={currentTab === "sauce"}
        onClick={setCurrentTab}
      >
        Соусы
      </Tab>
      <Tab value="main" active={currentTab === "main"} onClick={setCurrentTab}>
        Начинки
      </Tab>
    </div>
  );
};
