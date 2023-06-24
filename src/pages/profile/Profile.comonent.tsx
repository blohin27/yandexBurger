import styles from "./styles.module.css";
import { AppHeader, isActiveEnum } from "../../components/AppHeader/AppHeader";
import React, { useEffect, useMemo, useState } from "react";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useAppDispatch, useAppSelector } from "../../services/store/store";
import { editUser, logoutApp } from "../../services/reducers/userProfileSlice";
import { Outlet, useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Store } from "react-notifications-component";
import classNames from "classnames";
import { setHeaderActive } from "../../services/reducers/stateAppBehavior";

export const Profile = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const accessToken = useAppSelector((state) => state.userProfile.accessToken);
  const nameStore = useAppSelector((state) => state.userProfile.name);
  const emailStore = useAppSelector((state) => state.userProfile.email);
  const [email, setEmail] = useState<string>();
  const [name, setName] = useState<string>();
  const [password, setPassword] = useState<string>();
  const isChanges = useMemo(() => {
    if (name !== nameStore || email !== emailStore || password?.length) {
      return true;
    }
  }, [email, emailStore, name, nameStore, password?.length]);

  useEffect(() => {
    dispatch(setHeaderActive("PersonalCabinet"));
  }, []);

  useEffect(() => {
    setEmail(emailStore!);
    setName(nameStore!);
  }, [emailStore, nameStore]);

  const onExit = () => {
    dispatch(logoutApp());
    navigate("/login");
  };

  const activeProfile =
    location.pathname === "/profile" ? "" : "text_color_inactive";
  const activeHistoryOrders =
    location.pathname === "/profile/order" ? "" : "text_color_inactive";

  const onClickButton = () => {
    const objReq: { name?: string; email?: string; password?: string } = {
      name: "",
      email: "",
      password: "",
    };
    if (name !== nameStore) {
      objReq.name = name;
    } else delete objReq.name;
    if (email !== emailStore) {
      objReq.email = email;
    } else delete objReq.email;
    if (password?.length) {
      objReq.password = password;
    } else delete objReq.password;

    if (Object.keys(objReq).length !== 0) {
      dispatch(editUser({ ...objReq, accessToken: accessToken })).then(() => {
        setPassword("");
        Store.addNotification({
          title: "Изменения успешно добавлены",
          message: "",
          type: "success",
          insert: "top",
          container: "bottom-center",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 2000,
            onScreen: false,
          },
        });
      });
    }
  };
  const onCancel = () => {
    setName(nameStore);
    setEmail(emailStore);
  };

  const CenterProfile = () => {
    return (
      <div>
        {location.pathname === "/profile/order" && <Outlet />}
        {location.pathname === "/profile" && (
          <div className={styles.columnItem}>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                const objReq: {
                  name?: string;
                  email?: string;
                  password?: string;
                } = {
                  name: "",
                  email: "",
                  password: "",
                };
                if (name !== nameStore) {
                  objReq.name = name;
                } else delete objReq.name;
                if (email !== emailStore) {
                  objReq.email = email;
                } else delete objReq.email;
                if (password?.length) {
                  objReq.password = password;
                } else delete objReq.password;

                if (Object.keys(objReq).length !== 0) {
                  dispatch(
                    editUser({ ...objReq, accessToken: accessToken })
                  ).then(() => {
                    setPassword("");
                    Store.addNotification({
                      title: "Изменения успешно добавлены",
                      message: "",
                      type: "success",
                      insert: "top",
                      container: "bottom-center",
                      animationIn: ["animate__animated", "animate__fadeIn"],
                      animationOut: ["animate__animated", "animate__fadeOut"],
                      dismiss: {
                        duration: 2000,
                        onScreen: false,
                      },
                    });
                  });
                }
              }}
            >
              <div className="mb-6">
                <Input
                  type={"text"}
                  placeholder={"Имя"}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  value={name ?? ""}
                  error={false}
                  errorText={"Ошибка"}
                  size={"default"}
                  extraClass="ml-1"
                />
              </div>
              <div className="mb-6">
                <Input
                  type={"text"}
                  placeholder={"Логин"}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email ?? ""}
                  error={false}
                  errorText={"Ошибка"}
                  size={"default"}
                  extraClass="ml-1"
                />
              </div>
              <div className="mb-6">
                <Input
                  type={"password"}
                  placeholder={"Пароль"}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password ?? ""}
                  error={false}
                  errorText={"Ошибка"}
                  size={"default"}
                  extraClass="ml-1"
                />
              </div>
              <div className={styles.buttonSave}>
                {isChanges && (
                  <>
                    <Button
                      htmlType="button"
                      size="medium"
                      type={"secondary"}
                      onClick={onCancel}
                    >
                      Отмена
                    </Button>
                    <Button htmlType="submit" type="primary" size="medium">
                      Сохранить
                    </Button>
                  </>
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <div className={styles.appContent}>
        <div className={styles.columnItem}>
          <div className={"p-6 button"}>
            <Link to={"/profile"}>
              <p
                className={classNames(
                  "text text_type_main-medium ",
                  activeProfile
                )}
              >
                Профиль
              </p>
            </Link>
          </div>
          <div className={"p-6 button"}>
            <Link to={"/profile/order"}>
              <p
                className={classNames(
                  "text text_type_main-medium",
                  activeHistoryOrders
                )}
              >
                История заказов
              </p>
            </Link>
          </div>
          <div className={"p-6 button"} onClick={onExit}>
            <p className="text text_type_main-medium text_color_inactive">
              Выход
            </p>
          </div>
        </div>

        <CenterProfile />
        <div className={styles.columnItem}></div>
      </div>
    </div>
  );
};
