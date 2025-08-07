import styles from './Card.module.scss';
export const CardText = ({ text }) => {
	return (
		<div className={styles.cardtext}>
			<p>{text}</p>
		</div>
	);
};
