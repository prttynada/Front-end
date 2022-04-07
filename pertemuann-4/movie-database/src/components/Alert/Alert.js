import styles from "./Alert.module.css";

function Alert(props) {
    return(
        <div>
            <span className={styles.alert}>{props.children}</span>
        </div>
    );
}

export default Alert;