import React, { FC, useEffect, useState } from "react";
import { AppHeader, isActiveEnum } from "../../components/AppHeader/AppHeader";
import { Content } from "../../components";
import style from "./styles.module.css";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import classNames from "classnames";
import { useLocation, useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../services/store/store";
import {
  accessResetPasswordStepTwo,
  authLogin,
} from "../../services/reducers/userProfileSlice";

export const Login: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const accessToken = useAppSelector((state) => state.userProfile.accessToken);
  const location = useLocation();

  const dispatch = useAppDispatch();

  const setEmptyFieldLogin = () => {
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    dispatch(accessResetPasswordStepTwo());
    if (!!accessToken) {
      navigate("/profile");
    }
  }, [accessToken]);

  return (
    <div style={{ height: "100vh" }}>
      <AppHeader isActive={isActiveEnum.PersonalCabinet} />
      <Content style={{ height: "88%" }}>
        <div className={style.wrapCenter}>
          <div className="mb-6">
            <p className="text text_type_main-medium">Вход</p>
          </div>
          <div className="mb-6">
            <Input
              height={64}
              type={"text"}
              placeholder={"E-mail"}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              error={false}
              errorText={"Ошибка"}
              size={"default"}
              extraClass="ml-1"
            />
          </div>
          <div className="mb-6">
            <Input
              height={64}
              type={"text"}
              placeholder={"Пароль"}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              icon={"HideIcon"}
              error={false}
              errorText={"Ошибка"}
              size={"default"}
              extraClass="ml-1"
            />
          </div>
          <div className="mb-20">
            <Button
              htmlType="button"
              type="primary"
              size="medium"
              onClick={() => {
                dispatch(
                  authLogin({
                    email: email,
                    password: password,
                    setEmptyFieldLogin,
                  })
                );
              }}
            >
              Войти
            </Button>
          </div>
          <div className={classNames(style.buttonHref, "mb-6")}>
            <div className="text text_type_main-default text_color_inactive m-2">
              Вы новый пользователь?
            </div>
            <Button
              htmlType="button"
              type="secondary"
              size="medium"
              style={{ padding: 0 }}
              onClick={() => {
                navigate("/register");
              }}
            >
              Зарегистрироваться
            </Button>
          </div>
          <div className={style.buttonHref}>
            <div className="text text_type_main-default text_color_inactive m-2">
              Забыли пароль?
            </div>
            <Button
              htmlType="button"
              type="secondary"
              size="medium"
              style={{ padding: 0 }}
              onClick={() => {
                navigate("/forgot-password");
              }}
            >
              Восстановить доступ
            </Button>
          </div>
        </div>
      </Content>
    </div>
  );
};
