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
import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../services/store/store";
import { useLocation, useNavigate } from "react-router";

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
  const headerActive = useAppSelector(
    (state) => state.stateAppBehaviorSlice.headerActive
  );

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
                    headerActive === isActiveEnum.DesignBurger
                      ? "primary"
                      : "secondary"
                  }
                />
              }
              isActive={headerActive === isActiveEnum.DesignBurger}
            />
          </Link>
          <Link to={"/feed"}>
            <NavItem
              text={"Лента заказов"}
              icon={
                <ListIcon
                  type={
                    headerActive === isActiveEnum.OrderFeed
                      ? "primary"
                      : "secondary"
                  }
                />
              }
              isActive={headerActive === isActiveEnum.OrderFeed}
            />
          </Link>
        </div>
        <div className={styles.centralBlock}>
          <a href={"/"}>
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
                    headerActive === isActiveEnum.PersonalCabinet
                      ? "primary"
                      : "secondary"
                  }
                />
              }
              isActive={headerActive === isActiveEnum.PersonalCabinet}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
