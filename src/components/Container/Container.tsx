import styles from "./styles.module.css";
import React, { FC, PropsWithChildren, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../services/store/store";

import {
  getUser,
  refreshToken,
} from "../../services/reducers/userProfileSlice";
import { AppHeader } from "../AppHeader";

export const Container: FC<PropsWithChildren> = (props) => {
  const dispatch = useAppDispatch();
  const accessToken = useAppSelector((state) => state.userProfile.accessToken);

  useEffect(() => {
    if (!accessToken) {
      if (Boolean(localStorage.getItem("refreshToken"))) {
        dispatch(refreshToken());
      }
    } else {
      dispatch(getUser(accessToken));
    }
  }, [accessToken, dispatch]);

  return (
    <>
      <AppHeader />
      <div className={styles.app}>{props.children}</div>
    </>
  );
};
