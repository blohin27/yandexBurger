import {BurgerIcon, ListIcon, Logo, ProfileIcon,} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./styles.module.css";
import classNames from "classnames";
import {NavItem} from "../NavItem/NavItem";

export const AppHeader = () => {
  return (
    <div className={styles.wrap}>
      <div className={classNames(styles.contentHeader)}>
        <div className={styles.leftBlock}>
          <a href={"#"}>
          <NavItem
            text={"Конструктор"}
            icon={<BurgerIcon type="primary" />}
            isActive={true}
          />
          </a>
          <a href={"#"}>
          <NavItem
            text={"Лента заказов"}
            icon={<ListIcon type="secondary" />}
            isActive={false}
          />
          </a>
        </div>
        <div className={styles.centralBlock}>
          <a href={"#"}>
          <Logo></Logo>
          </a>
        </div>
        <div className={styles.rightBlock}>
          <a href={"#"}>
          <NavItem
            text={"Личный кабинет"}
            icon={<ProfileIcon type="secondary" />}
            isActive={false}
          />
          </a>
        </div>
      </div>
    </div>
  );
};
