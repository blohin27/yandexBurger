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
import {
  accesStepResetZero,
  forgotPasswordReset,
} from "../../services/reducers/userProfileSlice";
import { setHeaderActive } from "../../services/reducers/stateAppBehavior";

export const ResetPassword: FC = () => {
  const [password, setPassword] = useState("");
  const accessResetPasswordStepTwo = useAppSelector(
    (state) => state.userProfile.accessResetPasswordStepTwo
  );
  const isloading = useAppSelector((state) => state.userProfile.isLoading);
  const [token, setToken] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    window.onhashchange = function () {};

    if (accessResetPasswordStepTwo === 2) {
      navigate("/login");
    }
    if (accessResetPasswordStepTwo === 0) {
      navigate("/forgot-password");
    }
  }, [accessResetPasswordStepTwo]);

  useEffect(() => {
    dispatch(setHeaderActive("PersonalCabinet"));
  }, []);

  useEffect(() => {
    if (isloading === "reject") {
      setToken("");
      setPassword("");
    }
  }, [isloading]);

  return (
    <div style={{ height: "100vh" }}>
      <Content style={{ height: "88%" }}>
        <div className={style.wrapCenter}>
          <div className="mb-6">
            <p className="text text_type_main-medium">Восстановление пароля</p>
          </div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              dispatch(
                forgotPasswordReset({ password: password, token: token })
              );
            }}
          >
            <div className="mb-6">
              <Input
                height={64}
                type={"password"}
                placeholder={"Введите новый пароль"}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
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
                placeholder={"Введите код из письма"}
                onChange={(e) => {
                  setToken(e.target.value);
                }}
                value={token}
                error={false}
                errorText={"Ошибка"}
                size={"default"}
                extraClass="ml-1"
              />
            </div>
            <div className={`mb-20 ${style.btn_reg}`}>
              <Button htmlType="submit" type="primary" size="medium">
                Сохранить
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
