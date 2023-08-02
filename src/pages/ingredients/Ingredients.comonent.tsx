import { AppHeader, isActiveEnum } from "../../components/AppHeader/AppHeader";
import React, { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../services/store/store";
import { useNavigate, useParams } from "react-router";
import { IngredientDetails } from "../../components";
import { fetchData } from "../../services/reducers/listIngredientsSlice";

export const Ingredients = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const data = useAppSelector(
    (state) => state.listIngredientsSlice.ingredients
  );
  const itemIngredient = useMemo(
    () =>
      data?.filter((item) => {
        if (item._id === params.id) {
          return item;
        }
      }),
    [data, params.id]
  );

  useEffect(() => {
    if (sessionStorage.getItem("test") === "1") {
      navigate("/", { state: { id: params.id } });
    }
    // dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <IngredientDetails item={itemIngredient?.[0]} />
    </div>
  );
};
