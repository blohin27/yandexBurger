import styles from "./styles.module.css";
import { FC, PropsWithChildren } from "react";
import { IModalOverlay } from "../../types/types";

export const ModalOverlay: FC<PropsWithChildren<IModalOverlay>> = ({
  onClick,
  children,
}) => {
  return <div className={styles.overlay} onClick={onClick}></div>;
};
