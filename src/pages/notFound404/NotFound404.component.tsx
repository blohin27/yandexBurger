import React, { FC, useEffect, useState } from "react";
import { AppHeader, isActiveEnum } from "../../components";
import styles from "./styles.module.css";
import { useNavigate } from "react-router";

interface Props {}

export const NotFound404: FC<Props> = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setInterval(() => {
      navigate("/login");
    }, 1500);
    return () => clearInterval(timeout);
  }, [navigate]);

  return (
    <div>
      <AppHeader isActive={isActiveEnum.PersonalCabinet} />
      <div className={styles.appContent}>
        <div className={styles.item404}>404</div>
        <div className={styles.item404}>Страница не найдена</div>
      </div>
    </div>
  );
};
