import React, { FC, PropsWithChildren, StyleHTMLAttributes } from "react";
import styles from "./styles.module.css";

export const Content: FC<
  PropsWithChildren<Partial<StyleHTMLAttributes<any>>>
> = ({ children, ...rest }) => {
  return (
    <div className={styles.appContent} {...rest}>
      {children}
    </div>
  );
};
