import React, { FC, ReactElement, useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../services/store/store";
import {
  getUser,
  refreshToken,
} from "../../services/reducers/userProfileSlice";
import { useLocation, useNavigate, useParams } from "react-router";

interface Props {
  element: React.ReactNode;
}

/*
 * Перенаправляет на вложенный маршрут только если пользователь  авторизован
 * */

export const AuthorizedRouteElement: FC<Props> = ({ element }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const accessToken = useAppSelector((state) => state.userProfile.accessToken);

  useEffect(() => {
    if (!accessToken) {
      if (Boolean(localStorage.getItem("refreshToken"))) {
        dispatch(refreshToken());
      } else {
        navigate("/login", { state: { url: location.pathname } });
      }
    } else {
      dispatch(getUser(accessToken));
    }
  }, [accessToken]);

  useEffect(() => {
    if (!!accessToken && location.state !== "") {
      //navigate(`${location.state}`);
    }
  }, [accessToken, location.state]);

  if (accessToken) {
    return <>{element}</>;
  } else return null;
};
