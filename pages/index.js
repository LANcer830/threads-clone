import Navbar from "../components/Navbar/navbar";
import UserInfo from "../components/UserInfoCol/user-info";
import Feed from "../components/Feed/feed";
import TrendingTopic from "../components/Trending/trending-topic";
import styles from "./index.module.css";

const Content = () => {
  return (
    <div className={styles.content}>
      <main className={styles.feed}>
        <Navbar />
        <section className={styles.contentcontainer}>
          <UserInfo />
          <Feed />
          <TrendingTopic />
        </section>
      </main>
    </div>
  );
};

export default Content;
