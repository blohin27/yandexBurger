import React, { FC, useEffect, useState } from "react";
import { AppHeader, isActiveEnum } from "../../components/AppHeader/AppHeader";
import { Content } from "../../components";
import style from "./styles.module.css";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../services/store/store";
import { forgotPassword } from "../../services/reducers/userProfileSlice";
import { Store } from "react-notifications-component";
import { setHeaderActive } from "../../services/reducers/stateAppBehavior";

export const ForgotPassword: FC = () => {
  const [email, setEmail] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const accessResetPasswordStepTwo = useAppSelector(
    (state) => state.userProfile.accessResetPasswordStepTwo
  );

  useEffect(() => {
    dispatch(setHeaderActive("PersonalCabinet"));
    if (accessResetPasswordStepTwo === 1) {
      navigate("/reset-password");
    }
  }, [accessResetPasswordStepTwo]);

  return (
    <div style={{ height: "100vh" }}>
      <Content style={{ height: "88%" }}>
        <div className={style.wrapCenter}>
          <div className="mb-6">
            <p className="text text_type_main-medium">Восстановление доступа</p>
          </div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              if (email !== "") {
                dispatch(forgotPassword({ email: email }));
              } else {
                Store.addNotification({
                  title: "Email не может быть пустым",
                  message: "",
                  type: "danger",
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
                type={"email"}
                placeholder={"Укажите E-mail"}
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
            <div className={`mb-20 ${style.btn_reg}`}>
              <Button htmlType="submit" type="primary" size="medium">
                Восстановить
              </Button>
            </div>
          </form>
          <div className={style.buttonHref}>
            <div className="text text_type_main-default text_color_inactive m-2">
              Вспомнили пароль?
            </div>
            <Button
              htmlType="button"
              type="secondary"
              size="medium"
              style={{ padding: 0 }}
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
