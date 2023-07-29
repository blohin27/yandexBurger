import React, { FC, useEffect, useState } from "react";
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
import { setHeaderActive } from "../../services/reducers/stateAppBehavior";

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
    dispatch(setHeaderActive("PersonalCabinet"));
    dispatch(accessResetPasswordStepTwo());
    if (!!accessToken) {
      navigate("/profile");
    }
  }, [accessToken]);

  return (
    <div className={style.loginWrap}>
      <Content className={style.content}>
        <div className={style.wrapCenter}>
          <div className="mb-6">
            <p className="text text_type_main-medium">Вход</p>
          </div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              dispatch(
                authLogin({
                  email: email,
                  password: password,
                  setEmptyFieldLogin,
                })
              );
            }}
          >
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
                type={"password"}
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
            <div className={style.otherButton}>
              <Button htmlType="submit" type="primary" size="medium">
                Войти
              </Button>
            </div>
          </form>
          <div className={classNames(style.buttonHref, "mb-6 mt-20")}>
            <div className="text text_type_main-default text_color_inactive m-2">
              Вы новый пользователь?
            </div>
            <Button
              htmlType="button"
              type="secondary"
              size="medium"
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
