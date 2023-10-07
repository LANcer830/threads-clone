import { useMemo } from "react";
import styles from "./hotel-container2.module.css";

const HotelContainer2 = ({
  roomDescription,
  roomType,
  roomName,
  roomPrice,
  roomReviews,
  roomRating,
  roomDimensions,
  propWidth,
  propRight,
}) => {
  const vectorIconStyle = useMemo(() => {
    return {
      width: propWidth,
      right: propRight,
    };
  }, [propWidth, propRight]);

  return (
    <div className={styles.hotelCard2}>
      <a className={styles.hotelCard}>
        <img
          className={styles.unsplashtsn8bpopveoIcon}
          alt=""
          src={roomDescription}
        />
        <div className={styles.stayDetails}>
          <div className={styles.storyBeachfrontSuiteParent}>
            <div className={styles.storyBeachfrontSuite}>{roomType}</div>
            <b className={styles.discoveryShores}>{roomName}</b>
            <div className={styles.night}>{roomPrice}</div>
          </div>
        </div>
        <div className={styles.rating}>
          <div className={styles.reviews}>{roomReviews}</div>
          <div className={styles.parent}>
            <div className={styles.div}>{roomRating}</div>
            <img
              className={styles.vectorIcon}
              alt=""
              src={roomDimensions}
              style={vectorIconStyle}
            />
          </div>
        </div>
        <button className={styles.moreDetailsButton}>
          <div className={styles.button}>More details</div>
        </button>
      </a>
    </div>
  );
};

export default HotelContainer2;
