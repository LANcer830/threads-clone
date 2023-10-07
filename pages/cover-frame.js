import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import SearchContainer from "../components/search-container";
import PopularDestinationsContainer from "../components/popular-destinations-container";
import RecommendedHolidaysContainer from "../components/recommended-holidays-container";
import PopularStays from "../components/popular-stays";
import VariantContainedSizeLarge from "../components/variant-contained-size-large";
import FormContainer from "../components/form-container";
import styles from "./cover-frame.module.css";

const CoverFrame = () => {
  return (
    <div className={styles.coverFrame}>
      <div className={styles.coverFrameChild} />
      <img className={styles.coverFrameItem} alt="" src="/group-16@2x.png" />
      <img className={styles.coverFrameInner} alt="" src="/group-17.svg" />
      <div className={styles.madeByTeam}>Made by Team Locofy</div>
      <div className={styles.travelWebsiteWrapper}>
        <div className={styles.travelWebsite}>Travel Website</div>
      </div>
      <div className={styles.homepage}>
        <div className={styles.heroSection}>
          <header className={styles.topHeader}>
            <div className={styles.topContainer}>
              <img
                className={styles.fickleflightLogoIcon}
                alt=""
                src="/fickleflight-logo.svg"
              />
              <div className={styles.navigationRight}>
                <div className={styles.navigationMenu}>
                  <div className={styles.explore}>Explore</div>
                  <div className={styles.search}>Search</div>
                  <div className={styles.hotels}>Hotels</div>
                  <div className={styles.offers}>Offers</div>
                </div>
                <div className={styles.accountSection}>
                  <img
                    className={styles.hamburgerMenuIcon}
                    alt=""
                    src="/notification.svg"
                  />
                  <img
                    className={styles.notificationBellIcon}
                    alt=""
                    src="/notification1.svg"
                  />
                  <img
                    className={styles.unsplashd1upkifd04aIcon}
                    alt=""
                    src="/top_avatar@2x.png"
                  />
                </div>
              </div>
            </div>
          </header>
          <SearchContainer />
        </div>
        <div className={styles.homeContents}>
          <div className={styles.upcomingFlightSection}>
            <b className={styles.upcomingFlight}>Upcoming Flight</b>
            <div className={styles.flightDetails}>
              <div className={styles.flightMainContainer}>
                <div className={styles.toAndFrom}>
                  <div className={styles.fromDetails}>
                    <b className={styles.sin}>SIN</b>
                    <div className={styles.singapore}>Singapore</div>
                  </div>
                  <div className={styles.duration}>
                    <b className={styles.h55m}>15H 55M</b>
                    <img
                      className={styles.durationChild}
                      alt=""
                      src="/group-171.svg"
                    />
                  </div>
                  <div className={styles.toDetails}>
                    <b className={styles.lax}>LAX</b>
                    <div className={styles.losAngeles}>Los Angeles</div>
                  </div>
                </div>
                <div className={styles.horizontalLine} />
                <div className={styles.departureDetails}>
                  <div className={styles.departsOn1}>
                    Departs on: 1 May, 08:00 AM
                  </div>
                  <div className={styles.daysToGoContainer}>
                    <b>4 days</b>
                    <span> to go</span>
                  </div>
                </div>
              </div>
              <div className={styles.lineSeparator} />
              <div className={styles.prepareMenu}>
                <div className={styles.prepareForYour}>
                  Prepare for your trip
                </div>
                <div className={styles.tripMenus}>
                  <button className={styles.hotel}>
                    <img
                      className={styles.hotelChild}
                      alt=""
                      src="/group-21.svg"
                    />
                    <div className={styles.hotel1}>Hotel</div>
                  </button>
                  <button className={styles.hotel}>
                    <div className={styles.hotelChild}>
                      <div className={styles.groupChild} />
                      <img
                        className={styles.groupIcon}
                        alt=""
                        src="/group.svg"
                      />
                    </div>
                    <div className={styles.attractions1}>Attractions</div>
                  </button>
                  <button className={styles.hotel}>
                    <img
                      className={styles.hotelChild}
                      alt=""
                      src="/group-211.svg"
                    />
                    <div className={styles.eats1}>Eats</div>
                  </button>
                  <button className={styles.hotel}>
                    <div className={styles.hotelChild}>
                      <div className={styles.groupItem} />
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                    <div className={styles.commute1}>Commute</div>
                  </button>
                  <button className={styles.hotel}>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.groupInner} />
                      <img
                        className={styles.vectorIcon1}
                        alt=""
                        src="/vector1.svg"
                      />
                    </div>
                    <div className={styles.taxi1}>Taxi</div>
                  </button>
                  <button className={styles.hotel}>
                    <div className={styles.hotelChild}>
                      <div className={styles.rectangleDiv} />
                      <img
                        className={styles.vectorIcon2}
                        alt=""
                        src="/vector2.svg"
                      />
                    </div>
                    <div className={styles.movies1}>Movies</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <PopularDestinationsContainer />
          <RecommendedHolidaysContainer />
          <PopularStays />
        </div>
        <div className={styles.footerSection}>
          <div className={styles.frameDiv}>
            <img
              className={styles.frameChild}
              alt=""
              src="/rectangle-186@2x.png"
            />
            <div className={styles.shareYourTravelsForm}>
              <div className={styles.formHeader}>
                <b className={styles.prepareForYour}>
                  subscribe to our newsletter
                </b>
                <b className={styles.formTitle}>Get weekly updates</b>
              </div>
              <div className={styles.form}>
                <div className={styles.formText}>
                  <div className={styles.fillInYour}>
                    Fill in your details to join the party!
                  </div>
                </div>
                <div className={styles.formFields}>
                  <div className={styles.formText}>
                    <TextField
                      className={styles.input}
                      color="primary"
                      label="Your name"
                      size="medium"
                      variant="outlined"
                      type="text"
                    />
                  </div>
                  <div className={styles.formText}>
                    <TextField
                      className={styles.input}
                      color="primary"
                      label="Email address"
                      size="medium"
                      variant="outlined"
                      type="text"
                    />
                  </div>
                </div>
                <button className={styles.button}>
                  <VariantContainedSizeLarge
                    button="submit"
                    variantContainedSizeLargeBoxSizing="border-box"
                    buttonColor="#fff"
                    buttonDisplay="inline-block"
                  />
                </button>
              </div>
            </div>
          </div>
          <FormContainer />
        </div>
      </div>
    </div>
  );
};

export default CoverFrame;
