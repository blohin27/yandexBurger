import styles from "./styles.module.css";
import {FC, PropsWithChildren} from "react";

interface IModalOverlay {
  onClick?: () => void;
}

export const ModalOverlay: FC<PropsWithChildren<IModalOverlay>> = ({
                                                                     onClick,
                                                                     children,
                                                                   }) => {
  return <div className={styles.overlay} onClick={onClick}>
    {children}
  </div>;
};
