
export const handleRegister = async (values, {setSubmitting}) => {
	console.log('Registration form submitted')
	setSubmitting(true)
	const {name, email, password2} = values
	try {
		//TODO: Make request to backend
	} catch (err) {
		//TODO:Handle "email already in use" error
		console.log('Registration Error', err)
		setSubmitting(false)
	}
}


export const handleLogin = async ({email, password}, {setSubmitting, resetForm}) => {
	console.log('Login form submitted')
	setSubmitting(true)
	try {
		//TODO: make request to backend
	} catch (err) {
		setSubmitting(false)
		resetForm() //TODO: Is this necessary?
	}
}
