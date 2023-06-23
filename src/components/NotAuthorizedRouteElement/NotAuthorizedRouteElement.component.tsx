import React, { FC, PropsWithChildren, ReactElement, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../services/store/store";
import { refreshToken } from "../../services/reducers/userProfileSlice";
import { useLocation, useNavigate } from "react-router";

interface Props {
  element: ReactElement<any, any>;
}

/*
 * Перенаправляет на вложенный маршрут только если пользователь не авторизован
 * */

export const NotAuthorizedRouteElement: FC<Props> = ({ element }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const accessToken = useAppSelector((state) => state.userProfile.accessToken);
  const refreshTokenBoolean = !!localStorage.getItem("refreshToken");
  const location = useLocation();

  useEffect(() => {
    console.log("NotAuthorizedRouteElement 3 state ", location.state);
    if (refreshTokenBoolean) {
      if (location.state?.url) {
        navigate(`${location.state?.url}`);
      } else {
        console.log(
          "NotAuthorizedRouteElement 4 после авторизации  ",
          location.state
        );
        navigate("/profile");
      }
    }
  }, [location.state, navigate, refreshTokenBoolean]);

  if (!refreshTokenBoolean) {
    return <>{element}</>;
  } else return null;
};