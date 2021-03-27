import {Formik, Form} from 'formik'
import AuthCard from '../../components/AuthCard/AuthCard'
import TextField from '../../components/Form/TextField'
import Button from '../../components/Button/Button'
import {Link} from 'react-router-dom'
import {registerValidation} from '../../validations/authValidation'
import {handleRegister} from '../../utils/handleAuth'
import './registerform.scss'



const initialValues = {
	name: '',
	email: '',
	password1: '',
	password2: ''
}


const RegisterForm = () => {
	return (
		<div className='register-form flex'>
			<AuthCard>
				<div className='form'>
					<Formik
						initialValues={initialValues}
						validationSchema={registerValidation}
						onSubmit={handleRegister}
					>
						{
							({dirty, isSubmitting, isValid}) => (
								<Form className='flex flex-column'>
									<h2>Register</h2>
									<TextField
										name='name'
										type='text'
										label='First and Last Name'
										autoComplete='name'
										required
										autoFocus
									/>
									<TextField
										name='email'
										type='email'
										label='Email'
										autoComplete='email'
										required
									/>
									<TextField
										name='password1'
										type='password'
										label='Password'
										autoComplete='new-password'
										required
									/>
									<TextField
										name='password2'
										type='password'
										label='Confirm Password'
										autoComplete='new-password'
										required
									/>
									<Button
										variant='contained'
										color='primary'
										disabled={!dirty || isSubmitting || !isValid}
										type='submit'
									>
										Register
									</Button>
								</Form>
							)
						}
					</Formik>
					<div className='helpLinks flex flex-column ai-center'>
						<Link to='/login'>Already a Foodie Fridge member? Log in.</Link>
						<Link to='/'>Back to Home</Link>
					</div>
				</div>
			</AuthCard>
			<div className='background-auth' />
		</div>
	)
}


export default RegisterForm
