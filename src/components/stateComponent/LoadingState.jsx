import styles from "./State.module.css";

function LoadingState() {
  return (
    <div className={styles.stateArea}>
      <div className={styles.ldsRing}><div></div><div></div><div></div><div></div></div>
    </div>
  );
}

export default LoadingState;