import clsx from 'clsx';
export const ToastWrapper = ({ children, className, tailClassName }) => {
	return (
		<div className={clsx(className, 'm-4')}>
			<svg
				className={tailClassName}
				viewBox='0 0 16 8'
				xmlns='http://www.w3.org/2000/svg'>
				<polygon points='0,0 16,0 8,8' fill='currentColor' />
			</svg>

			{children}
		</div>
	);
};
