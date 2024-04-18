import styles from "./adminCard.module.css";

export default function AdminCard() {
	return (
		<div className={styles.cardContainer}>
			<div className={styles.cardHeader}><h2>Card Header</h2></div>
			<div className={styles.cardBody}>Card Body</div>
		</div>
	);
}
