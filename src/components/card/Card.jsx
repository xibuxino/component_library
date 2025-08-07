import styles from './Card.module.scss';
import clsx from 'clsx';
import { CardIcon } from './CardIcon';
import { CardTitle } from './CardTitle';
import { CardText } from './CardText';

export const Card = ({ icon, title, text, size = 'md' }) => {
	return (
		<div className={clsx(styles.card, styles[size])}>
			<CardIcon icon={icon} />
			<CardTitle title={title} />
			<CardText text={text} />
		</div>
	);
};
