import Error from '../Error';
import {
	CreditCardIcon,
	CalendarDaysIcon,
	LockClosedIcon
} from '@heroicons/react/24/outline';

const iconClassName =
	'absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6';

let whichIcon;

const CardField = ({ children, label, error, forId }) => {
	if (label === 'Card number') {
		whichIcon = <CreditCardIcon className={iconClassName} />;
	} else if (label === 'Expire date') {
		whichIcon = <CalendarDaysIcon className={iconClassName} />;
	} else {
		whichIcon = <LockClosedIcon className={iconClassName} />;
	}

	return (
		<>
			<label htmlFor={forId} className="relative flex-1 flex flex-col">
				<span className="mb-1">{label}</span>
				{children}
				{whichIcon}
			</label>
			{error && <Error message={error.message} />}
		</>
	);
};

export default CardField;
