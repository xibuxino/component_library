import styles from './Card.module.scss';
export const CardText = ({ text }) => {
	return <p className={styles.cardtext}>{text}</p>;
};
