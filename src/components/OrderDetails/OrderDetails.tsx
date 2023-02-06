import styles from "./style.module.css";
import {Button,} from "@ya.praktikum/react-developer-burger-ui-components";
import Subtract from "../../images/Subtract.svg";
import {FC} from "react";

interface IOrderDetails {
  openOrder: () => void;
  price: number
}

export const OrderDetails: FC<IOrderDetails> = ({openOrder, price}) => {
  return (
    <div className={styles.wrap}>
      <p className="text text_type_digits-medium mr-2">{price}</p>
      <div className={styles.icon}>
        <img src={Subtract} alt={'Subtract'} />
      </div>
      <div className={styles.button}>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={openOrder}
        >
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};
