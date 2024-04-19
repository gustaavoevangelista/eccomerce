import styles from "./adminCard.module.css";

export default function AdminCard(props) {
	return (
		<div className={styles.cardContainer}>
			<div className={styles.cardHeader}>
				<h2>{props.title}</h2>
			</div>
			<div
				className={
					styles.cardBody
				}>{`Total orders: ${props.subtitle}`}</div>
			<div
				className={
					styles.cardBody
				}>{`Total amount: ${props.body}`}</div>
		</div>
	);
}
