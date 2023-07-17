import styles from "./styles.module.css";
import React, {
  CSSProperties,
  FC,
  PropsWithChildren,
  StyleHTMLAttributes,
  useEffect,
} from "react";
import { useAppDispatch, useAppSelector } from "../../services/store/store";
import { useClipboard } from "use-clipboard-copy";
import { useNavigate } from "react-router";
import {
  getUser,
  refreshToken,
} from "../../services/reducers/userProfileSlice";
import { AppHeader } from "../AppHeader";

export const Container: FC<PropsWithChildren> = (props) => {
  const data = useAppSelector((state) => state);
  const clipboard = useClipboard();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const accessToken = useAppSelector((state) => state.userProfile.accessToken);

  useEffect(() => {
    if (!accessToken) {
      if (Boolean(localStorage.getItem("refreshToken"))) {
        dispatch(refreshToken());
      }
    } else {
      dispatch(getUser(accessToken));
    }
  }, [accessToken]);

  return (
    <>
      <AppHeader />
      <div className={styles.app}>{props.children}</div>
    </>
  );
};
