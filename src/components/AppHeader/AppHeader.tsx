import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./styles.module.css";
import classNames from "classnames";
import { NavItem } from "../NavItem/NavItem";
import { Link } from "react-router-dom";
import { FC } from "react";
import { useAppSelector } from "../../services/store/store";

interface Props {
  isActive?: isActiveEnum;
}

export enum isActiveEnum {
  DesignBurger = "DesignBurger",
  OrderFeed = "OrderFeed",
  PersonalCabinet = "PersonalCabinet",
}

export const AppHeader: FC<Props> = ({ isActive }) => {
  const name = useAppSelector((state) => state.userProfile.name);
  return (
    <div className={styles.wrap}>
      <div className={classNames(styles.contentHeader)}>
        <div className={styles.leftBlock}>
          <Link to={"/"}>
            <NavItem
              text={"Конструктор"}
              icon={
                <BurgerIcon
                  type={
                    isActive === isActiveEnum.DesignBurger
                      ? "primary"
                      : "secondary"
                  }
                />
              }
              isActive={isActive === isActiveEnum.DesignBurger}
            />
          </Link>
          <Link to={"/order"}>
            <NavItem
              text={"Лента заказов"}
              icon={
                <ListIcon
                  type={
                    isActive === isActiveEnum.OrderFeed
                      ? "primary"
                      : "secondary"
                  }
                />
              }
              isActive={isActive === isActiveEnum.OrderFeed}
            />
          </Link>
        </div>
        <div className={styles.centralBlock}>
          <a href={"#"}>
            <Logo></Logo>
          </a>
        </div>
        <div className={styles.rightBlock}>
          <Link to={"/profile"}>
            <NavItem
              text={name ? name : "Личный кабинет"}
              icon={
                <ProfileIcon
                  type={
                    isActive === isActiveEnum.PersonalCabinet
                      ? "primary"
                      : "secondary"
                  }
                />
              }
              isActive={isActive === isActiveEnum.PersonalCabinet}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
