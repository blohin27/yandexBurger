import React from "react";
import { Route, Routes } from "react-router";
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

export const App: React.FC = () => {
  return (
    <Container>
      <ReactNotifications />
      <Routes>
        <Route path={"/"} element={<DesignBurger />} />
        <Route path={"/feed"} element={<OrderFeed />}>
          <Route path={":id"} element={<DetailsOrder />} />
        </Route>
        <Route
          path={"/profile/"}
          element={<AuthorizedRouteElement element={<Profile />} />}
        >
          <Route
            path={"order"}
            element={<AuthorizedRouteElement element={<OrderProfile />} />}
          />
        </Route>
        <Route path={"/profile/order/:id"} element={<DetailsOrder />} />
        <Route
          path={"/register"}
          element={<NotAuthorizedRouteElement element={<Ingredients />} />}
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
