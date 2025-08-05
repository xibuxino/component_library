import styles from './Banner.module.scss';

export const BannerText = ({ children }) => {
	return <div className={styles.bannertext}>{children}</div>;
};
