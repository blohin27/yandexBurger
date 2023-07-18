import React, { useCallback, useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../services/store/store";
import { setIngredientDetails } from "../../services/reducers/currentIngredientDetailsSlice";
import {
  clearOrder,
  createdOrderRequest,
  setOpenOrder,
} from "../../services/reducers/createdOrderSlice";
import { clearListIngredietnConstructor } from "../../services/reducers/listIngredientsConstructorSlice";
import { BurgerIngredient } from "../../components/BurgerIngredients/BurgerIngredient";
import { BurgerConstructor } from "../../components/BurgerConstructor/BurgerConstructor";
import { Modal } from "../../components/Modal/Modal";
import { Order } from "../../components/Order/Order";
import { IngredientDetails } from "../../components/IngredientDetails/IngredientDetails";
import { Content } from "../../components";
import { useLocation, useNavigate } from "react-router";
import { fetchData } from "../../services/reducers/listIngredientsSlice";
import stateAppBehavior, {
  setHeaderActive,
} from "../../services/reducers/stateAppBehavior";
import {
  getUser,
  refreshToken,
} from "../../services/reducers/userProfileSlice";

export const DesignBurger = () => {
  const location = useLocation();
  const accessToken = useAppSelector((state) => state.userProfile.accessToken);
  const navigate = useNavigate();
  const data = useAppSelector(
    (state) => state.listIngredientsSlice.ingredients
  );
  const arrayIngredientsForCreatedOrder = useAppSelector(
    (state) => state.listIngredientsConstructorSlice
  );
  const ingredientDetails = useAppSelector(
    (state) => state.currentIngredientDetailsSlice.currentIngredient
  );
  const orderDetails = useAppSelector((state) => state.createdOrderSlice);
  let ingredientforModalByUpdate = useMemo(
    () => data?.filter((item) => item?._id === location.state?.id),
    [data, location.state?.id]
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    if (data?.length && ingredientforModalByUpdate?.length) {
      dispatch(setIngredientDetails(ingredientforModalByUpdate[0]));
    }
    if (sessionStorage.getItem("test") === "1") {
      window.history.replaceState(
        null,
        "",
        `/ingredients/${location?.state?.id}`
      );
    }
  }, [data, dispatch, ingredientforModalByUpdate, location?.state?.id]);

  useEffect(() => {
    dispatch(setHeaderActive("DesignBurger"));
    if (!!ingredientDetails) {
      sessionStorage.setItem("test", "1");
      window.history.replaceState(
        null,
        "",
        `/ingredients/${ingredientDetails?._id}`
      );
    }
  }, [dispatch, ingredientDetails]);

  const clearDetails = useCallback(() => {
    window.history.replaceState(null, "", `/`);
    dispatch(setIngredientDetails(null));

    sessionStorage.removeItem("test");
  }, [dispatch]);

  const onCloseOrder = useCallback(() => {
    dispatch(setOpenOrder(false));
    dispatch(clearOrder());
    dispatch(clearListIngredietnConstructor());
  }, [dispatch]);

  const onOpenOrder = useCallback(() => {
    if (!accessToken) {
      if (Boolean(localStorage.getItem("refreshToken"))) {
        dispatch(refreshToken());
      } else {
        navigate("/login", { state: { url: location.pathname } });
      }
    } else {
      dispatch(setOpenOrder(true));

      dispatch(createdOrderRequest(arrayIngredientsForCreatedOrder));
    }
  }, [accessToken, dispatch, location.pathname, navigate]);

  return (
    <>
      <Content>
        <BurgerIngredient items={data ?? undefined} />
        <BurgerConstructor
          selectedItems={data ?? undefined}
          openOrder={onOpenOrder}
        />
      </Content>

      <Modal open={orderDetails.openOrder} onClose={onCloseOrder}>
        <Order />
      </Modal>

      <Modal
        open={!!ingredientDetails}
        title={"Детали ингредиента"}
        onClose={clearDetails}
      >
        <IngredientDetails item={ingredientDetails!} />
      </Modal>
    </>
  );
};
