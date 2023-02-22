import styles from "./styles.module.css";
import classNames from "classnames";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { FC, PropsWithChildren, useCallback, useEffect } from "react";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
import { IModal } from "../../types/types";

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
    };
  }, []);

  const stopPropagation = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
    },
    []
  );

  useEffect(() => {
    const body = document.getElementsByTagName("body");

    const bodyStyle = body[0]?.style;

    if (bodyStyle) {
      if (open) {
        bodyStyle.overflow = "hidden";
      } else {
        bodyStyle.overflow = "auto";
      }
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className={styles.modal}>
      <div className={classNames(styles.wrap)} onClick={stopPropagation}>
        <div className={classNames(styles.header)}>
          <div className={styles.title}>{title}</div>
          <div className={styles.icon} onClick={onClose}>
            <CloseIcon type="primary" />
          </div>
        </div>
        <div className={classNames(styles.content)}>{children}</div>
      </div>
      <ModalOverlay onClick={onClose} />
    </div>
  );
};
