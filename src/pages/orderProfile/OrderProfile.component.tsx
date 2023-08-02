import React, { FC, memo, useEffect } from "react";
import styles from "./styles.module.css";
import { OrderItemBlock } from "../../components";

import { useAppDispatch, useAppSelector } from "../../services/store/store";

import { fetchData } from "../../services/reducers/listIngredientsSlice";
import { connect, disconnect } from "../../services/actions/actionsMyOrder";
import nextId from "react-id-generator";
import { Outlet, useParams } from "react-router";

export const OrderProfile: FC = memo(() => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const accessToken = useAppSelector(
    (state) => state.userProfile.accessToken
  )?.split(" ")[1];

  const orderObject = useAppSelector(
    (state) => state.MyOrderFeedReducer.ordersObject
  );
  const listIngredients = useAppSelector(
    (state) => state.listIngredientsSlice.ingredients
  );

  useEffect(() => {
    dispatch(
      connect(`wss://norma.nomoreparties.space/orders?token=${accessToken}`)
    );
    return () => {
      dispatch(disconnect());
    };
  }, [accessToken, dispatch]);

  return (
    <div>
      {params.id ? (
        <Outlet />
      ) : (
        <div className={styles.band}>
          <div>
            {orderObject?.orders?.map((value, index) => {
              return (
                <OrderItemBlock
                  link={"profile/order"}
                  key={`${value._id + index}`}
                  order={value}
                  listIngredients={listIngredients}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
});
