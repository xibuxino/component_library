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
	theme = 'light',
}) => {
	return (
		<div
			className={clsx(
				styles.testimonial,
				styles[theme],
				photo && styles.hasPhoto
			)}>
			<div className={clsx(styles.container, photo && styles.hasPhoto)}>
				<TestimonialPhoto photo={photo} />
				<TestimonialContent className={clsx(photo && styles.hasPhoto)}>
					<TestimonialLogo logo={logo} />
					<TestimonialText className={clsx(logo && styles.hasLogo)}>
						{text}
					</TestimonialText>
					<TestimonialName>{name}</TestimonialName>
					<TestimonialCompany company={company} role={role} />
				</TestimonialContent>
			</div>
		</div>
	);
};
