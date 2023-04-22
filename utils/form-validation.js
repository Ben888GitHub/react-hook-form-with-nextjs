import * as yup from 'yup';

export const schema = yup.object({
	username: yup
		.string()
		.required('Username is required')
		.min(3, 'Username must be at least 3 letters long')
		.max(20, 'Username must not be 20 letters long'),
	email: yup
		.string()
		.email('Please enter a valid email address')
		// .matches(/.+@.+/, 'Please enter a valid email address')
		.max(100, 'Email is too long')
		.required('Email is required'),
	card_number: yup
		.string()
		.required('Credit Card Number is required')
		.matches(/^[0-9]{16}$/, 'Credit Card Number must be 16 digits'),
	expire_date: yup
		.string()
		.required('Expire date is required')
		.matches(/^[0-9]{4}$/, 'Expire date must be MM/YY format'),
	cvv: yup
		.string()
		.required('CVV is required')
		.matches(/^[0-9]{3,4}$/, 'Please enter a valid CVV'),
	dob: yup
		.string()
		.required('DOB is required')
		.typeError('Invalid date')
		.matches(
			/^([0-9]{4}[-/]?((0[13-9]|1[012])[-/]?(0[1-9]|[12][0-9]|30)|(0[13578]|1[02])[-/]?31|02[-/]?(0[1-9]|1[0-9]|2[0-8]))|([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00)[-/]?02[-/]?29)$/,
			'Date of Birth must be a valid date in the format YYYY-MM-DD'
		),
	occupation: yup.string().required('Please select occupation'),
	dev: yup.string().required('Are you a Developer?'),
	password: yup
		.string()
		.required('Please enter your password')
		.min(8, 'Password must be at least 8 characters long')
		.max(25, 'Password must be at most 25 characters long')
		.matches(
			/(?=.*[a-z])(?=.*[A-Z])\w+/,
			'Password should contain at least one uppercase and lowercase character'
		)
		.matches(/\d/, 'Password should contain at least one number')
		.matches(
			/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/,
			'Password should contain at least one special character'
		),
	confirm_password: yup
		.string()
		.required('Please confirm your password')
		.oneOf([yup.ref('password'), null], 'Password must match'),
	terms_and_conditions: yup
		.bool()
		.oneOf([true], 'You need to accept the terms and conditions')
});
