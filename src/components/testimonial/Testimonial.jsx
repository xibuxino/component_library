import styles from './Testimonial.module.scss';
import clsx from 'clsx';

import {
	TestimonialCompany,
	TestimonialLogo,
	TestimonialName,
	TestimonialPhoto,
	TestimonialText,
	TestimonialContent,
} from './index';

export const Testimonial = ({
	photo = '',
	text,
	name,
	company,
	role,
	logo,
	theme,
}) => {
	return (
		<div className={clsx(styles.testimonial, styles[theme])}>
			<div className={styles.fullcontent}>
				<TestimonialPhoto photo={photo} />
				<TestimonialContent className={clsx(photo && styles.contentWithPhoto)}>
					<TestimonialLogo logo={logo} />
					<TestimonialText className={clsx(logo && styles.textWithLogo)}>
						{text}
					</TestimonialText>
					<TestimonialName>{name}</TestimonialName>
					<TestimonialCompany company={company} role={role} />
				</TestimonialContent>
			</div>
		</div>
	);
};
