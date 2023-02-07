import styles from "./styles.module.css";
import classNames from "classnames";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {FC, PropsWithChildren, useCallback, useEffect} from "react";
import {ModalOverlay} from "../ModalOverlay/ModalOverlay";

interface IModal {
  open: boolean;
  onClose: () => void;
  title?: string;
}

export const Modal: FC<PropsWithChildren<IModal>> = ({
                                                       open,
                                                       onClose,
                                                       title,
                                                       children,
                                                     }) => {


  const keydownHandler = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", keydownHandler);

    return () => {
      document.removeEventListener("keydown", keydownHandler);
    }
  }, [])

  const stopPropagation = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
  }, []);

  if (!open) return null;

  return (
    <>
    <ModalOverlay onClick={onClose}>
      <div className={classNames(styles.wrap)} onClick={stopPropagation}>
        <div className={classNames(styles.header)}>
          <div className={styles.title}>{title}</div>
          <div className={styles.icon} onClick={onClose}>
            <CloseIcon type="primary" />
          </div>
        </div>
        <div className={classNames(styles.content)}>
          {children}
        </div>
      </div>
    </ModalOverlay>
    </>
  );
};
