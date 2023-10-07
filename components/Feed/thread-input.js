import styles from "./thread-input.module.css";

const ThreadInput = () => {
  return (
    <div className={styles.threadinput}>
      <div className={styles.thread}>
        <img className={styles.avatarIcon} alt="" src="/avatar.svg" />
      </div>
      <div className={styles.infosActions}>
        <input
          className={styles.infos}
          placeholder="Share something cool today"
          type="text"
        />
        <div className={styles.actions}>
          <div className={styles.actions1}>
            <img className={styles.paperclipIcon} alt="" src="/paperclip.svg" />
          </div>
          <button className={styles.actions2}>
            <img className={styles.sendIcon} alt="" src="/send.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThreadInput;
