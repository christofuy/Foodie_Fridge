import {Formik, Form} from 'formik'
import AuthCard from '../../components/AuthCard/AuthCard'
import TextField from '../../components/Form/TextField'
import Button from '../../components/Button/Button'
import {Link} from 'react-router-dom'
import {loginValidation} from '../../validations/authValidation'
import {handleLogin} from '../../utils/handleAuth'
import './loginform.scss'



const initialValues = {
	email: '',
	password: '',
}


const RegisterForm = () => {
	return (
		<div className='login-form flex'>
			<div className='background-auth' />
			<AuthCard>
				<div className='form'>
					<Formik
						initialValues={initialValues}
						validationSchema={loginValidation}
						onSubmit={handleLogin}
					>
						{
							({dirty, isSubmitting, isValid}) => (
								<Form className='flex flex-column'>
									<h2>Log In</h2>
									<TextField
										name='email'
										type='email'
										label='Email'
										autoComplete='email'
										required
										autoFocus
									/>
									<TextField
										name='password'
										type='password'
										label='Password'
										autoComplete='current-password'
										required
									/>
									<Button
										variant='contained'
										color='primary'
										disabled={!dirty || isSubmitting || !isValid}
										type='submit'
									>
										Log In
									</Button>
								</Form>
							)
						}
					</Formik>
					<div className='helpLinks flex flex-column ai-center'>
						<Link to='/register'>Not a Foodie Fridge member yet? Register.</Link>
						<Link to='/'>Back to Home</Link>
					</div>
				</div>
			</AuthCard>
		</div>
	)
}


export default RegisterForm
