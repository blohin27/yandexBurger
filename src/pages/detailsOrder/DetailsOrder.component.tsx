import React, { FC } from "react";
import styles from "./styles.module.css";
import classNames from "classnames";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";

interface MyComponentProps {
  style?: React.CSSProperties;
  modal?: boolean;
}

export const DetailsOrder: FC<MyComponentProps> = ({ modal = false }) => {
  if (modal) {
    return <ContentForModal />;
  }
  if (!modal) {
    return (
      <div className={classNames(styles.appContent)}>
        <div className={classNames(styles.wrap)}>
          <div className={classNames(styles.content, "mt-30")}>
            <div
              className={classNames(
                styles.numberBlock,
                "text text_type_digits-default"
              )}
            >
              #034535
            </div>
            <div
              className={classNames(
                styles.title,
                "text text_type_main-medium",
                "mt-10"
              )}
            >
              {"Краторный фалленианский бургер "}
            </div>
            <div
              className={classNames(
                styles.status,
                "text text_type_main-default mt-3"
              )}
            >
              Выполнен
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
              <div className={classNames(styles.structure, "mb-1 mt-3 pr-6")}>
                {/*иконка*/}
                <div className={styles.leftBlock}>
                  <div className={classNames(styles.imageStyle, "mr-3")}>
                    <img
                      className={styles.imgStyle}
                      src={
                        "https://code.s3.yandex.net/react/code/bun-02-mobile.png"
                      }
                    ></img>
                  </div>
                  {/*название*/}
                  <div
                    className={classNames(
                      styles.nameBurger,
                      "text text_type_main-default"
                    )}
                  >
                    {"Краторный фалленианский бургер "}
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
                    {"2"} x
                  </div>
                  {/*цена элементов*/}
                  <div
                    className={classNames(
                      styles.Price,
                      "text text text_type_digits-default mr-2 ml-2"
                    )}
                  >
                    1823
                  </div>

                  <CurrencyIcon type="primary" />
                </div>
              </div>
              <div className={classNames(styles.structure, "mb-1 mt-3 pr-6")}>
                {/*иконка*/}
                <div className={styles.leftBlock}>
                  <div className={classNames(styles.imageStyle, "mr-3")}>
                    <img
                      className={styles.imgStyle}
                      src={
                        "https://code.s3.yandex.net/react/code/bun-02-mobile.png"
                      }
                    ></img>
                  </div>
                  {/*название*/}
                  <div
                    className={classNames(
                      styles.nameBurger,
                      "text text_type_main-default"
                    )}
                  >
                    {"Краторный фалленианский бургер "}
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
                    {"2"} x
                  </div>
                  {/*цена элементов*/}
                  <div
                    className={classNames(
                      styles.Price,
                      "text text text_type_digits-default mr-2 ml-2"
                    )}
                  >
                    1823
                  </div>

                  <CurrencyIcon type="primary" />
                </div>
              </div>
              <div className={classNames(styles.structure, "mb-1 mt-3 pr-6")}>
                {/*иконка*/}
                <div className={styles.leftBlock}>
                  <div className={classNames(styles.imageStyle, "mr-3")}>
                    <img
                      className={styles.imgStyle}
                      src={
                        "https://code.s3.yandex.net/react/code/bun-02-mobile.png"
                      }
                    ></img>
                  </div>
                  {/*название*/}
                  <div
                    className={classNames(
                      styles.nameBurger,
                      "text text_type_main-default"
                    )}
                  >
                    {"Краторный фалленианский бургер "}
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
                    {"2"} x
                  </div>
                  {/*цена элементов*/}
                  <div
                    className={classNames(
                      styles.Price,
                      "text text text_type_digits-default mr-2 ml-2"
                    )}
                  >
                    1823
                  </div>

                  <CurrencyIcon type="primary" />
                </div>
              </div>
              <div className={classNames(styles.structure, "mb-1 mt-3 pr-6")}>
                {/*иконка*/}
                <div className={styles.leftBlock}>
                  <div className={classNames(styles.imageStyle, "mr-3")}>
                    <img
                      className={styles.imgStyle}
                      src={
                        "https://code.s3.yandex.net/react/code/bun-02-mobile.png"
                      }
                    ></img>
                  </div>
                  {/*название*/}
                  <div
                    className={classNames(
                      styles.nameBurger,
                      "text text_type_main-default"
                    )}
                  >
                    {"Краторный фалленианский бургер "}
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
                    {"2"} x
                  </div>
                  {/*цена элементов*/}
                  <div
                    className={classNames(
                      styles.Price,
                      "text text text_type_digits-default mr-2 ml-2"
                    )}
                  >
                    1823
                  </div>

                  <CurrencyIcon type="primary" />
                </div>
              </div>
              <div className={classNames(styles.structure, "mb-1 mt-3 pr-6")}>
                {/*иконка*/}
                <div className={styles.leftBlock}>
                  <div className={classNames(styles.imageStyle, "mr-3")}>
                    <img
                      className={styles.imgStyle}
                      src={
                        "https://code.s3.yandex.net/react/code/bun-02-mobile.png"
                      }
                    ></img>
                  </div>
                  {/*название*/}
                  <div
                    className={classNames(
                      styles.nameBurger,
                      "text text_type_main-default"
                    )}
                  >
                    {"Краторный фалленианский бургер "}
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
                    {"2"} x
                  </div>
                  {/*цена элементов*/}
                  <div
                    className={classNames(
                      styles.Price,
                      "text text text_type_digits-default mr-2 ml-2"
                    )}
                  >
                    1823
                  </div>

                  <CurrencyIcon type="primary" />
                </div>
              </div>
              <div className={classNames(styles.structure, "mb-1 mt-3 pr-6")}>
                {/*иконка*/}
                <div className={styles.leftBlock}>
                  <div className={classNames(styles.imageStyle, "mr-3")}>
                    <img
                      className={styles.imgStyle}
                      src={
                        "https://code.s3.yandex.net/react/code/bun-02-mobile.png"
                      }
                    ></img>
                  </div>
                  {/*название*/}
                  <div
                    className={classNames(
                      styles.nameBurger,
                      "text text_type_main-default"
                    )}
                  >
                    {"Краторный фалленианский бургер "}
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
                    {"2"} x
                  </div>
                  {/*цена элементов*/}
                  <div
                    className={classNames(
                      styles.Price,
                      "text text text_type_digits-default mr-2 ml-2"
                    )}
                  >
                    1823
                  </div>

                  <CurrencyIcon type="primary" />
                </div>
              </div>
              <div className={classNames(styles.structure, "mb-1 mt-3 pr-6")}>
                {/*иконка*/}
                <div className={styles.leftBlock}>
                  <div className={classNames(styles.imageStyle, "mr-3")}>
                    <img
                      className={styles.imgStyle}
                      src={
                        "https://code.s3.yandex.net/react/code/bun-02-mobile.png"
                      }
                    ></img>
                  </div>
                  {/*название*/}
                  <div
                    className={classNames(
                      styles.nameBurger,
                      "text text_type_main-default"
                    )}
                  >
                    {"Краторный фалленианский бургер "}
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
                    {"2"} x
                  </div>
                  {/*цена элементов*/}
                  <div
                    className={classNames(
                      styles.Price,
                      "text text text_type_digits-default mr-2 ml-2"
                    )}
                  >
                    1823
                  </div>

                  <CurrencyIcon type="primary" />
                </div>
              </div>
            </div>

            {/*дата создания и стоимость*/}
            <div className={classNames(styles.numberOfDate, "mt-10")}>
              <div
                className={classNames(
                  styles.dateBlock,
                  "text text_type_main-default text_color_inactive"
                )}
              >
                <FormattedDate date={new Date("2023-07-30T03:49:52.406Z")} />
              </div>
              <div className={classNames(styles.priceBlock)}>
                <div
                  className={classNames(
                    styles.price,
                    "text text_type_digits-default",
                    "mr-2"
                  )}
                >
                  12342
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

const ContentForModal: FC = () => {
  return (
    <div className={classNames(styles.contentModal)}>
      <div
        className={classNames(
          styles.title,
          "text text_type_main-medium",
          "mt-10"
        )}
      >
        {"Краторный фалленианский бургер "}
      </div>
      <div
        className={classNames(
          styles.status,
          "text text_type_main-default mt-3"
        )}
      >
        Выполнен
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
        <div className={classNames(styles.structure, "mb-1 mt-3 pr-6")}>
          {/*иконка*/}
          <div className={styles.leftBlock}>
            <div className={classNames(styles.imageStyle, "mr-3")}>
              <img
                className={styles.imgStyle}
                src={"https://code.s3.yandex.net/react/code/bun-02-mobile.png"}
              ></img>
            </div>
            {/*название*/}
            <div
              className={classNames(
                styles.nameBurger,
                "text text_type_main-default"
              )}
            >
              {"Краторный фалленианский бургер "}
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
              {"2"} x
            </div>
            {/*цена элементов*/}
            <div
              className={classNames(
                styles.Price,
                "text text text_type_digits-default mr-2 ml-2"
              )}
            >
              1823
            </div>

            <CurrencyIcon type="primary" />
          </div>
        </div>
        <div className={classNames(styles.structure, "mb-1 mt-3 pr-6")}>
          {/*иконка*/}
          <div className={styles.leftBlock}>
            <div className={classNames(styles.imageStyle, "mr-3")}>
              <img
                className={styles.imgStyle}
                src={"https://code.s3.yandex.net/react/code/bun-02-mobile.png"}
              ></img>
            </div>
            {/*название*/}
            <div
              className={classNames(
                styles.nameBurger,
                "text text_type_main-default"
              )}
            >
              {"Краторный фалленианский бургер "}
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
              {"2"} x
            </div>
            {/*цена элементов*/}
            <div
              className={classNames(
                styles.Price,
                "text text text_type_digits-default mr-2 ml-2"
              )}
            >
              1823
            </div>

            <CurrencyIcon type="primary" />
          </div>
        </div>
        {/*<div className={classNames(styles.structure, "mb-1 mt-3 pr-6")}>*/}
        {/*  /!*иконка*!/*/}
        {/*  <div className={styles.leftBlock}>*/}
        {/*    <div className={classNames(styles.imageStyle, "mr-3")}>*/}
        {/*      <img*/}
        {/*        className={styles.imgStyle}*/}
        {/*        src={"https://code.s3.yandex.net/react/code/bun-02-mobile.png"}*/}
        {/*      ></img>*/}
        {/*    </div>*/}
        {/*    /!*название*!/*/}
        {/*    <div*/}
        {/*      className={classNames(*/}
        {/*        styles.nameBurger,*/}
        {/*        "text text_type_main-default"*/}
        {/*      )}*/}
        {/*    >*/}
        {/*      {"Краторный фалленианский бургер "}*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  /!*кол-во элементов *!/*/}
        {/*  <div className={styles.rightBlock}>*/}
        {/*    <div*/}
        {/*      className={classNames(*/}
        {/*        styles.countIngred,*/}
        {/*        "text text text_type_digits-default"*/}
        {/*      )}*/}
        {/*    >*/}
        {/*      {"2"} x*/}
        {/*    </div>*/}
        {/*    /!*цена элементов*!/*/}
        {/*    <div*/}
        {/*      className={classNames(*/}
        {/*        styles.Price,*/}
        {/*        "text text text_type_digits-default mr-2 ml-2"*/}
        {/*      )}*/}
        {/*    >*/}
        {/*      1823*/}
        {/*    </div>*/}

        {/*    <CurrencyIcon type="primary" />*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div className={classNames(styles.structure, "mb-1 mt-3 pr-6")}>*/}
        {/*  /!*иконка*!/*/}
        {/*  <div className={styles.leftBlock}>*/}
        {/*    <div className={classNames(styles.imageStyle, "mr-3")}>*/}
        {/*      <img*/}
        {/*        className={styles.imgStyle}*/}
        {/*        src={"https://code.s3.yandex.net/react/code/bun-02-mobile.png"}*/}
        {/*      ></img>*/}
        {/*    </div>*/}
        {/*    /!*название*!/*/}
        {/*    <div*/}
        {/*      className={classNames(*/}
        {/*        styles.nameBurger,*/}
        {/*        "text text_type_main-default"*/}
        {/*      )}*/}
        {/*    >*/}
        {/*      {"Краторный фалленианский бургер "}*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  /!*кол-во элементов *!/*/}
        {/*  <div className={styles.rightBlock}>*/}
        {/*    <div*/}
        {/*      className={classNames(*/}
        {/*        styles.countIngred,*/}
        {/*        "text text text_type_digits-default"*/}
        {/*      )}*/}
        {/*    >*/}
        {/*      {"2"} x*/}
        {/*    </div>*/}
        {/*    /!*цена элементов*!/*/}
        {/*    <div*/}
        {/*      className={classNames(*/}
        {/*        styles.Price,*/}
        {/*        "text text text_type_digits-default mr-2 ml-2"*/}
        {/*      )}*/}
        {/*    >*/}
        {/*      1823*/}
        {/*    </div>*/}

        {/*    <CurrencyIcon type="primary" />*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div className={classNames(styles.structure, "mb-1 mt-3 pr-6")}>*/}
        {/*  /!*иконка*!/*/}
        {/*  <div className={styles.leftBlock}>*/}
        {/*    <div className={classNames(styles.imageStyle, "mr-3")}>*/}
        {/*      <img*/}
        {/*        className={styles.imgStyle}*/}
        {/*        src={"https://code.s3.yandex.net/react/code/bun-02-mobile.png"}*/}
        {/*      ></img>*/}
        {/*    </div>*/}
        {/*    /!*название*!/*/}
        {/*    <div*/}
        {/*      className={classNames(*/}
        {/*        styles.nameBurger,*/}
        {/*        "text text_type_main-default"*/}
        {/*      )}*/}
        {/*    >*/}
        {/*      {"Краторный фалленианский бургер "}*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  /!*кол-во элементов *!/*/}
        {/*  <div className={styles.rightBlock}>*/}
        {/*    <div*/}
        {/*      className={classNames(*/}
        {/*        styles.countIngred,*/}
        {/*        "text text text_type_digits-default"*/}
        {/*      )}*/}
        {/*    >*/}
        {/*      {"2"} x*/}
        {/*    </div>*/}
        {/*    /!*цена элементов*!/*/}
        {/*    <div*/}
        {/*      className={classNames(*/}
        {/*        styles.Price,*/}
        {/*        "text text text_type_digits-default mr-2 ml-2"*/}
        {/*      )}*/}
        {/*    >*/}
        {/*      1823*/}
        {/*    </div>*/}

        {/*    <CurrencyIcon type="primary" />*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div className={classNames(styles.structure, "mb-1 mt-3 pr-6")}>*/}
        {/*  /!*иконка*!/*/}
        {/*  <div className={styles.leftBlock}>*/}
        {/*    <div className={classNames(styles.imageStyle, "mr-3")}>*/}
        {/*      <img*/}
        {/*        className={styles.imgStyle}*/}
        {/*        src={"https://code.s3.yandex.net/react/code/bun-02-mobile.png"}*/}
        {/*      ></img>*/}
        {/*    </div>*/}
        {/*    /!*название*!/*/}
        {/*    <div*/}
        {/*      className={classNames(*/}
        {/*        styles.nameBurger,*/}
        {/*        "text text_type_main-default"*/}
        {/*      )}*/}
        {/*    >*/}
        {/*      {"Краторный фалленианский бургер "}*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  /!*кол-во элементов *!/*/}
        {/*  <div className={styles.rightBlock}>*/}
        {/*    <div*/}
        {/*      className={classNames(*/}
        {/*        styles.countIngred,*/}
        {/*        "text text text_type_digits-default"*/}
        {/*      )}*/}
        {/*    >*/}
        {/*      {"2"} x*/}
        {/*    </div>*/}
        {/*    /!*цена элементов*!/*/}
        {/*    <div*/}
        {/*      className={classNames(*/}
        {/*        styles.Price,*/}
        {/*        "text text text_type_digits-default mr-2 ml-2"*/}
        {/*      )}*/}
        {/*    >*/}
        {/*      1823*/}
        {/*    </div>*/}

        {/*    <CurrencyIcon type="primary" />*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div className={classNames(styles.structure, "mb-1 mt-3 pr-6")}>*/}
        {/*  /!*иконка*!/*/}
        {/*  <div className={styles.leftBlock}>*/}
        {/*    <div className={classNames(styles.imageStyle, "mr-3")}>*/}
        {/*      <img*/}
        {/*        className={styles.imgStyle}*/}
        {/*        src={"https://code.s3.yandex.net/react/code/bun-02-mobile.png"}*/}
        {/*      ></img>*/}
        {/*    </div>*/}
        {/*    /!*название*!/*/}
        {/*    <div*/}
        {/*      className={classNames(*/}
        {/*        styles.nameBurger,*/}
        {/*        "text text_type_main-default"*/}
        {/*      )}*/}
        {/*    >*/}
        {/*      {"Краторный фалленианский бургер "}*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  /!*кол-во элементов *!/*/}
        {/*  <div className={styles.rightBlock}>*/}
        {/*    <div*/}
        {/*      className={classNames(*/}
        {/*        styles.countIngred,*/}
        {/*        "text text text_type_digits-default"*/}
        {/*      )}*/}
        {/*    >*/}
        {/*      {"2"} x*/}
        {/*    </div>*/}
        {/*    /!*цена элементов*!/*/}
        {/*    <div*/}
        {/*      className={classNames(*/}
        {/*        styles.Price,*/}
        {/*        "text text text_type_digits-default mr-2 ml-2"*/}
        {/*      )}*/}
        {/*    >*/}
        {/*      1823*/}
        {/*    </div>*/}

        {/*    <CurrencyIcon type="primary" />*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>

      {/*дата создания и стоимость*/}
      <div className={classNames(styles.numberOfDate, "mt-10")}>
        <div
          className={classNames(
            styles.dateBlock,
            "text text_type_main-default text_color_inactive"
          )}
        >
          <FormattedDate date={new Date("2023-07-30T03:49:52.406Z")} />
        </div>
        <div className={classNames(styles.priceBlock)}>
          <div
            className={classNames(
              styles.price,
              "text text_type_digits-default",
              "mr-2"
            )}
          >
            12342
          </div>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};
