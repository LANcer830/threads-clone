import ThreadInput from "./thread-input";
import Thread from "./thread";
import styles from "./feed.module.css";

const Feed = () => {
  return (
    <div className={styles.feed}>
      <ThreadInput />
      <div className={styles.thread}>
        <Thread
          authorImage="/avatar1.svg"
          threadContent="I’ve been exploring ways of setting up variables in Figma if you have two different sets of global colours for light and dark themes with multiple brands. If you want to learn more about it, DM me, please"
          likes="7 Likes"
          username="aura"
          timeSpentSincePublished="2min"
        />
      </div>
      <div className={styles.thread}>
        <Thread
          authorImage="/avatar2.svg"
          threadContent={`guys, just see that now we have a "Save for Later" I've been waiting for this so much`}
          likes="2 Likes"
          username="aura"
          timeSpentSincePublished="2min"
        />
      </div>
      <div className={styles.thread}>
        <Thread
          authorImage="/avatar3.svg"
          threadContent="Hold onto your seats, folks! The new iPhone is coming in hot, ready to rock our world! Imagine the stunning photos and videos I'll capture with this beauty! 📸💥 #BringItOnNewiPhone #BeyondExcited"
          likes="16 Likes"
          username="aura"
          timeSpentSincePublished="2min"
        />
      </div>
      <div className={styles.thread}>
        <div className={styles.thread4}>
          <div className={styles.thread5}>
            <img className={styles.avatarIcon} alt="" src="/avatar4.svg" />
          </div>
          <div className={styles.infosActions}>
            <div className={styles.info}>
              <div className={styles.headingInfos}>
                <div className={styles.username}>aura</div>
                <div className={styles.rightInfos}>
                  <div className={styles.min}>2min</div>
                  <div className={styles.dots}>
                    <div className={styles.dotsChild} />
                    <div className={styles.dotsChild} />
                    <div className={styles.dotsChild} />
                  </div>
                </div>
              </div>
              <div className={styles.iveBeenExploring}>
                I’ve been exploring ways of setting up variables in Figma if you
                have two different sets of global colours for light and dark
                themes with multiple brands. If you want to learn more about it,
                DM me, please
              </div>
            </div>
            <div className={styles.actions}>
              <img className={styles.likeIcon} alt="" src="/like.svg" />
              <img className={styles.likeIcon} alt="" src="/comment.svg" />
              <img className={styles.likeIcon} alt="" src="/repost.svg" />
              <img className={styles.likeIcon} alt="" src="/send1.svg" />
            </div>
            <div className={styles.reactions}>
              <div className={styles.likes}>7 Likes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
