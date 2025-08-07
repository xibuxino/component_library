import styles from './Card.module.scss';
export const CardTitle = ({ title }) => {
	return <h3 className={styles.cardtitle}>{title}</h3>;
};
