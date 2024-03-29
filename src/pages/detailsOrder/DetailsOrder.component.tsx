import React, { FC, useCallback, useEffect, useMemo } from "react";
import styles from "./styles.module.css";
import classNames from "classnames";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { IIngredient, Order } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../services/store/store";
import { useParams } from "react-router";
import { WebsocketStatus } from "../../services/reducers/orderWsReducer";
import { getOrder } from "../../services/reducers/createdOrderSlice";

interface MyComponentProps {
  style?: React.CSSProperties;
  modal?: boolean;
  order?: Order;
}

export const DetailsOrder: FC<MyComponentProps> = ({
  modal = false,
  order,
}) => {
  const params = useParams();
  const dispatch = useAppDispatch();

  const listIngredients = useAppSelector(
    (state) => state.listIngredientsSlice.ingredients
  );
  const status = useAppSelector((state) => state.OrderFeedReducer.status);
  const statusMyOrders = useAppSelector(
    (state) => state.MyOrderFeedReducer.status
  );

  const ordersArray = useAppSelector(
    (state) => state.OrderFeedReducer.ordersObject.orders
  );
  const myOrdersArray = useAppSelector(
    (state) => state.MyOrderFeedReducer.ordersObject.orders
  );

  const getOrderItem = useAppSelector(
    (state) => state.createdOrderSlice.currentOrder
  );

  const getOrderGetch = useCallback(() => {
    if (params.id) {
      dispatch(getOrder(String(params.id)));
    }
  }, [params.id]);

  useEffect(() => {
    const arrayOrders = ordersArray ?? myOrdersArray;
    const resp = arrayOrders?.find((item) => String(item.number) === params.id);
    if (
      (status === WebsocketStatus.ONLINE ||
        statusMyOrders === WebsocketStatus.ONLINE) &&
      (ordersArray?.length !== 0 || myOrdersArray?.length !== 0) &&
      !resp
    ) {
      getOrderGetch();
    }
  }, [
    getOrderGetch,
    myOrdersArray,
    ordersArray,
    params.id,
    status,
    statusMyOrders,
  ]);

  const orderForPage = useMemo(() => {
    const arrayOrders = ordersArray ?? myOrdersArray;
    const resp = arrayOrders?.find((item) => String(item.number) === params.id);

    return resp;
  }, [myOrdersArray, ordersArray, params.id]);

  const getObjectOrderIngredients = useCallback(
    (item?: Order) => {
      return item?.ingredients.reduce<{
        [key: string]: { count: number; info?: IIngredient };
      }>((acc, ingredientId) => {
        acc[ingredientId] = {
          count: (acc[ingredientId]?.count || 0) + 1,
          info: listIngredients?.find((item) => item._id === ingredientId),
        };
        return acc;
      }, {});
    },
    [listIngredients]
  );

  if (modal && order) {
    return <ContentForModal order={order} />;
  }

  const objectOrderIngredients = getObjectOrderIngredients(
    orderForPage || getOrderItem?.orders[0]
  );

  let sum: number | undefined = 0;

  if (listIngredients?.length !== 0) {
    sum = orderForPage?.ingredients.reduce((previousValue, currentValue) => {
      const priceObject = listIngredients?.find(
        (item) => item._id === currentValue
      );
      const newAcc = previousValue + (priceObject?.price || 0);

      return newAcc;
    }, 0);
  }

  const totalPrice =
    objectOrderIngredients &&
    Object.keys(objectOrderIngredients).reduce((acc, item) => {
      const sum =
        acc +
        (objectOrderIngredients[item]?.info?.price || 1) *
          objectOrderIngredients[item].count;
      return sum;
    }, 0);

  if (!modal) {
    return (
      <div className={classNames(styles.appContent)}>
        <div className={classNames(styles.wrap)}>
          <div className={classNames(styles.content, "mt-30")}>
            <div
              className={classNames(
                styles.numberBlock,
                "text text_type_digits-medium"
              )}
            >
              {`#${
                orderForPage?.number
                  ? `${orderForPage.number}`
                  : getOrderItem?.orders[0]?.number ?? "Нет данных"
              }`}
            </div>
            <div
              className={classNames(
                styles.title,
                "text text_type_main-medium",
                "mt-10"
              )}
            >
              {`#${
                orderForPage?.name
                  ? `${orderForPage.name}`
                  : getOrderItem?.orders[0]?.name ?? "Нет данных"
              }`}
            </div>
            <div
              className={classNames(
                styles.status,
                "text text_type_main-default mt-3"
              )}
            >
              {`${
                orderForPage?.status === "done"
                  ? "Выполнен"
                  : orderForPage?.status ??
                    (getOrderItem?.orders[0]?.status === "done"
                      ? "Выполнен"
                      : "Нет данных")
              }`}
            </div>
            <div
              className={classNames(
                styles.title,
                "text text_type_main-medium",
                "mt-15"
              )}
            >
              {"Состав: "}
            </div>
            <div className={classNames(styles.scrollBock, "mb-3 mt-1")}>
              {objectOrderIngredients &&
                Object.keys(objectOrderIngredients).map((item, index) => {
                  const object = objectOrderIngredients[item];

                  return (
                    <div
                      key={`${item + index}`}
                      className={classNames(styles.structure, "mb-1 mt-3 pr-6")}
                    >
                      {/*иконка*/}
                      <div className={styles.leftBlock}>
                        <div className={classNames(styles.imageStyle, "mr-3")}>
                          <img
                            className={styles.imgStyle}
                            src={`${object?.info?.image_mobile}`}
                          ></img>
                        </div>
                        {/*название*/}
                        <div
                          className={classNames(
                            styles.nameBurger,
                            "text text_type_main-default"
                          )}
                        >
                          {`${object?.info?.name}`}
                        </div>
                      </div>
                      {/*кол-во элементов */}
                      <div className={styles.rightBlock}>
                        <div
                          className={classNames(
                            styles.countIngred,
                            "text text text_type_digits-default"
                          )}
                        >
                          {`${object.count}`} x
                        </div>
                        {/*цена элементов*/}
                        <div
                          className={classNames(
                            styles.Price,
                            "text text text_type_digits-default mr-2 ml-2"
                          )}
                        >
                          {`${object?.info?.price}`}
                        </div>

                        <CurrencyIcon type="primary" />
                      </div>
                    </div>
                  );
                })}
            </div>

            {/*дата создания и стоимость*/}
            <div className={classNames(styles.numberOfDate, "mt-10")}>
              <div
                className={classNames(
                  styles.dateBlock,
                  "text text_type_main-default text_color_inactive"
                )}
              >
                {orderForPage ? (
                  <FormattedDate
                    date={new Date(`${orderForPage?.createdAt}`)}
                  />
                ) : (
                  <FormattedDate
                    date={new Date(`${getOrderItem?.orders[0]?.createdAt}`)}
                  />
                )}
              </div>
              <div className={classNames(styles.priceBlock)}>
                <div
                  className={classNames(
                    styles.price,
                    "text text_type_digits-default",
                    "mr-2"
                  )}
                >
                  {`${totalPrice ?? "Нет данных"}`}
                </div>
                <CurrencyIcon type="primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

const ContentForModal: FC<MyComponentProps> = ({ order }) => {
  const listIngredients = useAppSelector(
    (state) => state.listIngredientsSlice.ingredients
  );
  let sum: number | undefined = 0;

  if (listIngredients?.length !== 0 && order?.ingredients.length !== 0) {
    sum = order?.ingredients.reduce((previousValue, currentValue) => {
      const priceObject = listIngredients?.find(
        (item) => item._id === currentValue
      );
      const newAcc = previousValue + (priceObject?.price || 0);

      return newAcc;
    }, 0);
  }

  const objectOrderIngredients = order?.ingredients.reduce<{
    [key: string]: { count: number; info?: IIngredient };
  }>((acc, ingredientId) => {
    acc[ingredientId] = {
      count: (acc[ingredientId]?.count || 0) + 1,
      info: listIngredients?.find((item) => item._id === ingredientId),
    };
    return acc;
  }, {});

  const totalPrice =
    objectOrderIngredients &&
    Object.keys(objectOrderIngredients).reduce((acc, item) => {
      const sum =
        acc +
        objectOrderIngredients[item]!.info!.price *
          objectOrderIngredients[item].count;
      return sum;
    }, 0);

  return (
    <div className={classNames(styles.contentModal)}>
      <div
        className={classNames(
          styles.title,
          "text text_type_main-medium",
          "mt-10"
        )}
      >
        {`${order?.name}`}
      </div>
      <div
        className={classNames(
          styles.status,
          "text text_type_main-default mt-3"
        )}
      >
        {`${order?.status === "done" ? "Выполнен" : "Не готов"}`}
      </div>
      <div
        className={classNames(
          styles.title,
          "text text_type_main-medium",
          "mt-15"
        )}
      >
        {"Состав: "}
      </div>
      <div className={classNames(styles.scrollBock, "mb-3 mt-1")}>
        {objectOrderIngredients &&
          Object.keys(objectOrderIngredients).map((item, index) => {
            const object = objectOrderIngredients[item];

            return (
              <div
                className={classNames(styles.structure, "mb-1 mt-3 pr-6")}
                key={`${item + index}`}
              >
                {/*иконка*/}
                <div className={styles.leftBlock}>
                  <div className={classNames(styles.imageStyle, "mr-3")}>
                    <img
                      className={styles.imgStyle}
                      src={`${object?.info?.image_mobile}`}
                    ></img>
                  </div>
                  {/*название*/}
                  <div
                    className={classNames(
                      styles.nameBurger,
                      "text text_type_main-default"
                    )}
                  >
                    {`${order?.name}`}
                  </div>
                </div>
                {/*кол-во элементов */}
                <div className={styles.rightBlock}>
                  <div
                    className={classNames(
                      styles.countIngred,
                      "text text text_type_digits-default"
                    )}
                  >
                    {`${object.count}`} x
                  </div>
                  {/*цена элементов*/}
                  <div
                    className={classNames(
                      styles.Price,
                      "text text text_type_digits-default mr-2 ml-2"
                    )}
                  >
                    {`${object?.info?.price}`}
                  </div>

                  <CurrencyIcon type="primary" />
                </div>
              </div>
            );
          })}
      </div>

      {/*дата создания и стоимость*/}
      <div className={classNames(styles.numberOfDate, "mt-10")}>
        <div
          className={classNames(
            styles.dateBlock,
            "text text_type_main-default text_color_inactive"
          )}
        >
          <FormattedDate date={new Date(`${order?.createdAt}`)} />
        </div>
        <div className={classNames(styles.priceBlock)}>
          <div
            className={classNames(
              styles.price,
              "text text_type_digits-default",
              "mr-2"
            )}
          >
            {`${totalPrice}`}
          </div>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};
