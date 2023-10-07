import HotelContainer1 from "./hotel-container1";
import HotelContainer2 from "./hotel-container2";
import styles from "./popular-stays.module.css";

const PopularStays = () => {
  return (
    <form className={styles.popularStays}>
      <div className={styles.popularStaysHeader}>
        <div className={styles.popularStaysTitle}>
          <b className={styles.popularStays1}>Popular Stays</b>
        </div>
        <a className={styles.viewAllStaysParent}>
          <div className={styles.viewAllStays}>View all stays</div>
          <img
            className={styles.arrowRightIcon}
            alt=""
            src="/arrowright4.svg"
          />
        </a>
      </div>
      <div className={styles.hotelCards}>
        <HotelContainer1
          roomDimensions="/unsplashhhrfsdwxxus@2x.png"
          roomType="Entire bungalow"
          hotelName="Matterhorn Suites"
          roomPrice="$575/night"
          roomReviews="/video1.svg"
          roomReviewCount="(60 reviews)"
          roomRating="4.9"
          roomId="/vector3.svg"
        />
        <HotelContainer2
          roomDescription="/unsplashtsn8bpopveo@2x.png"
          roomType="2-Story beachfront suite"
          roomName="Discovery Shores"
          roomPrice="$360/night"
          roomReviews="(116 reviews)"
          roomRating="4.8"
          roomDimensions="/vector4.svg"
        />
        <HotelContainer2
          roomDescription="/unsplashrlwe8f8anoc@2x.png"
          roomType="Single deluxe hut"
          roomName="Arctic Hut "
          roomPrice="$420/night"
          roomReviews="(78 reviews)"
          roomRating="4.7"
          roomDimensions="/vector5.svg"
          propWidth="37.58%"
          propRight="62.42%"
        />
        <HotelContainer1
          roomDimensions="/unsplashyqrybvxug5q@2x.png"
          roomType="Deluxe King Room"
          hotelName="Lake Louise Inn"
          roomPrice="$244/night"
          roomReviews="/video2.svg"
          roomReviewCount="(63 reviews)"
          roomRating="4.6"
          roomId="/vector6.svg"
        />
      </div>
      <div className={styles.viewAllStaysGroup}>
        <div className={styles.viewAllStays1}>View all stays</div>
        <img className={styles.arrowRightIcon} alt="" src="/arrowright5.svg" />
      </div>
    </form>
  );
};

export default PopularStays;
