import * as yup from 'yup'

export const loginValidation = yup.object({
	email: yup.string().email('Please enter a valid email address').required('Please enter your email'),
	password: yup.string().required('Please enter your password')
})

//TODO: Add regex .matchs() parameter for password strength

export const registerValidation = yup.object({
	name: yup
		.string()
		.min(2, 'Please enter a valid name')
		.required('Please enter your first and last name (ex. Jane Smith)'),
	email: yup
		.string()
		.lowercase()
		.email('Please enter a valid email address')
		.required('Please enter your email address'),
	password1: yup
		.string()
		.min(8, 'Password must have a minimum of 8 characters')
		.required('Please enter your password'),
	password2: yup
		.string()
		.oneOf([yup.ref('password1')], 'Passwords do not match')
		.required('Please confirm your password')
})
