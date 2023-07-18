import styles from "./styles.module.css";
import classNames from "classnames";
import { FC } from "react";

export interface INavItem {
  text: string;
  icon: JSX.Element;
  isActive: boolean;
}

export const NavItem: FC<INavItem> = (props) => {
  return (
    <div className={classNames(styles.wrapNavItem, "p-5", "mt-4", "mb-4")}>
      <div className={classNames("pr-2")}>{props.icon}</div>
      {!props.isActive ? (
        <div className="text text_type_main-default text_color_inactive">
          {props.text}
        </div>
      ) : (
        <div className={classNames("text text_type_main-default")}>
          {props.text}
        </div>
      )}
    </div>
  );
};
