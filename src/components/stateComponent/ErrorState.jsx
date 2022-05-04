import styles from "./State.module.css";

function ErrorState( { message }) {
    const refreshPage = () => {
        window.location.reload(false);
    }
    return (
        <div className={styles.stateArea}>
            <h3>Oops, something went wrong!</h3>
            <p>{message}</p>
            <button className={styles.btnReload} onClick={refreshPage}>Click to reload!</button>
        </div>
    );
}

export default ErrorState;