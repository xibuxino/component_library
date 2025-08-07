import styles from './Card.module.scss';
import { CloudUpload } from './icons/index';

export const CardIcon = ({ icon }) => {
	return <div className={styles.icon}>{icon ? icon : <CloudUpload />}</div>;
};
