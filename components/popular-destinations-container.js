import TripContainer from "./trip-container";
import styles from "./popular-destinations-container.module.css";

const PopularDestinationsContainer = () => {
  return (
    <div className={styles.popDestinationsMain}>
      <div className={styles.destinationsTitles}>
        <div className={styles.titleContainer}>
          <b className={styles.planYourNext}>Plan your next trip</b>
          <b className={styles.mostPopularDestinations}>
            Most Popular Destinations
          </b>
        </div>
        <a className={styles.viewAllTop}>
          <div className={styles.viewAllDestinations}>
            View all destinations
          </div>
          <img className={styles.arrowRightIcon} alt="" src="/arrowright.svg" />
        </a>
      </div>
      <div className={styles.cardsContainer}>
        <TripContainer
          unsplashnnzkZNYWHaU="/unsplashnnzkznywhau@2x.png"
          paris="Paris"
          prop="$699"
        />
        <TripContainer
          unsplashnnzkZNYWHaU="/unsplashyc8qqp50bda@2x.png"
          paris="Greece"
          prop="$1079"
          propWidth="74.7px"
          propWidth1="74.01px"
          propLeft="35.43px"
        />
        <TripContainer
          unsplashnnzkZNYWHaU="/unsplashltnpejwdsay@2x.png"
          paris="Norway"
          prop="$895"
          propWidth="67.97px"
          propWidth1="67.97px"
          propLeft="28.7px"
        />
        <TripContainer
          unsplashnnzkZNYWHaU="/unsplashm0oiyn5u8zm@2x.png"
          paris="Tuscany"
          prop="$1245"
          propWidth="75.22px"
          propWidth1="75.22px"
          propLeft="35.95px"
        />
      </div>
      <div className={styles.viewAllBottom}>
        <div className={styles.viewAllDestinations1}>View all destinations</div>
        <img className={styles.arrowRightIcon} alt="" src="/arrowright1.svg" />
      </div>
    </div>
  );
};

export default PopularDestinationsContainer;
