import React, { FC, useEffect, useState } from "react";
import { AppHeader, isActiveEnum } from "../../components/AppHeader/AppHeader";
import { Content } from "../../components";
import style from "./styles.module.css";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import classNames from "classnames";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../services/store/store";
import { createUser } from "../../services/reducers/userProfileSlice";
import { Store } from "react-notifications-component";
import { setHeaderActive } from "../../services/reducers/stateAppBehavior";

export const Register: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const accessToken = useAppSelector((state) => state.userProfile.accessToken);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setHeaderActive("PersonalCabinet"));
  }, []);

  useEffect(() => {
    if (accessToken) {
      navigate("/profile");
    }
  }, [accessToken]);

  return (
    <div className={style.registerWrap}>
      <Content className={style.content}>
        <div className={style.wrapCenter}>
          <div className="mb-6">
            <p className="text text_type_main-medium">Регистрация</p>
          </div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              if (name !== "" && email !== "" && password !== "") {
                dispatch(
                  createUser({ email: email, password: password, name: name })
                );
                setEmail("");
                setName("");
                setPassword("");
              } else {
                Store.addNotification({
                  title: "Поля не могут быть пустыми",
                  message: "",
                  type: "warning",
                  insert: "top",
                  container: "bottom-center",
                  animationIn: ["animate__animated", "animate__fadeIn"],
                  animationOut: ["animate__animated", "animate__fadeOut"],
                  dismiss: {
                    duration: 2000,
                    onScreen: false,
                  },
                });
              }
            }}
          >
            <div className="mb-6">
              <Input
                height={64}
                type={"text"}
                placeholder={"Имя"}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
                error={false}
                errorText={"Ошибка"}
                size={"default"}
                extraClass="ml-1"
              />
            </div>
            <div className="mb-6">
              <Input
                height={64}
                type={"email"}
                placeholder={"E-mail"}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                icon={"HideIcon"}
                error={false}
                errorText={"Проверьте правильность ввода"}
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
            <div className={`mb-20 ${style.btn_reg}`}>
              <Button htmlType="submit" type="primary" size="medium">
                Зарегистрироваться
              </Button>
            </div>
          </form>

          <div className={classNames(style.buttonHref, "mb-6")}>
            <div className="text text_type_main-default text_color_inactive m-2">
              Уже зарегистрированы?
            </div>
            <Button
              htmlType="button"
              type="secondary"
              size="medium"
              onClick={() => {
                navigate("/login");
              }}
            >
              Войти
            </Button>
          </div>
        </div>
      </Content>
    </div>
  );
};
