import { useMemo } from "react";
import styles from "./trip-container.module.css";

const TripContainer = ({
  unsplashnnzkZNYWHaU,
  paris,
  prop,
  propWidth,
  propWidth1,
  propLeft,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const divStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const fromStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <button className={styles.card1}>
      <div className={styles.unsplashnnzkznywhauParent}>
        <img
          className={styles.unsplashnnzkznywhauIcon}
          alt=""
          src={unsplashnnzkZNYWHaU}
        />
        <div className={styles.destinationDetails}>
          <b className={styles.paris}>{paris}</b>
          <div className={styles.parent} style={groupDivStyle}>
            <div className={styles.div} style={divStyle}>
              {prop}
            </div>
            <div className={styles.from} style={fromStyle}>
              from
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default TripContainer;
