import React, { useEffect } from "react";
import { Outlet, Route, Routes } from "react-router";
import { DesignBurger } from "../../pages/designBurger";
import { Profile } from "../../pages/profile";
import { OrderFeed } from "../../pages/orderFeed/OrderFeed.component";
import { Container } from "../Container/Container";
import {
  DetailsOrder,
  ForgotPassword,
  Ingredients,
  Login,
  NotFound404,
  OrderProfile,
  Register,
  ResetPassword,
} from "../../pages";
import { AuthorizedRouteElement } from "../AuthorizedRouteElement";
import { NotAuthorizedRouteElement } from "../NotAuthorizedRouteElement";
import { ReactNotifications } from "react-notifications-component";
import { fetchData } from "../../services/reducers/listIngredientsSlice";
import { useAppDispatch } from "../../services/store/store";

export const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <Container>
      <ReactNotifications />
      <Routes>
        <Route path={"/"} element={<DesignBurger />} />
        <Route path={"/feed"} element={<OrderFeed />}>
          <Route path={":id"} element={<DetailsOrder />} />
        </Route>
        <Route
          path={"/profile"}
          element={<AuthorizedRouteElement element={<Profile />} />}
        >
          <Route
            path={"order"}
            element={<AuthorizedRouteElement element={<OrderProfile />} />}
          >
            <Route
              path={":id"}
              element={<AuthorizedRouteElement element={<DetailsOrder />} />}
            />
          </Route>
        </Route>
        <Route
          path={"/register"}
          element={<NotAuthorizedRouteElement element={<Register />} />}
        />
        <Route
          path={"/forgot-password"}
          element={<NotAuthorizedRouteElement element={<ForgotPassword />} />}
        />
        <Route
          path={"/login"}
          element={<NotAuthorizedRouteElement element={<Login />} />}
        />
        <Route
          path={"/reset-password"}
          element={<NotAuthorizedRouteElement element={<ResetPassword />} />}
        />
        <Route path={"/ingredients/:id"} element={<Ingredients />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </Container>
  );
};
